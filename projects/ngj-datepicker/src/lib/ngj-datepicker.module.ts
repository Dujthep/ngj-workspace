import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgjDatepickerComponent } from './ngj-datepicker.component';

@NgModule({
  declarations: [NgjDatepickerComponent],
  imports: [
    CommonModule
  ],
  exports: [NgjDatepickerComponent]
})
export class NgjDatepickerModule { }
