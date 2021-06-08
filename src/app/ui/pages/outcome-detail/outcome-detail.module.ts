import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutcomeDetailComponent } from './outcome-detail.component';
import { OutcomeDetailRoutingModule } from './outcome-detail-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { IncomeOutcomeFormModule } from '../../components/income-outcome-form/income-outcome-form.module';

@NgModule({
  declarations: [OutcomeDetailComponent],
  imports: [
    CommonModule,
    OutcomeDetailRoutingModule,
    IncomeOutcomeFormModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
  ],
})
export class OutcomeDetailModule {}
