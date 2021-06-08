import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Currency } from 'src/app/models/currency.interface';
import { IncomeOutcome } from 'src/app/models/income-outcome.interface';
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
  selector: 'app-income-outcome-form',
  templateUrl: './income-outcome-form.component.html',
  styleUrls: ['./income-outcome-form.component.scss']
})
export class IncomeOutcomeFormComponent implements OnInit {

  public currencies: Currency[];

  public selectedCurrency: Currency;
  @Input()
  public incomeOutcome: IncomeOutcome = {
    name: null,
    balance: null,
    currency: 'EUR',
    regularity: {
      timePoints: [{
        year: null,
        month: null,
        days: []
      }]
    }
  };


  public timePointFormArray: FormArray = this.fb.array([
  ]);
  public incomeForm: FormGroup;

  yearsOptions: Day[];
  daysOptions: Day[];
  daysOptions28: Day[];
  daysOptions30: Day[];
  daysOptions31: Day[];

  monthsOptions: Month[];


  constructor(private accountService: AccountService, private fb: FormBuilder) {
    this.yearsOptions = [
      { name: 'Yearly', code: 0 },
      { name: '2021', code: 2021 },
      { name: '2022', code: 2022 },
      { name: '2023', code: 2023 },
      { name: '2024', code: 2024 },
      { name: '2025', code: 2025 },
    ];

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
      { name: 'September', code: 9 },
      { name: 'October', code: 10 },
    ];
  }

  ngOnInit(): void {
    this.currencies = [{ name: 'EUR', code: 'EUR' }];
    this.selectedCurrency = this.currencies[0];

    for (const timePoint of this.incomeOutcome.regularity.timePoints) {
      const timePointGroup = this.fb.group({
        year: this.fb.control(''),
        month: this.fb.control(''),
        days: this.fb.control(''),
      })
      timePointGroup.setValue(timePoint);
      this.timePointFormArray.push(timePointGroup);
    }
    

    this.incomeForm = this.fb.group({
      name: this.fb.control(''),
      balance: this.fb.control(0),
      currency: this.fb.control(
        this.incomeOutcome == null ? 'EUR' : this.incomeOutcome.currency
      ),
      regularity: this.fb.group({
        timePoints: this.timePointFormArray

      })
    });
    this.incomeForm.setValue(this.incomeOutcome);
    

  }

  public onChangeMonth(event) {
    console.log(event);
    this.incomeForm.get('regularity');
   // this.incomeForm.setValue(this.income2);
  }

  public saveIncome(): void {
    if (this.incomeOutcome == null) {
      this.accountService.add(this.incomeForm.value);
    } else {
      this.accountService.update(this.incomeForm.value);
    }

    console.log(this.incomeForm.value);
  }
}
