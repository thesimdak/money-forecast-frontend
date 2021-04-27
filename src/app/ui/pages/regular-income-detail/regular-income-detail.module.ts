import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularIncomeDetailComponent } from './regular-income-detail.component';
import { RegularIncomeDetailRoutingModule } from './regular-income-detail-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegularIncomeDetailComponent],
  imports: [
    CommonModule,
    RegularIncomeDetailRoutingModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegularIncomeDetailModule { }
