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

  public year: string = new Date().getFullYear() + '';
  public monthList = ['1.1.', '1.2.', '1.3.', '1.4.', '1.5.', '1.6.', '1.7.', '1.8.', '1.9.', '1.10.', '1.11.', '1.12.'];
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
      tooltips: {
        callbacks: {
          label: function (context) {
            var label = context.yLabel|| '';
              label = 'Expected budget: ' +  new Intl.NumberFormat('at-DE', { style: 'currency', currency: 'EUR' }).format(label);
          
            return label;
          }
        }
      },
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
            fontColor: '#495057',
            callback: (label, index, labels) => {
              return new Intl.NumberFormat('at-DE', { style: 'currency', currency: 'EUR' }).format(label);
            }
          }
        }]
      },
      responsive: false,
      maintainAspectRatio: false
    };
    this.updateForecast();

  }

  public onChange($event): void {
    this.year = $event.value;
    this.updateForecast();

  }
  updateForecast() {
    this.budgetService.getBudget(Number(this.year)).pipe(take(1)).subscribe(
      budgetData => {
        let basicData = this.basicData;
        basicData.datasets[0].data = budgetData;
        
        if (Number(this.year) === new Date().getFullYear()) {
          basicData.labels = this.monthList.slice(12 - budgetData.length + 1, 12);
          basicData.labels = [new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.', ...basicData.labels]
        } else {
          basicData.labels = this.monthList.slice(12 - budgetData.length, 12);
        }
        this.basicData = { ...basicData };
      }
    );
  }

}
