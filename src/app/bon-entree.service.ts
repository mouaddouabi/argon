import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BonEntree } from './bon-entree';

@Injectable({
  providedIn: 'root'
})
export class BonEntreeService {
  private url = 'http://localhost:8080/bonentree';
  constructor(private http:HttpClient) { }

  getBonEntreesList():Observable<any>{
    return this.http.get(`${this.url}`);
  }
  getBonEntree(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  createBonEntree(bonE:BonEntree):Observable<Object>{
    return this.http.post(`${this.url}`,bonE);
  }
  updateBonEntree(bonE:BonEntree,id:number):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,bonE);
  }
  deleteBonEntree(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  
}
