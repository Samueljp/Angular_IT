import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
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
