import { createReducer, on } from '@ngrx/store';
import { Account } from 'src/app/models/account.interface';

import { addAccountSuccess, editAccountSuccess, removeAccountSuccess } from './accounts.actions';

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
  }),
  on(editAccountSuccess, (state: ReadonlyArray<Account>, { account }) => {
    var index = state.map(a => {
      return a.id;
    }).indexOf(account.id);

    let items = [...state.slice(0, index)];
    items = [...items, account];
    return [...items, ...state.slice(index + 1, state.length)]
  })
);

export function accountsReducer(state, action) {
  return _accountsReducer(state, action);
}