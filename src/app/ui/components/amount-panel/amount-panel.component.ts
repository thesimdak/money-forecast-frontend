import { HttpClient } from '@angular/common/http';
import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-panel',
  templateUrl: './amount-panel.component.html',
  styleUrls: ['./amount-panel.component.scss']
})
export class AmountPanelComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public amount: string;

  @Input()
  public description: string;

  @Output()
  public removeClick: EventEmitter<void> = new EventEmitter();


  constructor() { 

  }

  ngOnInit(): void {
  }

  public remove(): void {
    this.removeClick.emit();
  }

}
