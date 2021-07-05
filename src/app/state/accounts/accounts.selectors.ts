import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Account } from "src/app/models/account.interface";
 
export const selectAccounts = createSelector(
  (state: AppState) => state.accounts,
  (accounts: Array<Account>) => accounts
);
 
