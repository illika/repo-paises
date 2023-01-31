import { Component } from '@angular/core';
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

  constructor(private paisService: PaisService) { }

  buscar() {
    this.isError = false;
    this.paisService.buscarPais(this.busqueda)
      .subscribe({
        next: (paises) => {
          console.log(paises);
        },
        error: (_) => {
          this.isError = true;
        }
      }
      );
  }

}
