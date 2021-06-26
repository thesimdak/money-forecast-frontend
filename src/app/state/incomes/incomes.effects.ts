import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { IncomeService } from '../../services/income.service';
import { addIncome, addIncomeSuccess, removeIncome, removeIncomeSuccess, retrievedIncomeList } from './incomes.actions';

@Injectable()
export class IncomesEffects {

    addIncome$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addIncome),
            exhaustMap(action =>
                this.incomeService.saveIncome(action.income).pipe(
                  map(income => addIncomeSuccess({income}))
                )
              )
        ));

        removeIncome$ = createEffect(() =>
        this.actions$.pipe(
            ofType(removeIncome),
            exhaustMap(action =>
                this.incomeService.deleteIncome(action.id).pipe(
                  map(id => removeIncomeSuccess({id}))
                )
              )
        ));

    constructor(
        private actions$: Actions, private incomeService: IncomeService
    ) { }
}