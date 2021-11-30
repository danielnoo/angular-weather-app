import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  weather: any[] = [];
  // add to server: .sort({_id:-1} to ensure returning most recent first

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((data) => {
    this.weather = data
    
    console.log(data);
    
  });
  }

  // logWeather() {
  //   let newObj = {
  //     name: this.weather['location'].name,
  //     temp: this.weather['current'].temp_c,
  //     feelsLike: this.weather['current'].feelslike_c
  //   }

  // this.displayData = newObj
  // // for(let data in this.weather) {
  // //   console.log(this.weather[data]);

  // // }
  // console.log(this.displayData);
}
