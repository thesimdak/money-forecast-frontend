import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { select } from "@ngrx/store";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { Observable } from "rxjs";
import { IncomeOutcome } from "../models/income-outcome.interface";
import { AppState } from "../state/app.state";
import { addIncome, removeIncome, editIncome } from "../state/incomes/incomes.actions";
import { selectIncomes } from "../state/incomes/incomes.selectors";

@Injectable({
    providedIn: 'root'
})
export class IncomeService {

    constructor(private store: Store<AppState>) { }

    public addIncome(income: IncomeOutcome): void{
        this.store.dispatch(addIncome( { income }));
    }

    public removeIncome(id: string): void{
        this.store.dispatch(removeIncome({ id }));
    }

    public editIncome(income: IncomeOutcome): void {
        this.store.dispatch(editIncome({ income }));
    }

    public saveIncome(income: IncomeOutcome): Observable<IncomeOutcome> {
        console.log('Saving income', income);
        return of(income);
    }

    public deleteIncome(id: string): Observable<string> {
        console.log('Deleting income', id);
        return of(id);
    }

    public updateIncome(income: IncomeOutcome): Observable<IncomeOutcome> {
        console.log('Updating income', income);
        return of(income);
    }
   
    public getIncomes(): Observable<IncomeOutcome[]> {
        return this.store.pipe(select(selectIncomes));
    }

        
}