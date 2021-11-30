import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUrl = 'http://localhost:3001/api/login';
  private registerUrl = 'http://localhost:3001/api/users';
  constructor(private http: HttpClient) {}

  login(user: object): Observable<any> {
    console.log('login attempt');

    return this.http.post(this.loginUrl, user, httpOptions);
  }

  register(user: object): Observable<any> {
    return this.http.post(this.registerUrl, user, httpOptions);
  }
}
