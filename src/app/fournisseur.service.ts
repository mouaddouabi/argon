import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fournisseur } from './fournisseur';
@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private url = 'http://localhost:8080/fournisseurs/fournisseur';
  constructor(private http:HttpClient) { }

  getFournisseurs():Observable<any>{
    return this.http.get(`${this.url}`);
  }
  getFournisseur(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  createFournisseur(four:Fournisseur):Observable<Object>{
    return this.http.post(`${this.url}`,four);
  }
  updateFournisseur(four:Fournisseur,id:number):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,four);
  }
  deleteFournisseur(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
