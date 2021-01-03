import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewForecastComponent } from './new-forecast.component';
import { NewForecastRoutingModule } from './new-forecast-routing.module';
import { AmountPanelModule } from '../../components/amount-panel/amount-panel.module';


@NgModule({
  declarations: [NewForecastComponent],
  imports: [
    CommonModule,
    NewForecastRoutingModule,
    AmountPanelModule
  ]
})
export class NewForecastModule { }
