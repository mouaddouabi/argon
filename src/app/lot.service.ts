import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lot } from './lot';

@Injectable({
  providedIn: 'root'
})
export class LotService {

  private url = 'http://localhost:8080/lot';
  constructor(private http:HttpClient) { }

  getLots():Observable<any>{
    return this.http.get(`${this.url}`);
  }
  getLotsFR():Observable<any>{
    return this.http.get(`${this.url}/rec`);
  }
  getLot(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  getLotFumNotCond():Observable<any>{
    return this.http.get(`${this.url}/fumnotcond`);
  }
  createLot(lot:Lot):Observable<Object>{
    return this.http.post(`${this.url}`,lot);
  }
  updateLot(lot:Lot,id:number):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,lot);
  }
  deleteLot(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
