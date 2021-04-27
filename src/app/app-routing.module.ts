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
    path: '',
    loadChildren: () => import('./ui/pages/landing/landing.module').then(m => m.LandingModule)
  },  
  {
    path: 'accounts',
    loadChildren: () => import('./ui/pages/accounts/accounts.module').then(m => m.AccountsModule)
  },
  {
    path: 'accounts/account-detail',
    loadChildren: () => import('./ui/pages/account-detail/account-detail.module').then(m => m.AccountDetailModule)
  },
  {
    path: 'incomes/regular-income-detail',
    loadChildren: () => import('./ui/pages/regular-income-detail/regular-income-detail.module').then(m => m.RegularIncomeDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
