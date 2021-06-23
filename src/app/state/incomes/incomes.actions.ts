import { createAction, props } from '@ngrx/store';
import { IncomeOutcome } from '../../models/income-outcome.interface';
     
export const addIncome = createAction(
  '[Income List] Add Income',
  props<{ income: IncomeOutcome }>()
);

export const addIncomeSuccess = createAction(
  '[Income List] Add Income Success',
  props<{ income: IncomeOutcome }>()
);
  
export const retrievedIncomeList = createAction(
  '[Income List] Retrieved Incomes Success',
  props<{ incomes: IncomeOutcome []}>()
);