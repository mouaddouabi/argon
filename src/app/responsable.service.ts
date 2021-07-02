import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Responsable } from './responsable';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  private url = 'http://localhost:8080/responsable';
  constructor(private http:HttpClient) { }

  getResponsables():Observable<any>{
    return this.http.get(`${this.url}`);
  }
  getResponsable(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  createResponsable(res:Responsable):Observable<Object>{
    return this.http.post(`${this.url}`,res);
  }
  updateResponsable(res:Responsable,id:number):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,res);
  }
  deleteResponsable(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  getResponsablesByType(type:string){
    return this.http.get(`${this.url}/metier/${type}`);
  }
}
