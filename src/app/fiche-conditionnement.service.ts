import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FicheConditionnement } from './fiche-conditionnement';

@Injectable({
  providedIn: 'root'
})
export class FicheConditionnementService {

  private url = 'http://localhost:8080/ficheconditionnement';
  constructor(private http:HttpClient) { }

  getFichesCon():Observable<any>{
    return this.http.get(`${this.url}`);
  }
  getFicheCon(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  createFicheCon(fiche:FicheConditionnement):Observable<Object>{
    return this.http.post(`${this.url}`,fiche);
  }
  updateFicheCon(fiche:FicheConditionnement,id:number):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,fiche);
  }
  deleteFicheCon(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
