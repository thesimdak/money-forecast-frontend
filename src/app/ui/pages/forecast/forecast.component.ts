import { Component, OnInit } from '@angular/core';

interface Year {
  name: string;
  code: number;
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  public yearsOptions: Year[] = [];
  public basicOptions: any;
  public basicData: any;

  constructor() { }

  ngOnInit(): void {
    for (let i = new Date().getFullYear(); i <= new Date().getFullYear() + 50; i++) {
      this.yearsOptions.push({
        name: i + '',
        code: i
      })
    }
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'],
      datasets: [

        {
          label: 'Expected budget',
          data: [2000, 1637, 5320, 6923, 3894, 2455, 4598, 5667, 8394, 11324, 12234, 12403],
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
      }
    };

  }

}
