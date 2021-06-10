import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeOutcomeFormComponent } from './income-outcome-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { Router, RouterModule } from '@angular/router';
import { IncomeDetailRoutingModule } from '../../pages/income-detail/income-detail-routing.module';

@NgModule({
  declarations: [IncomeOutcomeFormComponent],
  exports: [IncomeOutcomeFormComponent],
  imports: [
    CommonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    IncomeDetailRoutingModule
  ],
})
export class IncomeOutcomeFormModule { }
