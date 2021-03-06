import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { LocalComponent } from './local/local.component';
import { PensamientosComponent } from './pensamientos/pensamientos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BindingComponent, LocalComponent, PensamientosComponent],
  exports: [
    BindingComponent, LocalComponent, PensamientosComponent
  ]
})
export class SamplesModule { }
