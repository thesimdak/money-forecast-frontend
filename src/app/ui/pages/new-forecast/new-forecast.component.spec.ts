import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForecastComponent } from './new-forecast.component';

describe('NewForecastComponent', () => {
  let component: NewForecastComponent;
  let fixture: ComponentFixture<NewForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
