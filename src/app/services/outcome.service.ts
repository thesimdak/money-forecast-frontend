import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { select } from "@ngrx/store";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { Observable } from "rxjs";
import { IncomeOutcome } from "../models/income-outcome.interface";
import { AppState } from "../state/app.state";
import { addOutcome, removeOutcome} from "../state/outcomes/outcomes.actions";
import { selectOutcomes } from "../state/outcomes/outcomes.selectors";

@Injectable({
    providedIn: 'root'
})
export class OutcomeService {

    constructor(private store: Store<AppState>) { }


    public saveOutcome(outcome: IncomeOutcome): Observable<IncomeOutcome> {
        console.log('Saving outcome', outcome);
        return of(outcome);
    }

    public addOutcome(outcome: IncomeOutcome): void{
        this.store.dispatch(addOutcome( { outcome }));
    }

    public deleteOutcome(id: string): Observable<string> {
        console.log('Deleting outcome', id);
        return of(id);
    }

    public removeOutcome(id: string): void{
        this.store.dispatch(removeOutcome({ id }));
    }

   
    public getOutcomes(): Observable<IncomeOutcome[]> {
        return this.store.pipe(select(selectOutcomes));
    }

        
}