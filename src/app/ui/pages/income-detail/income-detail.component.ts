import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { IncomeOutcome } from 'src/app/models/income-outcome.interface';
import { IncomeService } from 'src/app/services/income.service';
import { AppState } from 'src/app/state/app.state';
import { selectIncomes } from 'src/app/state/incomes/incomes.selectors';
import { addIncome, retrievedIncomeList } from '../../../state/incomes/incomes.actions';
@Component({
  selector: 'app-income-detail-forecast',
  templateUrl: './income-detail.component.html',
  styleUrls: ['./income-detail.component.scss'],
})
export class IncomeDetailComponent implements OnInit {

  public income: IncomeOutcome = {
    name: '',
    balance: 0,
    currency: 'EUR',
    regularity: {
      timePoints: [{
        year: 0,
        month: new Date().getMonth() + 1,
        days: []
      }]
    }
  };

  constructor(private incomeService: IncomeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public saveIncome(income: IncomeOutcome) {
    this.incomeService.addIncome(income);
    this.router.navigate(['../incomes']);
  }

}