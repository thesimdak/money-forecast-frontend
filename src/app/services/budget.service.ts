import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { combineLatest } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { Account } from "../models/account.interface";
import { IncomeOutcome } from "../models/income-outcome.interface";
import { AppState } from "../state/app.state";
import { AccountService } from "./account.service";
import { IncomeService } from "./income.service";
import { OutcomeService } from "./outcome.service";

@Injectable({
    providedIn: 'root'
})
export class BudgetService {

    constructor(private incomeService: IncomeService, private outcomeService: OutcomeService, private accountService: AccountService) { }

    public getBudget(year: number): Observable<number[]> {
        return combineLatest([this.accountService.getAccounts(), this.incomeService.getIncomes(), this.outcomeService.getOutcomes()])
            .pipe(mergeMap(([accounts, incomes, outcomes]) => {
                const startBalance = this.computeCurrentBudget(accounts);
                const incomesPerMonthForYears: Map<number, number[]> = this.computeIncomesPerMonthForYears(year, startBalance, incomes, outcomes);
                return of(incomesPerMonthForYears.get(year));
            }));
    }
   
    computeIncomesPerMonthForYears(year: number, startBalance: number, incomes: IncomeOutcome[], outcomes: IncomeOutcome[]): Map<number, number[]> {
        const result = new Map();
        for (let yearIndex = new Date().getFullYear(); yearIndex <= year; yearIndex++) {
            const yearResult = [];
            const monthInYear = yearIndex === new Date().getFullYear() ? 12 - new Date().getMonth() : 12
            for (let i = 0; i < monthInYear; i++) {
                const monthIndex = 12 - monthInYear + i + 1;
                const currentMonthSaldo: number = this.computeBalanceOfCurrentMonth(yearIndex, monthIndex, incomes, outcomes);
                yearResult[i] = startBalance;
                startBalance = startBalance + currentMonthSaldo;
            }
            result.set(yearIndex, yearResult);
        }
        return result;
    }
    computeBalanceOfCurrentMonth(year: number, monthIndex: number, incomes: IncomeOutcome[], outcomes: IncomeOutcome[]): number {
        const sumOfIncomes: number = this.computeIncomeOutcomeSubForMonth(year, monthIndex, incomes);
        const sumOfOutcomes: number = this.computeIncomeOutcomeSubForMonth(year, monthIndex, outcomes);
        return sumOfIncomes - sumOfOutcomes;
    }
    computeIncomeOutcomeSubForMonth(year: number, monthIndex: number, incomesOutcomes: IncomeOutcome[]): number {
        let sum = 0;
        for (const incomeOutcome of incomesOutcomes) {
            for (const timePoint of incomeOutcome.regularity.timePoints) {
                if ((timePoint.year == year || timePoint.year == 0) && (timePoint.month == monthIndex || timePoint.month == 0)) {
                    sum = sum + incomeOutcome.balance*timePoint.days.length;
                }
            }
        }
        return sum;
    }

    private computeCurrentBudget(accounts: Account[]): number {
        let budget = 0;
        for (const account of accounts) {
            budget = budget + account.balance
        }
        return budget;
    }

    private test(year, accounts, incomes, outcomes) {
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
    }
}