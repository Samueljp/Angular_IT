import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  public sName: string;
  constructor() { }

  ngOnInit() {
  }
  respuestaEvento() {
    this.sName = '';
  }

}
