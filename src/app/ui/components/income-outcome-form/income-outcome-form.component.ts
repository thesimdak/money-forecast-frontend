import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs/operators';
import { Currency } from 'src/app/models/currency.interface';
import { IncomeOutcome } from 'src/app/models/income-outcome.interface';
interface Day {
  name: string;
  code: number;
}

interface Month {
  name: string;
  code: number;
}


interface Year {
  name: string;
  code: number;
}

@Component({
  selector: 'app-income-outcome-form',
  templateUrl: './income-outcome-form.component.html',
  styleUrls: ['./income-outcome-form.component.scss'],
})
export class IncomeOutcomeFormComponent implements OnInit {

  public currencies: Currency[];

  public selectedCurrency: Currency;
  @Input()
  public incomeOutcome: IncomeOutcome;

  @Output()
  public updateIncomeOutComeEvent = new EventEmitter<IncomeOutcome>();
  @Output()
  public cancelEvent = new EventEmitter<void>();


  public timePointFormArray: FormArray = this.fb.array([
  ]);
  public incomeOutcomeForm: FormGroup;

  yearsOptions: Year[];
  daysOptions: Day[][];
  daysOptions28: Day[];
  daysOptions30: Day[];
  daysOptions31: Day[];

  monthsOptions: Month[];


  constructor(private fb: FormBuilder) {

    this.daysOptions = [];
    this.yearsOptions = [];

    this.monthsOptions = [
      { name: 'Monthly', code: 0 },
      { name: 'January', code: 1 },
      { name: 'February', code: 2 },
      { name: 'Merch', code: 3 },
      { name: 'April', code: 4 },
      { name: 'May', code: 5 },
      { name: 'June', code: 6 },
      { name: 'July', code: 7 },
      { name: 'August', code: 8 },
      { name: 'September', code: 9 },
      { name: 'October', code: 10 },
      { name: 'November', code: 11 },
      { name: 'December', code: 12 },
    ];
    this.yearsOptions.push({
      name: 'Yearly',
      code: 0
    })
    for (let i = new Date().getFullYear(); i <= new Date().getFullYear() + 50; i++) {
      this.yearsOptions.push({
        name: i + '',
        code: i
      })
    }
  }

  ngOnInit(): void {
    this.currencies = [{ name: 'EUR', code: 'EUR' }];
    this.selectedCurrency = this.currencies[0];

    for (const timePoint of this.incomeOutcome.regularity.timePoints) {
      const timePointGroup = this.createPeriodityFormGroup();
      timePointGroup.setValue(timePoint);
      this.timePointFormArray.push(timePointGroup);
      this.daysOptions.push(this.createDayOptionsForMonth(timePoint.year, timePoint.month));
    }


    this.incomeOutcomeForm = this.fb.group({
      id: this.fb.control(''),
      name: this.fb.control('', Validators.required),
      balance: this.fb.control(0, Validators.required),
      currency: this.fb.control(
        this.incomeOutcome == null ? 'EUR' : this.incomeOutcome.currency
      ),
      regularity: this.fb.group({
        timePoints: this.timePointFormArray
      })
    });
    this.incomeOutcomeForm.setValue(this.incomeOutcome);


  }

  public onChangeYearOnMonth(event, index: number) {
    const year = this.timePointFormArray.value[index].year;
    const month = this.timePointFormArray.value[index].month;
     this.timePointFormArray.controls[index].get('days').setValue([]);
    this.daysOptions[index] = this.createDayOptionsForMonth(year, month);
  }

  public save(): boolean {
    this.markDirty();
    if (this.incomeOutcomeForm.valid) {
      this.updateIncomeOutComeEvent.emit(this.incomeOutcomeForm.value);
    }
    return false;
  }

  public cancel(): void {
    this.cancelEvent.emit();
  }

  public addPeriodity(): void {
    const periodityFormGroup = this.createPeriodityFormGroup();
    this.timePointFormArray.push(periodityFormGroup);
    const timePoint = this.timePointFormArray.value[this.timePointFormArray.length-1];
    this.daysOptions.push(this.createDayOptionsForMonth(timePoint.year, timePoint.month));

  }

  public removePeriodity(index: number): void {
    this.timePointFormArray.removeAt(index);
    this.daysOptions.splice(index, 1);
  }

  private createDayOptionsForMonth(year: number, month: number): Day[] {
    let dayCount = new Date(year, month, 0).getDate();
    if (year === 0 && month == 2) {
      dayCount = 28;
    }
    const days = [];
    for (let i = 1; i <= dayCount; i++) {
      days.push({
        name: i + '.',
        code: i
      })
    }
    return days;
  }

  private createPeriodityFormGroup(): FormGroup {
    return this.fb.group({
      year: this.fb.control(0),
      month: this.fb.control(0),
      days: this.fb.control('', Validators.required),
    })
  }

  private markDirty() {
    this.markGroupDirty(this.incomeOutcomeForm);
  }
  markGroupDirty(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      switch (formGroup.get(key).constructor.name) {
        case "FormGroup":
          this.markGroupDirty(formGroup.get(key) as FormGroup);
          break;
        case "FormArray":
          this.markArrayDirty(formGroup.get(key) as FormArray);
          break;
        case "FormControl":
          this.markControlDirty(formGroup.get(key) as FormControl);
          break;
      }
    });
  }
  private markArrayDirty(formArray: FormArray) {
    formArray.controls.forEach(control => {
      switch (control.constructor.name) {
        case "FormGroup":
          this.markGroupDirty(control as FormGroup);
          break;
        case "FormArray":
          this.markArrayDirty(control as FormArray);
          break;
        case "FormControl":
          this.markControlDirty(control as FormControl);
          break;
      }
    });
  }
  markControlDirty(formControl: FormControl) {
    formControl.markAsDirty();
  }
}
