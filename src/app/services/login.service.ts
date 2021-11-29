import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs'
import { User } from '../models/User'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:4200/api/login'

  constructor(private http: HttpClient) { }

  login (user: User): Observable<User> {
    console.log('login attempt');

   return this.http.post<User>(this.apiUrl, user, httpOptions)
    
  }
}
