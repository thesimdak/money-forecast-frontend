import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutcomeDetailComponent } from './outcome-detail.component';


const routes: Routes = [{ path: '', component: OutcomeDetailComponent }, { path: ':id', component: OutcomeDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutcomeDetailRoutingModule { }
