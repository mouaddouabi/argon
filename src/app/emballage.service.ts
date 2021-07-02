import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emballage } from './emballage';

@Injectable({
  providedIn: 'root'
})
export class EmballageService {

  private url : String ='http://localhost:8080/emballage';
  constructor(private http:HttpClient) {
  }
  getEmballages():Observable<any>{
    return this.http.get(`${this.url}`);
  }
  getEmballagesnotCond():Observable<any>{
    return this.http.get(`${this.url}/notCond`);
  }
  getEmballage(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  createEmballage(emp:Emballage):Observable<Object>{
    return this.http.post(`${this.url}`,emp);
  }
  updateEmballage(emp:Emballage,id:number):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,emp);
  }
  deleteEmballage(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  getEmballagesFiche(id:number):Observable<any>{
    return this.http.get(`${this.url}/fiche/${id}`);
  }
}
