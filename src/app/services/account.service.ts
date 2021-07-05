import { Injectable } from "@angular/core";
import { select } from "@ngrx/store";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { Observable } from "rxjs";
import { Account } from "../models/account.interface";
import { addAccount, removeAccount } from "../state/accounts/accounts.actions";
import { selectAccounts } from "../state/accounts/accounts.selectors";
import { AppState } from "../state/app.state";

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private store: Store<AppState>) { }


    public saveAccount(account: Account): Observable<Account> {
        console.log('Saving income', account);
        return of(account);
    }

    public addAccount(account: Account): void{
        this.store.dispatch(addAccount( { account }));
    }

    public deleteAccount(id: string): Observable<string> {
        console.log('Deleting income', id);
        return of(id);
    }

    public removeAccount(id: string): void{
        this.store.dispatch(removeAccount({ id }));
    }

   
    public getAccounts(): Observable<Account[]> {
        return this.store.pipe(select(selectAccounts));
    }

        
}