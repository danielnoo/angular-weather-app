
import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherService } from '../../services/weather.service';
import { ConvertDataService } from '../../services/convert-data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-rating-chart',
  templateUrl: './rating-chart.component.html',
  styleUrls: ['./rating-chart.component.scss']
})
export class RatingChartComponent implements OnInit {
  averages: any[] = [];
  multi: any[];
  view: [number, number] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = false;
  
  yAxisLabel: string = 'Rating';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(
    private weatherService: WeatherService,
    private convertDataService: ConvertDataService
  ) {}

  ngOnInit(): void {

    this.weatherService.getWeatherData().subscribe((data) => {
      
      // Call service to display most recent day's results along with tomorrow's forecast
      console.log(data);
      
       
      this.multi = this.convertDataService.getRatingsForLineChart(data)

      this.getAverages(this.multi)
      
    });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  
  // get the average rating for each API
  getAverages(data) {
    const apiArray: any[] = [];

    // for each api in data, loop through each of their series arrays, push the values to an array and get the average
    
    data.forEach(api => {
      const apiName = api.name
      const valuesArray: any[] = [];
      api['series'].forEach(series => {
        valuesArray.push(series.value)
      })

      const sum = valuesArray.reduce((a, b) => a + b, 0)

      const average = parseFloat((sum / valuesArray.length).toFixed(2))



      apiArray.push({
        apiName,
        average
      })
      

      
    })

    console.log(apiArray);
    
    this.averages = apiArray

  }

}



