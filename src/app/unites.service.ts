import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unites } from './unites';

@Injectable({
  providedIn: 'root'
})
export class UnitesService {

  private url = 'http://localhost:8080/unites';
  constructor(private http:HttpClient) { }

  getAllUnites():Observable<any>{
    return this.http.get(`${this.url}`);
  }
  getUnites(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  createUnites(unite:Unites):Observable<Object>{
    return this.http.post(`${this.url}`,unite);
  }
  updateUnites(unite:Unites,id:number):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,unite);
  }
  deleteUnites(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
