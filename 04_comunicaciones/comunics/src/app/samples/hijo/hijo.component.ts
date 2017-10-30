import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() nombre: string;
  @Output() envenBorrar = new EventEmitter<any>();
  nombreSelect: string;
  constructor() {
    // this.envenBorrar = new EventEmitter();
  }

  ngOnInit() {
  }

  btnBorrar() {
    this.nombre = this.nombreSelect;
    this.envenBorrar.emit(this.nombre);
    console.log('evento en marcha');
  }
}
