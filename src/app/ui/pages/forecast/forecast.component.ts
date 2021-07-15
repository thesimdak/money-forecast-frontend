import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';

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
          data: [20000, 16370, 53200, 69230, 38940, 24550, 45908, 56067, 83904, 113024, 120234, 124003],
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

  }

}
