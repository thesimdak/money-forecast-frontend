import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Account } from "src/app/models/account.interface";
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AccountsComponent implements OnInit, OnDestroy {

  public budget: number;
  public accounts: Account[];
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private accountService: AccountService) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(accounts => this.accounts = accounts);
  }

  public removeAccount(id: string) {
    this.accountService.removeAccount(id);
  }

}
