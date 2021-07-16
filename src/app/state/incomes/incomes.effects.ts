import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { IncomeService } from '../../services/income.service';
import { addIncome, addIncomeSuccess, editIncome, editIncomeSuccess, removeIncome, removeIncomeSuccess } from './incomes.actions';

@Injectable()
export class IncomesEffects {

  addIncome$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addIncome),
      exhaustMap(action =>
        this.incomeService.saveIncome(action.income).pipe(
          map(income => addIncomeSuccess({ income }))
        )
      )
    ));

  removeIncome$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeIncome),
      exhaustMap(action =>
        this.incomeService.deleteIncome(action.id).pipe(
          map(id => removeIncomeSuccess({ id }))
        )
      )
    ));

  updateIncome$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editIncome),
      exhaustMap(action =>
        this.incomeService.updateIncome(action.income).pipe(
          map(income => editIncomeSuccess({ income }))
        )
      )
    ));

  constructor(
    private actions$: Actions, private incomeService: IncomeService
  ) { }
}