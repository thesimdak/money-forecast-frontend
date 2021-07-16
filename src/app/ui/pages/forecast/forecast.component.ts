import { ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { BudgetService } from 'src/app/services/budget.service';

interface Year {
  name: string;
  code: number;
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ForecastComponent implements OnInit {

  public year: string =  new Date().getFullYear() + '';
  public monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'];
  public yearsOptions: Year[] = [];
  public basicOptions: any;
  public basicData: any;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    for (let i = new Date().getFullYear(); i <= new Date().getFullYear() + 50; i++) {
      this.yearsOptions.push({
        name: i + '',
        code: i
      })
    }
    this.basicData = {
      labels: this.monthList.slice(12 - new Date().getMonth()),
      datasets: [

        {
          label: 'Expected budget',
          data: [],
          fill: false,
          borderColor: '#dbfe87ff'
        }
      ]
    };

    this.basicOptions = {
      legend: {
        labels: {
          fontColor: '#495057'
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }]
      },
      responsive: false,
      maintainAspectRatio: false
    };
    this.updateForecast(Number(this.year));

  }

  public onChange($event): void {
    this.year = $event.value;
    this.updateForecast(Number(this.year));
   
  }
  updateForecast(year: number) {
    this.budgetService.getBudget(Number(this.year)).pipe(take(1)).subscribe(
      budgetData => {
        let basicData = this.basicData;
        basicData.datasets[0].data = budgetData;
        basicData.labels = this.monthList.slice(12 - budgetData.length, 12);
        this.basicData = {...basicData};
      }
    );
  }

}
