import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Account } from "src/app/models/account.interface";


@Injectable()
export class AccountsDataService extends DefaultDataService<Account> {
    constructor(
      http: HttpClient, httpUrlGenerator: HttpUrlGenerator,
    ) {
      super('Account', http, httpUrlGenerator);
    }

  }