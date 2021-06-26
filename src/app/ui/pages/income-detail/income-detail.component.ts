import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { IncomeOutcome } from 'src/app/models/income-outcome.interface';
import { IncomeService } from 'src/app/services/income.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-income-detail-forecast',
  templateUrl: './income-detail.component.html',
  styleUrls: ['./income-detail.component.scss'],
})
export class IncomeDetailComponent implements OnInit {

  public income: IncomeOutcome;

  constructor(private incomeService: IncomeService, private route: ActivatedRoute, private router: Router) {
    combineLatest([this.incomeService.getIncomes(), this.route.params])
    .subscribe(([incomes, params]) => {
      if (params['id'] != null) {
        incomes.forEach(income => {
          if (income.id === params['id']) {
            this.income = income;
          }
        });
      } else {
        this.income = {
          id: uuidv4(),
          name: '',
          balance: 0,
          currency: 'EUR',
          regularity: {
            timePoints: [{
              year: 0,
              month: 0,
              days: []
            }]
          }
        };
      }
    });
  }

  ngOnInit(): void {
  }

  public saveIncome(income: IncomeOutcome) {
    this.incomeService.addIncome(income);
    this.router.navigate(['../incomes']);
  }

}