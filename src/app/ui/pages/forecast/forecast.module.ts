import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast.component';
import { ForecastRoutingModule } from './forecast-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ForecastComponent],
  imports: [
    ForecastRoutingModule,
    CommonModule,
    RouterModule
  ]
})
export class ForecastModule { }
