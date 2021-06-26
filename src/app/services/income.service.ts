import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { select } from "@ngrx/store";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { Observable } from "rxjs";
import { IncomeOutcome } from "../models/income-outcome.interface";
import { AppState } from "../state/app.state";
import { addIncome, removeIncome } from "../state/incomes/incomes.actions";
import { selectIncomes } from "../state/incomes/incomes.selectors";

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

    public deleteIncome(id: string): Observable<string> {
        console.log('Deleting income', id);
        return of(id);
    }

    public removeIncome(id: string): void{
        this.store.dispatch(removeIncome({ id }));
    }

   
    public getIncomes(): Observable<IncomeOutcome[]> {
        return this.store.pipe(select(selectIncomes));
    }

        
}