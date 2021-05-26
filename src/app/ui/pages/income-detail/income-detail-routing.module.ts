import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomeDetailComponent } from './income-detail.component';


const routes: Routes = [{ path: '', component: IncomeDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeDetailRoutingModule { }
