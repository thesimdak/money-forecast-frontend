import { Component, OnInit } from '@angular/core';
import { OutcomeService } from 'src/app/services/outcome.service';


@Component({
  selector: 'app-outcomes',
  templateUrl: './outcomes.component.html',
  styleUrls: ['./outcomes.component.scss']
})
export class OutcomesComponent implements OnInit {

  public outcomes$;
  constructor(private outcomeService: OutcomeService) { 
    this.outcomes$ = this.outcomeService.getOutcomes();
  }

  ngOnInit(): void {
  }

  public removeOutcome(id: string) {
    this.outcomeService.removeOutcome(id);
  }

}
