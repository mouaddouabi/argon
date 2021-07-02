import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operateurs } from './operateurs';

@Injectable({
  providedIn: 'root'
})
export class OperateursService {

  private url = 'http://localhost:8080/operateurs';
  constructor(private http:HttpClient) { }

  getAllOperateurs():Observable<any>{
    return this.http.get(`${this.url}`);
  }
  getOperateurs(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  createOperateurs(op:Operateurs):Observable<Object>{
    return this.http.post(`${this.url}`,op);
  }
  updateOperateurs(op:Operateurs,id:number):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,op);
  }
  deleteOperateurs(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  getOperateursByType(type:string){
    return this.http.get(`${this.url}/type/${type}`);
  }
}
