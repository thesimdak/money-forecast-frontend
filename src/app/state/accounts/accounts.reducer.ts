import { createReducer, on } from '@ngrx/store';
import { Account } from 'src/app/models/account.interface';

import { addAccountSuccess, removeAccountSuccess } from './accounts.actions';

export const initialState: ReadonlyArray<Account> = [];

const _accountsReducer = createReducer(
  initialState,
  on(addAccountSuccess, (state: ReadonlyArray<Account>, { account }) => [account, ...state]),
  on(removeAccountSuccess, (state: ReadonlyArray<Account>, { id }) => {
    var index = state.map(account => {
      return account.id;
    }).indexOf(id);

    let items = [...state.slice(0, index)];
    return [...items, ...state.slice(index + 1, state.length)]
  })
);

export function accountsReducer(state, action) {
  return _accountsReducer(state, action);
}