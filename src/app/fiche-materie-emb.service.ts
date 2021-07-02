import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FicheMaterieEmb } from './fiche-materie-emb';

@Injectable({
  providedIn: 'root'
})
export class FicheMaterieEmbService {

  private url = 'http://localhost:8080/fichematerieemb';
  constructor(private http:HttpClient) { }

  getFichesMatEmb():Observable<any>{
    return this.http.get(`${this.url}`);
  }
  getFicheMatEmb(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  createFicheMatEmb(ficheMat:FicheMaterieEmb):Observable<Object>{
    return this.http.post(`${this.url}`,ficheMat);
  }
  updateFicheMatEmb(ficheMat:FicheMaterieEmb,id:number):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,ficheMat);
  }
  deleteFicheMatEmb(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
