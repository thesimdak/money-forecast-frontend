import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountPanelComponent } from './amount-panel.component';

describe('AmountPanelComponent', () => {
  let component: AmountPanelComponent;
  let fixture: ComponentFixture<AmountPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
