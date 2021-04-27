
import { NgModule } from '@angular/core';
import { EntityDataService } from '@ngrx/data';
import { AccountsDataService } from './data-service/account-data.service';


@NgModule({

  providers: [AccountsDataService]
})
export class EntityStoreModule { 
    constructor(entityDataService: EntityDataService, accountDataService: AccountsDataService) {
        entityDataService.registerServices({Account: accountDataService});

    }
}