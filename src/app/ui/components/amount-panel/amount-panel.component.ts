import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-panel',
  templateUrl: './amount-panel.component.html',
  styleUrls: ['./amount-panel.component.scss']
})
export class AmountPanelComponent implements OnInit {

  @Input()
  public title = 'Konto BTV';

  @Input()
  public amount = 18233;

  
  @Input()
  public description = 'Once a year on December.';

  constructor() { }

  ngOnInit(): void {
  }

}
