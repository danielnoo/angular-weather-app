import { Component, OnInit } from '@angular/core';
import {GetWeatherService} from '../../get-weather.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  weather!: {}
  displayData!: {
    name: string,
    temp: number,
    feelsLike: number
  }

  constructor(private weatherService: GetWeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe((data) => {
      this.weather = data
      this.logWeather()
    })
    
    
  }

  logWeather() {
    let newObj = {
      name: this.weather['location'].name,
      temp: this.weather['current'].temp_c,
      feelsLike: this.weather['current'].feelslike_c
    }

    this.displayData = newObj
    // for(let data in this.weather) {
    //   console.log(this.weather[data]);

      
    // }
    console.log(this.displayData);
    
    
  }



}
