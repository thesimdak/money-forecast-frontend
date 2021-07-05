import { createAction, props } from '@ngrx/store';
import { Account } from 'src/app/models/account.interface';
     
export const addAccount = createAction(
  '[Incomes] Add Account',
  props<{ account: Account }>()
);

export const addAccountSuccess = createAction(
  '[Incomes] Add Account Success',
  props<{ account: Account }>()
);

export const removeAccount = createAction(
  '[Incomes] Remove Account',
  props<{ id: string }>()
);

export const removeAccountSuccess = createAction(
  '[Incomes] Remove Account Success',
  props<{ id: string }>()
);
  
export const retrievedAccountList = createAction(
  '[Incomes] Retrieved Account Success',
  props<{ account: Account []}>()
);