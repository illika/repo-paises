import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    img {
      width: 20px;
    }
    `
  ]
})
export class PorPaisComponent {

  busqueda: string = "";
  isError: boolean = false;
  placeholder: string = "Buscar por País";

  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  mostrarSugerencia: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(busqueda: string) {
    this.mostrarSugerencia = false;
    this.busqueda = busqueda;
    this.isError = false;
    this.paisService.buscarPais(busqueda)
      .subscribe({
        next: (paises) => {
          this.paises = paises;
        },
        error: (_) => {
          this.paises = [];
          this.isError = true;
        }
      }
      );
  }

  sugerencia(termino: string) {
    this.isError = false;
    this.busqueda = termino;
    this.mostrarSugerencia = true;

    //(termino==="") ? this.mostrarSugerencia = false : this.mostrarSugerencia = true;

    this.paisService.buscarPais(termino)
      .subscribe({
        next: (paises) => {
          this.paisesSugeridos = paises.splice(0, 5);
        },
        error: (_) => {
          this.paisesSugeridos = [];
        }
      })
  }

}
