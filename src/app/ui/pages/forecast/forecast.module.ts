import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast.component';
import { ForecastRoutingModule } from './forecast-routing.module';
import { RouterModule } from '@angular/router';
import {ChartModule} from 'primeng/chart'; 
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [ForecastComponent],
  imports: [
    ForecastRoutingModule,
    CommonModule,
    RouterModule,
    ChartModule,
    DropdownModule,
  ]
})
export class ForecastModule { }
