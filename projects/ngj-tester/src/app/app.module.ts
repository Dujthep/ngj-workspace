import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgjDatepickerModule } from 'ngj-datepicker';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgjDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
