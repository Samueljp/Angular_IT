import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  nombre: string;
  constructor() { }

  ngOnInit() {
    this.nombre = 'Pepe';
  }
  btnBorrar() {
    this.nombre = '';
  }

}
