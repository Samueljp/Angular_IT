import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {
  aDatos: Array<string>;
  constructor() {
    this.aDatos = ['Angular 1', 'Angular 2', 'Ninja Anguar', 'Angular cookbook'];
  }
  buscarLibros(clave: string) {
    return this.aDatos;
  }
}
