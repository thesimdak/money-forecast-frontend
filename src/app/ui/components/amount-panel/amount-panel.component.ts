import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-panel',
  templateUrl: './amount-panel.component.html',
  styleUrls: ['./amount-panel.component.scss']
})
export class AmountPanelComponent implements OnInit {

  @Input()
  public title;

  @Input()
  public amount;

  
  @Input()
  public description = 'Einmal pro monat';  
  @Input()
  public routerLink = '  ./account-detail';


  constructor(http: HttpClient) { 

  }

  ngOnInit(): void {
  }

}
