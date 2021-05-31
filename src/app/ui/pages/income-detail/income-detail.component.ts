import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Currency } from 'src/app/models/currency.interface';
import { Income } from 'src/app/models/income.interface';
import { AccountService } from 'src/app/store/data-service/account.service';

interface Day {
  name: string;
  code: number;
}

interface Month {
  name: string;
  code: number;
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
    name: 'My account',
    balance: 122,
    currency: '',
    regularity: {
      timePoints: [{
        month: 1,
        days: [2, 3]
      }],
      repeatable: false
    }


  };
  public incomeForm: FormGroup;

  daysOptions: Day[];
  daysOptions28: Day[];
  daysOptions30: Day[];
  daysOptions31: Day[];

  monthsOptions: Month[];


  constructor(private accountService: AccountService, private fb: FormBuilder) {
    this.daysOptions28 = [
      { name: '1.', code: 1 },
      { name: '2.', code: 2 },
      { name: '3.', code: 3 },
      { name: '4.', code: 4 },
      { name: '5.', code: 5 },
      { name: '6.', code: 6 },
      { name: '7.', code: 7 },
      { name: '8.', code: 8 },
      { name: '9.', code: 9 },
      { name: '10.', code: 10 },
      { name: '11.', code: 11 },
      { name: '12.', code: 12 },
      { name: '13.', code: 13 },
      { name: '14.', code: 14 },
      { name: '15.', code: 15 },
      { name: '16.', code: 16 },
      { name: '17.', code: 17 },
      { name: '18.', code: 18 },
      { name: '19.', code: 19 },
      { name: '20.', code: 20 },
      { name: '21.', code: 21 },
      { name: '22.', code: 22 },
      { name: '23.', code: 23 },
      { name: '24.', code: 24 },
      { name: '25.', code: 25 },
      { name: '26.', code: 26 },
      { name: '27.', code: 27 },
      { name: '28.', code: 28 },
    ];

    this.daysOptions30 = this.daysOptions28;
    this.daysOptions30.push({ name: '29.', code: 29 });
    this.daysOptions30.push({ name: '30.', code: 30 });
    this.daysOptions31 = this.daysOptions30;
    this.daysOptions31.push({ name: '31.', code: 31 });

    this.daysOptions = this.daysOptions28;

    this.monthsOptions = [
      { name: 'January', code: 1 },
      { name: 'February', code: 2 },
      { name: 'Merch', code: 3 },
      { name: 'April', code: 4 },
      { name: 'May', code: 5 },
    ];
  }

  ngOnInit(): void {
    this.currencies = [{ name: 'EUR', code: 'EUR' }];
    this.selectedCurrency = this.currencies[0];
    this.incomeForm = this.fb.group({
      name: this.fb.control(this.income == null ? '' : this.income.name),
      balance: this.fb.control(
        this.income == null ? '' : this.income.balance
      ),
      currency: this.fb.control(
        this.income == null ? 'EUR' : this.income.currency
      ),
      regularity: this.fb.group({
        timePoints: this.fb.array([this.fb.group({
          month: this.fb.control(this.income.regularity.timePoints[0].month),
          days: this.fb.control(this.income.regularity.timePoints[0].days),
        })
        ])

      })
    });

  }

  public onChangeMonth(event) {
    console.log(event);
    this.incomeForm.get('regularity');
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
