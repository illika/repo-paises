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

  constructor(private paisService: PaisService) { }

  buscar() {
    console.log(this.busqueda);
    this.paisService.buscarPais(this.busqueda).subscribe(resp => console.log(resp));
  }

}
