import { createAction, props } from '@ngrx/store';
import { IncomeOutcome } from '../../models/income-outcome.interface';
     
export const addOutcome = createAction(
  '[Outcomes] Add Outcome',
  props<{ outcome: IncomeOutcome }>()
);

export const addOutcomeSuccess = createAction(
  '[Outcomes] Add Outcome Success',
  props<{ outcome: IncomeOutcome }>()
);

export const removeOutcome = createAction(
  '[Outcomes] Remove Outcome',
  props<{ id: string }>()
);

export const removeOutcomeSuccess = createAction(
  '[Outcomes] Remove Outcome Success',
  props<{ id: string }>()
);
  
export const retrievedOutcomeList = createAction(
  '[Outcomes] Retrieved Outcomes Success',
  props<{ outcomes: IncomeOutcome []}>()
);