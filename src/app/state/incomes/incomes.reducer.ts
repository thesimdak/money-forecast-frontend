import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { IncomeOutcome } from '../../models/income-outcome.interface';
import { AppState } from '../app.state';

import { addIncome, addIncomeSuccess, retrievedIncomeList } from './incomes.actions';

export const initialState: ReadonlyArray<IncomeOutcome> = [];

const _incomesReducer = createReducer(
  initialState,
  on(addIncomeSuccess, (state: ReadonlyArray<IncomeOutcome>, { income }) => [income, ...state]),
 // on(addIncome, (state: ReadonlyArray<IncomeOutcome>, { income }) => [...incomes])
);

export function incomesReducer(state, action) {
    return _incomesReducer(state, action);
  }