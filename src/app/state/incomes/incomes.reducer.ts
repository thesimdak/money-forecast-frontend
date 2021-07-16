import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { IncomeOutcome } from '../../models/income-outcome.interface';
import { AppState } from '../app.state';

import { addIncome, addIncomeSuccess, editIncomeSuccess, removeIncomeSuccess, retrievedIncomeList } from './incomes.actions';

export const initialState: ReadonlyArray<IncomeOutcome> = [];

const _incomesReducer = createReducer(
  initialState,
  on(addIncomeSuccess, (state: ReadonlyArray<IncomeOutcome>, { income }) => [income, ...state]),
  on(removeIncomeSuccess, (state: ReadonlyArray<IncomeOutcome>, { id }) => {
    var index = state.map(income => {
      return income.id;
    }).indexOf(id);

    let items = [...state.slice(0, index)];
    return [...items, ...state.slice(index + 1, state.length)]
  }),
  on(editIncomeSuccess, (state: ReadonlyArray<IncomeOutcome>, { income }) => {
    var index = state.map(income => {
      return income.id;
    }).indexOf(income.id);

    let items = [...state.slice(0, index)];
    items = [...items, income];
    return [...items, ...state.slice(index + 1, state.length)]
  })
);

export function incomesReducer(state, action) {
  return _incomesReducer(state, action);
}