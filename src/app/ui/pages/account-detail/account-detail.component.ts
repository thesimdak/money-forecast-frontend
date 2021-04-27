import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Account } from 'src/app/models/account.interface';
import { AccountService } from 'src/app/store/data-service/account.service';

interface Currency {
  name: string;
  code: string;
}

@Component({
  selector: 'app-account-detail-forecast',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {
  public currencies: Currency[];

  public selectedCurrency: Currency;
  @Input()
  public account: Account;
  public accountForm: FormGroup;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.currencies = [{ name: 'EUR', code: 'EUR' }];
    this.selectedCurrency = this.currencies[0];
    this.accountForm = new FormGroup({
      name: new FormControl(this.account == null ? '' : this.account.name),
      balance: new FormControl(this.account == null ? '' : this.account.balance),
      currency: new FormControl(this.account == null ? 'EUR' : this.account.currency),
    });
  }

  public saveAccount(): void {
    if (this.account == null) {
      this.accountService.add(this.accountForm.value);
    } else {
      this.accountService.update(this.accountForm.value);
    }

    console.log(this.accountForm.value);
  }
}
