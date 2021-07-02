import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private url : String ='http://localhost:8080/api/v2/employees';
  constructor(private http:HttpClient) {
  }
  getEmployees():Observable<any>{
    return this.http.get(`${this.url}`);
  }
  getEmployee(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  createEmployee(emp:Employee):Observable<Object>{
    return this.http.post(`${this.url}`,emp);
  }
  updateEmployee(emp:Employee,id:number):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,emp);
  }
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
