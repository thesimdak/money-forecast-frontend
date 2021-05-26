import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeDetailComponent } from './income-detail.component';
import { IncomeDetailRoutingModule } from './income-detail-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [IncomeDetailComponent],
  imports: [
    CommonModule,
    IncomeDetailRoutingModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
  ],
})
export class IncomeDetailModule {}
