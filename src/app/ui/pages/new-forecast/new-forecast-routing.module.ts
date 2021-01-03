import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewForecastComponent } from './new-forecast.component';


const routes: Routes = [{ path: '', component: NewForecastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewForecastRoutingModule { }
