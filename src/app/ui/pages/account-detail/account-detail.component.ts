import { Component, OnInit, ViewEncapsulation } from '@angular/core';


interface Currency {
  name: string,
  code: string
}

@Component({
  selector: 'app-account-detail-forecast',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {

  public currencies: Currency[];

  public selectedCurrency: Currency;

    constructor() {
        this.currencies = [
            {name: 'EUR', code: 'EUR'},
        ];
        this.selectedCurrency = this.currencies[0];
    }

  ngOnInit(): void {
  }

}
