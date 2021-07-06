import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { IncomeOutcome } from 'src/app/models/income-outcome.interface';
import { OutcomeService } from 'src/app/services/outcome.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-outcome-detail-forecast',
  templateUrl: './outcome-detail.component.html',
  styleUrls: ['./outcome-detail.component.scss'],
})
export class OutcomeDetailComponent implements OnInit {
  public outcome: IncomeOutcome;

  constructor(private outcomeService: OutcomeService, private route: ActivatedRoute, private router: Router) {
    combineLatest([this.outcomeService.getOutcomes(), this.route.params])
    .subscribe(([outcomes, params]) => {
      if (params['id'] != null) {
        outcomes.forEach(outcome => {
          if (outcome.id === params['id']) {
            this.outcome = outcome;
          }
        });
      } else {
        this.outcome = {
          id: uuidv4(),
          name: '',
          balance: 0,
          currency: 'EUR',
          regularity: {
            timePoints: [{
              year: 0,
              month: 0,
              days: []
            }]
          }
        };
      }
    });
  }

  ngOnInit(): void {
  }

  public saveOutcome(outcome: IncomeOutcome) {
    this.outcomeService.addOutcome(outcome);
    this.router.navigate(['../outcomes']);
  }

  public cancel(): void {
    this.router.navigate(['../outcomes']);
  }
}
