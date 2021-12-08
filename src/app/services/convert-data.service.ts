import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConvertDataService {
  constructor() {}

  convertToNgxChartFormat(data, dayIndex) {
    let formattedData: any[] = [];
    for (let key in data[dayIndex]) {
      if (key !== 'date' && key !== 'id') {
        const apiObj = {
          name: key,
          series: [
            {
              name: "Today's Temperature",
              value: data[dayIndex][key].currentWeather,
            },
            {
              name: "Yesterday's Forecast",
              value: data[dayIndex + 1][key].forecast,
            },
            {
              name: "Tomorrow's Forecast",
              value: data[dayIndex][key].forecast,
            },
          ],
        };

        formattedData.push(apiObj);
      }
    }
    console.log(formattedData);

    return formattedData;
  }
}
