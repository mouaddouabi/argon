import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/api/users';
  constructor(private http:HttpClient) { }  
  connect(email:string,pass:string):Observable<any>{
    return this.http.get(`${this.url}/${email}/${pass}`);
  }

}

