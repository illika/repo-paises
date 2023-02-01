import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = "https://restcountries.com/v2";

  constructor(private http: HttpClient) { }

  buscarPais(termino: String): Observable<Pais[]> {

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Pais[]>(url);

  }

  buscarCapital(termino: String): Observable<Pais[]> {

    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Pais[]>(url);

  }

  getPaisById(id: String): Observable<Pais> {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Pais>(url);
  }

}
