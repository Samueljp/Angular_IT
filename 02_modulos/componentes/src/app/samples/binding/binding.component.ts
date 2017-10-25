import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class BindingComponent implements OnInit {
  nombre: string;
  edad: number;
  constructor() { }

  ngOnInit() {
    this.nombre = 'Pepe';
    this.edad = 25;
  }
  btnBorrar() {
    this.nombre = '';
  }

}
