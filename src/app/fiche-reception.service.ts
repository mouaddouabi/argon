import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ficherec } from './ficherec';

@Injectable({
  providedIn: 'root'
})
export class FicheReceptionService {

  private url = 'http://localhost:8080/fichereception';
  constructor(private http:HttpClient) { }

  getFichesRec():Observable<any>{
    return this.http.get(`${this.url}`);
  }
  getFicheRec(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  createFicheRec(four:Ficherec):Observable<Object>{
    return this.http.post(`${this.url}`,four);
  }
  updateFicheRec(four:Ficherec,id:number):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,four);
  }
  deleteFicheRec(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  findFicheByLot(id:number):Observable<any>{
    return this.http.get(`${this.url}/lot/${id}`);
  }
}
