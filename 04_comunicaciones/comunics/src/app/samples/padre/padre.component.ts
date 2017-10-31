import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  public sName: string;
  public clave: string;
  constructor() { }

  ngOnInit() {
    this.clave = '';
  }
  respuestaEvento() {
    this.sName = '';
  }
}
