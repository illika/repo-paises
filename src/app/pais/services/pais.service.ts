import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = "https://restcountries.com/v2";

  constructor(private http: HttpClient) { }

  buscarPais(termino: String): Observable<any> {

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get(url);

  }

}
