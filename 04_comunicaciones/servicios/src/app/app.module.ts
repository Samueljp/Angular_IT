import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { PadreComponent } from './samples/padre/padre.component';
import { HijoComponent } from './samples/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule, FormsModule, SharedModule
  ],
  exports: [
    PadreComponent,
    HijoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
