import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomesComponent } from './incomes.component';
import { IncomesRoutingModule } from './incomes-routing.module';



@NgModule({
  declarations: [IncomesComponent],
  imports: [
    IncomesRoutingModule,
    CommonModule
  ]
})
export class IncomesModule { }
