import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ConvertDataService } from '../../services/convert-data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dailychart-chart',
  templateUrl: './dailychart-chart.component.html',
  styleUrls: ['./dailychart-chart.component.scss'],
})
export class DailychartChartComponent implements OnInit {
  weather: any[] = [];
  multi: any[] = [];

  view: [number, number] = [700, 400];

  dayIndex: number = 0;

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Weather API';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Temperature Celsius';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
  };

  constructor(
    private weatherService: WeatherService,
    private convertDataService: ConvertDataService
  ) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((data) => {
      // save all of the results
      this.weather = data;

      // Call service to display most recent day's results along with tomorrow's forecast

      this.multi = this.convertDataService.convertToNgxChartFormat(
        data,
        this.dayIndex
      );
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

  handlePageTurn(instruction: string) {
    // basic error handling
    if (instruction === 'next' && this.dayIndex <= 0) {
      return;
    } else if (
      instruction === 'prev' &&
      this.dayIndex >= this.weather.length - 1
    ) {
      return;
    }
    // increment or decrement
    if (instruction === 'prev' && this.dayIndex < 7) {
      console.log('prev pressed');

      // if the element in the array is less than 6(with more data in the DB will allow for more complexity) ... increment the day (move back a day - since it is sorted temporally descending) and feed new data to ngx chart via the convert data service
      this.dayIndex = this.dayIndex + 1;
      this.multi = this.convertDataService.convertToNgxChartFormat(
        this.weather,
        this.dayIndex
      );

      // if(this.dayIndex < 6) {
      //   this.dayIndex = this.dayIndex + 1
      //
      // } else {
      //   return
      // }
    } else if (instruction === 'next' && this.dayIndex !== 0) {
      //   // if element is 0 (most current day) then return, else decrease indexDay(move back in time one day)
      // set the view to point to the correct array element

      this.dayIndex = this.dayIndex - 1;
      this.multi = this.convertDataService.convertToNgxChartFormat(
        this.weather,
        this.dayIndex
      );
    } else {
      return;
    }
  }
}
