import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { combineLatest } from "rxjs";
import { Account } from "../models/account.interface";
import { AppState } from "../state/app.state";
import { AccountService } from "./account.service";
import { IncomeService } from "./income.service";
import { OutcomeService } from "./outcome.service";

@Injectable({
    providedIn: 'root'
})
export class BudgetService {

    constructor(private incomeService: IncomeService, private outcomeService: OutcomeService, private accountService: AccountService) { }

    public getBudget(year: number): number[] {
        combineLatest([this.accountService.getAccounts(), this.incomeService.getIncomes(), this.outcomeService.getOutcomes()])
                .subscribe(([accounts, incomes, outcomes]) => {
                  let currentBudget = this.computeCurrentBudget(accounts);
                  // refactor
                  if (year === new Date().getFullYear()) {
                    for (const income of incomes) {
                        for (const timePoint of income.regularity.timePoints) {
                            if (timePoint.year == new Date().getFullYear() || timePoint.year == 0) {
                                for (const timePoint of income.regularity.timePoints) {
                                    if (timePoint.year == new Date().getFullYear() || timePoint.year == 0) {
                                        currentBudget = currentBudget + income.balance;
                                    }
                                }
                                currentBudget = currentBudget + income.balance;
                            }
                        }
                    }
                  }
                });
        return [];
    }
    private computeCurrentBudget(accounts: Account[]): number {
        let budget = 0;
        for (const account of accounts) {
            budget = budget + account.balance
        }
        return budget;
    }
}