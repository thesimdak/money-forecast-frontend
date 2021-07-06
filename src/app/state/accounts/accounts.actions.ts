import { createAction, props } from '@ngrx/store';
import { Account } from 'src/app/models/account.interface';
     
export const addAccount = createAction(
  '[Accounts] Add Account',
  props<{ account: Account }>()
);

export const addAccountSuccess = createAction(
  '[Accounts] Add Account Success',
  props<{ account: Account }>()
);

export const removeAccount = createAction(
  '[Accounts] Remove Account',
  props<{ id: string }>()
);

export const removeAccountSuccess = createAction(
  '[Accounts] Remove Account Success',
  props<{ id: string }>()
);
  
export const retrievedAccountList = createAction(
  '[Accounts] Retrieved Account Success',
  props<{ account: Account []}>()
);