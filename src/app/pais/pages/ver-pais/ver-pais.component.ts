import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  isError: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisById(id)),
        tap(console.log)
      )
      .subscribe({
        next: (pais) => {
          this.isError = false;
          this.pais = pais;
        },
        error: (_) => {
          this.isError = true;
        }
      })
    /*
        this.activatedRoute.params.subscribe(({ id }) => {
          this.paisService.getPaisById(id).subscribe((pais) => {
            console.log(pais);
          })
        })
        */
  }

}
