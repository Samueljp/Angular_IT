import { SamplesModule } from './samples/samples.module';
// ELEMENTOS DE ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// COMPONENTES
import { AppComponent } from './app.component';
// MODULOS DE LA APLICACION
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SharedModule, SamplesModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
