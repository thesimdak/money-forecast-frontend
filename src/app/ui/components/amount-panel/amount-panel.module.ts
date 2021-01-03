import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmountPanelComponent } from './amount-panel.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AmountPanelComponent],
  exports: [AmountPanelComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AmountPanelModule { }
