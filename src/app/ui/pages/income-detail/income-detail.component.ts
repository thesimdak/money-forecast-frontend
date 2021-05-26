import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Account } from 'src/app/models/account.interface';
import { Currency } from 'src/app/models/currency.interface';
import { Income } from 'src/app/models/income.interface';
import { AccountService } from 'src/app/store/data-service/account.service';

interface Day {
  label: string;
  code: string;
}

interface Month {
  name: string;
  code: string;
}

@Component({
  selector: 'app-income-detail-forecast',
  templateUrl: './income-detail.component.html',
  styleUrls: ['./income-detail.component.scss'],
})
export class IncomeDetailComponent implements OnInit {
  public currencies: Currency[];

  public selectedCurrency: Currency;
  @Input()
  public income: Income = {
    name: '',
    balance: 0,
    currency: '',
    regularity: {
      days: [],
      months: [],
      repeatable: false
    }


  };
  public incomeForm: FormGroup;

  daysOptions: SelectItem[];

  monthsOptions: Month[];


  constructor(private accountService: AccountService) {
    this.daysOptions = [
      {label:'New York', value:{id:1, name: 'New York'}},
    ];

    this.monthsOptions = [
      { name: 'January', code: '1' },
      { name: 'February', code: '2' },
      { name: 'Merch', code: '3' },
      { name: 'April', code: '4' },
      { name: 'May', code: '5' },
    ];
  }

  ngOnInit(): void {
    this.currencies = [{ name: 'EUR', code: 'EUR' }];
    this.selectedCurrency = this.currencies[0];
    this.incomeForm = new FormGroup({
      name: new FormControl(this.income == null ? '' : this.income.name),
      balance: new FormControl(
        this.income == null ? '' : this.income.balance
      ),
      currency: new FormControl(
        this.income == null ? 'EUR' : this.income.currency
      ),
      regularity: new FormGroup({
        days: new FormControl(this.income.regularity == null && this.income.regularity.days == null ? '' : this.income.regularity.days),
        months: new FormControl(this.income.regularity == null && this.income.regularity.months == null ? '' : this.income.regularity.months),
      })
    });
  }

  public saveIncome(): void {
    if (this.income == null) {
      this.accountService.add(this.incomeForm.value);
    } else {
      this.accountService.update(this.incomeForm.value);
    }

    console.log(this.incomeForm.value);
  }
}
