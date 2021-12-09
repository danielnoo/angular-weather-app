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

  // loop through each day's weather data, return api name along with series of dates and temperatures
  // {"name": api, "series": ["name": "dd-mm", "value": rating]} can slice date in the html template
  getRatingsForLineChart(data) {
    const dataToSend: any[] = [];

    // establish the data structure to push the data into on each loop
    for (let api in data[0]) {
      if (api !== 'date' && api !== 'id') {
        const newObj: object = {
          name: api,
          series: [],
        };

        dataToSend.push(newObj);
      }
    }

    // loop through weatherData and attach ratings and date to the series of the correct object

    data.forEach((day) => {
      //set the date for all entries for this day before moving on
      const date = day.date.slice(5, 10);
      // create an object to push to the series inside of each object

      // get values with for..in  - loop over the dataToSend array(each element an API) then within that loop over the day object and push date/rating pairs as objects

      dataToSend.forEach((api) => {
        for (let name in day) {
          if (name !== 'date' && name !== 'id' && api.name === name) {
            api.series.push({
              name: date,
              value: day[name].rating,
            });
          }
        }
      });
    });
    console.log(dataToSend);
    return dataToSend;
  }
}
