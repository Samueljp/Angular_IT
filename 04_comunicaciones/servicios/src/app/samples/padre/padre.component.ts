import { ServicesModule } from './../../services/services.module';
import { LibrosService } from './../../services/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  public sName: string;
  public clave: string;
  constructor(private librosService: LibrosService) {
    // Se crea this.librosService apuntando al obj singletone de la clase LibrosService
  }

  ngOnInit() {
  }
  respuestaEvento() {
    this.sName = '';
  }

  buscarLibro() {
    return this.librosService.buscarLibros(this.clave);
  }
}
