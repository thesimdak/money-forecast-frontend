import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Account } from 'src/app/models/account.interface';
import { AccountService } from 'src/app/services/account.service';
import { v4 as uuidv4 } from 'uuid';

interface Currency {
  name: string;
  code: string;
}

@Component({
  selector: 'app-account-detail-forecast',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {
  public currencies: Currency[];

  public selectedCurrency: Currency;
  public account: Account;
  public accountForm: FormGroup;

  constructor(
    private accountService: AccountService, 
    private fb: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currencies = [{ name: 'EUR', code: 'EUR' }];
    this.selectedCurrency = this.currencies[0];

    combineLatest([this.accountService.getAccounts(), this.route.params])
    .subscribe(([accounts, params]) => {
      if (params['id'] != null) {
        accounts.forEach(account => {
          if (account.id === params['id']) {
            this.account = account;
          }
        });
      } else {
        this.account  = {
          id: uuidv4(),
          name: '',
          balance: 0,
          currency: 'EUR'
        };
      }
    });
    this.accountForm = this.fb.group({
      id: uuidv4(),
      name: this.fb.control('', Validators.required),
      balance: this.fb.control(0, Validators.required),
      currency: this.fb.control(this.account.currency),
    });
    this.accountForm.setValue(this.account);
  }

  public saveAccount(): void {
    this.markDirty();
    if (this.accountForm.valid) {
      this.accountService.addAccount(this.accountForm.value);
      this.router.navigate(['../accounts']);
    }
  }

  private markDirty() {
    this.markGroupDirty(this.accountForm);
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
