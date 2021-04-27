import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutcomesComponent } from './outcomes.component';
import { OutcomesRoutingModule } from './outcomes-routing.module';
import { AmountPanelModule } from '../../components/amount-panel/amount-panel.module';



@NgModule({
  declarations: [OutcomesComponent],
  imports: [
    OutcomesRoutingModule,
    CommonModule,
    AmountPanelModule
  ]
})
export class OutcomesModule { }
