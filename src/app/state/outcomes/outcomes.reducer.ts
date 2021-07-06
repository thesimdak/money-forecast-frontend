import { createReducer, on } from '@ngrx/store';
import { IncomeOutcome } from '../../models/income-outcome.interface';

import { addOutcomeSuccess, removeOutcomeSuccess } from './outcomes.actions';

export const initialState: ReadonlyArray<IncomeOutcome> = [];

const _outcomesReducer = createReducer(
  initialState,
  on(addOutcomeSuccess, (state: ReadonlyArray<IncomeOutcome>, { outcome }) => [outcome, ...state]),
  on(removeOutcomeSuccess, (state: ReadonlyArray<IncomeOutcome>, { id }) => {
    var index = state.map(income => {
      return income.id;
    }).indexOf(id);

    let items = [...state.slice(0, index)];
    return [...items, ...state.slice(index + 1, state.length)]
  })
);

export function outcomesReducer(state, action) {
  return _outcomesReducer(state, action);
}