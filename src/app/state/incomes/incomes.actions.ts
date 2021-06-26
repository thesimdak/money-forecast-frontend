import { createAction, props } from '@ngrx/store';
import { IncomeOutcome } from '../../models/income-outcome.interface';
     
export const addIncome = createAction(
  '[Incomes] Add Income',
  props<{ income: IncomeOutcome }>()
);

export const addIncomeSuccess = createAction(
  '[Incomes] Add Income Success',
  props<{ income: IncomeOutcome }>()
);

export const removeIncome = createAction(
  '[Incomes] Remove Income',
  props<{ id: string }>()
);

export const removeIncomeSuccess = createAction(
  '[Incomes] Remove Income Success',
  props<{ id: string }>()
);
  
export const retrievedIncomeList = createAction(
  '[Incomes] Retrieved Incomes Success',
  props<{ incomes: IncomeOutcome []}>()
);