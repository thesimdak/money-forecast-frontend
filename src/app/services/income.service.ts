import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { Observable } from "rxjs";
import { IncomeOutcome } from "../models/income-outcome.interface";
import { AppState } from "../state/app.state";
import { addIncome } from "../state/incomes/incomes.actions";

@Injectable({
    providedIn: 'root'
})
export class IncomeService {

    constructor(private store: Store<AppState>) { }


    public saveIncome(income: IncomeOutcome): Observable<IncomeOutcome> {
        console.log('Saving income', income);
        return of(income);
    }

    public addIncome(income: IncomeOutcome): void{
        this.store.dispatch(addIncome( { income }));
    }
}