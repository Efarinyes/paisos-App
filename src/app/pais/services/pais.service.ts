import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
   //private baseUrl: string = 'https://restcountries.com/v2'
   private urlBase: string = 'https://restcountries.com/v3.1'

   get paramsHttp() {
      return  new HttpParams()
      .set(
         'fields','name,capital,flags,population,cca3'
      )
   }

   constructor( private http: HttpClient) { }

   cercarPais( terme: string): Observable<Pais[]> {

      // Mètode emab la vesio v2 de l'API
      // const url = `${this.baseUrl}/name/${ terme }`
      //  return this.http.get(url);

      //  Mètode amb la versió 3.1 de l'API
      const url = `${this.urlBase}/name/${terme}`
      return this.http.get<Pais[]>(url, { params: this.paramsHttp })
                  
   }
   cercarCapital( terme: string): Observable<Pais[]> {
      const url = `${this.urlBase}/capital/${terme}`
      return this.http.get<Pais[]>(url, { params: this.paramsHttp })
                  
   }

   paisPerCodi( id: string): Observable<Pais[]> {
      const url = `${this.urlBase}/alpha/${id}`
      return this.http.get<Pais[]>(url)
   }

   paisperRegio( terme: string): Observable<Pais[]> {

      const url = `${this.urlBase}/region/${terme}`
      return this.http.get<Pais[]>(url, { params: this.paramsHttp })
            
   }
}
