import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailComponent } from './account-detail.component';
import { AccountDetailRoutingModule } from './account-detail-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AccountDetailComponent],
  imports: [
    CommonModule,
    AccountDetailRoutingModule,
    InputTextModule,
    DropdownModule,
    FormsModule
  ]
})
export class AccountDetailModule { }
