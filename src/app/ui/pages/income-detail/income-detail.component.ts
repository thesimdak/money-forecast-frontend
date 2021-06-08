import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
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
  selector: 'app-income-detail-forecast',
  templateUrl: './income-detail.component.html',
  styleUrls: ['./income-detail.component.scss'],
})
export class IncomeDetailComponent implements OnInit {
  
  public income: IncomeOutcome = {
    name: 'My account!',
    balance: 1223,
    currency: '',
    regularity: {
      timePoints: [{
        year: 2021,
        month: 7,
        days: [2, 31]
      },
      {
        year: 2021,
        month: 9,
        days: [31]
      }]
    }
  };

  ngOnInit(): void {
  }
}