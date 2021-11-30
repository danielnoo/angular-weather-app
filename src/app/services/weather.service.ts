import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  private apiUrl = 'http://localhost:3001/api/entries'
  constructor(private http: HttpClient) {}

  

  getWeatherData(): Observable<any> {

    return this.http.get(this.apiUrl)

  }
}
