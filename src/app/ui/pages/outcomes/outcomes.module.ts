import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutcomesComponent } from './outcomes.component';
import { OutcomesRoutingModule } from './outcomes-routing.module';



@NgModule({
  declarations: [OutcomesComponent],
  imports: [
    OutcomesRoutingModule,
    CommonModule
  ]
})
export class OutcomesModule { }
