import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { OutcomeService } from '../../services/outcome.service';
import { addOutcome, addOutcomeSuccess, editOutcome, editOutcomeSuccess, removeOutcome, removeOutcomeSuccess, retrievedOutcomeList } from './outcomes.actions';

@Injectable()
export class OutcomesEffects {

  addOutcome$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addOutcome),
      exhaustMap(action =>
        this.outcomeService.saveOutcome(action.outcome).pipe(
          map(outcome => addOutcomeSuccess({ outcome }))
        )
      )
    ));

  removeOutome$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeOutcome),
      exhaustMap(action =>
        this.outcomeService.deleteOutcome(action.id).pipe(
          map(id => removeOutcomeSuccess({ id }))
        )
      )
    ));

  updateOutcome$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editOutcome),
      exhaustMap(action =>
        this.outcomeService.updateOutcome(action.outcome).pipe(
          map(outcome => editOutcomeSuccess({ outcome }))
        )
      )
    ));

  constructor(
    private actions$: Actions, private outcomeService: OutcomeService
  ) { }
}