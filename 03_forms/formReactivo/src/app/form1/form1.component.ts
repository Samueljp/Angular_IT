import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})

export class Form1Component implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  public formGroup1: FormGroup;

  ngOnInit() {
    this.formGroup1 = this.formBuilder.group({
      titulo: ['', Validators.required],
      autor: [],
      editorial: [],
      fecha: ['2017']
    });
    console.log(this.formGroup1);
  }

  enviar() {
  }

  borrar() {
  }

}
