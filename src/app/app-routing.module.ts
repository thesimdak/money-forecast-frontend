import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'outcomes',
    loadChildren: () => import('./ui/pages/outcomes/outcomes.module').then(m => m.OutcomesModule)
  },
  {
    path: 'incomes',
    loadChildren: () => import('./ui/pages/incomes/incomes.module').then(m => m.IncomesModule)
  },
  {
    path: 'forecast',
    loadChildren: () => import('./ui/pages/forecast/forecast.module').then(m => m.ForecastModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./ui/pages/landing/landing.module').then(m => m.LandingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
