import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AccountService } from 'src/app/store/data-service/account.service';

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

  constructor(private accountService: AccountService) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.accounts$ = this.accountService.load();
    this.accounts$.pipe(takeUntil(this.destroy$)).subscribe(accounts => this.accounts = accounts);
  }

}