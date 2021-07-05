import { Component, OnInit } from '@angular/core';
import { IncomeService } from 'src/app/services/income.service';

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
