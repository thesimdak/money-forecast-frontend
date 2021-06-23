import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Account } from "src/app/models/account.interface";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AccountsComponent implements OnInit, OnDestroy {

  public budget: number;
  public accounts: Account[];
  public accounts$: Observable<Account[]>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    //this.accounts$ = this.accountService.load();
    this.accounts$ = new Observable(subscriber => {
      subscriber.next([{
        name: 'BTV',
        balance: 2500,
        currency: 'EUR'
      },
      {
        name: 'Hypo Tirol Bank',
        balance: 2500,
        currency: 'EUR'
      }]);
    });
    this.accounts$.pipe(takeUntil(this.destroy$)).subscribe(accounts => this.accounts = accounts);
  }

}
