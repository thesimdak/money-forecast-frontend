import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, EmptyError } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap, exhaustMap } from 'rxjs/operators';
import { IncomeService } from '../../services/income.service';
import { addIncome, addIncomeSuccess, retrievedIncomeList } from './incomes.actions';

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

    constructor(
        private actions$: Actions, private incomeService: IncomeService
    ) { }
}