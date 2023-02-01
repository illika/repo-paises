import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = "https://restcountries.com/v2";

  get httpParams() {
    return new HttpParams()
      .set("fields", "name,capital,alpha2Code,flags,population");
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: String): Observable<Pais[]> {

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });

  }

  buscarCapital(termino: String): Observable<Pais[]> {

    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });

  }

  getPaisById(id: String): Observable<Pais> {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Pais>(url);
  }

  buscarRegion(region: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

}
