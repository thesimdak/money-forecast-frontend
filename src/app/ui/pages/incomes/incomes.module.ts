import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomesComponent } from './incomes.component';
import { IncomesRoutingModule } from './incomes-routing.module';
import { AmountPanelModule } from '../../components/amount-panel/amount-panel.module';



@NgModule({
  declarations: [IncomesComponent],
  imports: [
    IncomesRoutingModule,
    CommonModule,
    AmountPanelModule
  ]
})
export class IncomesModule { }
