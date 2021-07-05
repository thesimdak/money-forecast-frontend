import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { addAccount, addAccountSuccess, removeAccount, removeAccountSuccess } from './accounts.actions';

@Injectable()
export class AccountsEffects {

  addAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addAccount),
      exhaustMap(action =>
        this.accountService.saveAccount(action.account).pipe(
          map(account => addAccountSuccess({ account }))
        )
      )
    ));

  removeAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeAccount),
      exhaustMap(action =>
        this.accountService.deleteAccount(action.id).pipe(
          map(id => removeAccountSuccess({ id }))
        )
      )
    ));

  constructor(
    private actions$: Actions, private accountService: AccountService
  ) { }
}