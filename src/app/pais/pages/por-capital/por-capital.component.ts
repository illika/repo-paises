import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  
  busqueda: string = "";
  isError: boolean = false;
  placeholder: string = "Buscar por Capital";

  paises: Pais[] = [];
  
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(busqueda: string) {
    this.busqueda = busqueda;
    this.isError = false;
    this.paisService.buscarCapital(busqueda)
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

}
