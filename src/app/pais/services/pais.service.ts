import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, of } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import { Ipaises } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api_url:string = 'https://restcountries.com/v3.1';
  constructor(private http:HttpClient ) {

   }
      buscarpais( termino:string):Observable<Ipaises[]>
      {
            const url = `${this.api_url}/name/${termino}`
            return this.http.get<Ipaises[]>( url)


      }



}
