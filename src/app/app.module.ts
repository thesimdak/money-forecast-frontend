import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './ui/components/navigation/navigation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { incomesReducer } from './state/incomes/incomes.reducer';
import { outcomesReducer } from './state/outcomes/outcomes.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { IncomesEffects } from './state/incomes/incomes.effects';
import { accountsReducer } from './state/accounts/accounts.reducer';
import { AccountsEffects } from './state/accounts/accounts.effects';
import { OutcomesEffects } from './state/outcomes/outcomes.effects';
import { metaReducers } from "src/app/state/storage.metareducer";
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([IncomesEffects, OutcomesEffects, AccountsEffects]),
    StoreModule.forRoot({ incomes: incomesReducer, outcomes: outcomesReducer, accounts: accountsReducer }, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }