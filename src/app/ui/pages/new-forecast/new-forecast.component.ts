import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-forecast',
  templateUrl: './new-forecast.component.html',
  styleUrls: ['./new-forecast.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NewForecastComponent implements OnInit {
  
  public budget: number;

  constructor() { }

  ngOnInit(): void {
  }

}
