import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectIncomes } from 'src/app/state/incomes/incomes.selectors';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.scss']
})
export class IncomesComponent implements OnInit {

  public incomes$;
  constructor(private store: Store<AppState>) { 
    this.incomes$ = this.store.pipe(select(selectIncomes));
  }

  ngOnInit(): void {
  }

}
