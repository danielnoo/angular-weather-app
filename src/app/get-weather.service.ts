import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  private weatherApiUrl = 'http://api.weatherapi.com/v1/current.json?key= ce705e9bc8a84c4283d114311212011&q=m6h4a4&aqi=yes'

  constructor(private http: HttpClient) { 

  }

  getWeather(): Observable<Object> {
      return this.http.get(this.weatherApiUrl)
    }
}
