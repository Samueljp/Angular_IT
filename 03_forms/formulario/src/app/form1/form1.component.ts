import { Component, OnInit } from '@angular/core';

interface Usuario {
  firstName: string;
  lastName: string;
  phoneNumber: number;
}
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  user: Usuario;
  aImpresoras: Array<string>;
  impresoraSeleccionada: string;
  constructor() { }

  ngOnInit() {
    this.user = { firstName: 'pepe', lastName: 'perez', phoneNumber: 0 }
    this.aImpresoras = ['hp', 'canon', 'oki'];
    this.impresoraSeleccionada = 'hp';
  }

}
