import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IncomeService } from 'src/app/services/income.service';
import { AppState } from 'src/app/state/app.state';
import { selectIncomes } from 'src/app/state/incomes/incomes.selectors';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.scss']
})
export class IncomesComponent implements OnInit {

  public incomes$;
  constructor(private incomeService: IncomeService) { 
    this.incomes$ = this.incomeService.getIncomes();
  }

  ngOnInit(): void {
  }

  public removeIncome(id: string) {
    this.incomeService.removeIncome(id);
  }

}
