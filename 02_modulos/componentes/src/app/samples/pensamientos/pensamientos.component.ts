import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamientos',
  templateUrl: './pensamientos.component.html',
  styleUrls: ['./pensamientos.component.css']
})
export class PensamientosComponent implements OnInit {
  sidea: string;
  aideas: Array<string>;
  constructor() { }

  ngOnInit() {
    this.aideas = [];
  }
  addIdeas() {
    this.aideas.push(this.sidea);
    this.sidea = '';
  }
}
