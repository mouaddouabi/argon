import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ferme } from './ferme';
import { Fournisseur } from './fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FermeService {

  private url = 'http://localhost:8080/ferme';
  constructor(private http:HttpClient) { }

  getFermes():Observable<any>{
    return this.http.get(`${this.url}`);
  }
  getFermesFournisseur(id:number):Observable<any>{
    return this.http.get(`${this.url}/fournisseur/${id}`);
  }
  getFerme(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  createFerme(ferme:Ferme):Observable<Object>{
    return this.http.post(`${this.url}`,ferme);
  }
  updateFerme(four:Ferme,id:number):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,four);
  }
  deleteFerme(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
