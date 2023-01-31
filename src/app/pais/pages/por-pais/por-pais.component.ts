import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  busqueda: string = "";
  isError: boolean = false;

  paises: Pais[] = [];

  constructor(private paisService: PaisService) {
    
   }

  buscar(busqueda: string) {
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

  }

}
