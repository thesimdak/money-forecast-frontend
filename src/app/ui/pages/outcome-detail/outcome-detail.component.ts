import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Currency } from 'src/app/models/currency.interface';
import { IncomeOutcome } from 'src/app/models/income-outcome.interface';

interface Day {
  name: string;
  code: number;
}

interface Month {
  name: string;
  code: number;
}

@Component({
  selector: 'app-outcome-detail-forecast',
  templateUrl: './outcome-detail.component.html',
  styleUrls: ['./outcome-detail.component.scss'],
})
export class OutcomeDetailComponent implements OnInit {
  public currencies: Currency[];

  public selectedCurrency: Currency;
  @Input()
  public income: IncomeOutcome = {
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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  
    

  }



  public saveOutcome(outcome: IncomeOutcome) {
    console.log(outcome);
  }
}
