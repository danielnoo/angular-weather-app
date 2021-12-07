import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ConvertDataService } from '../../services/convert-data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dailychart-chart',
  templateUrl: './dailychart-chart.component.html',
  styleUrls: ['./dailychart-chart.component.scss']
})
export class DailychartChartComponent implements OnInit {

  weather: any[] = [];
  multi: any[] = [];
 
  view: [number, number] = [700, 400];
  
  dayIndex: number = 0;

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Weather API';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Temperature Celsius';
  

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor(private weatherService: WeatherService, private convertDataService: ConvertDataService) {
    
  }

 

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((data) => {
    // save all of the results
    this.weather = data;
    
    // Call service to display most recent day's results along with tomorrow's forecast
    console.log(data);
    this.multi = this.convertDataService.convertToNgxChartFormat(data, this.dayIndex)
    
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


  handlePageTurn(event: string) {
    console.log(event);
    
  }

}
