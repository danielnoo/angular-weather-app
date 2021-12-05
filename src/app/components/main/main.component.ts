import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ConvertDataService } from '../../services/convert-data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  weather: any[] = [];
  multi!: any[];
 
  view: [number, number] = [700, 400];
  

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor(private weatherService: WeatherService, private convertDataService: ConvertDataService) {
    Object.assign(this, { multi })
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((data) => {
    
    
    console.log(data);
    this.multi = this.convertDataService.convertToNgxChartFormat(data)
    
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



}
