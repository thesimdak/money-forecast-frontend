import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegularIncomeDetailComponent } from './regular-income-detail.component';


const routes: Routes = [{ path: '', component: RegularIncomeDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegularIncomeDetailRoutingModule { }
