import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConvertDataService {

  constructor() { }

  convertToNgxChartFormat (data) {
    let formattedData : any[] = [];
    for(let key in data[0]) {
      
      
      if(key !== 'date' && key !== 'id') {
        const apiObj = {
          "name": key,
          "series": [
            {
              "name": "Today's Temperature",
              "value": data[0][key].currentWeather
            },
            {
              "name": "Forecasted Temperature",
              "value": data[0][key].forecast
            }
          ]
        }

      
        formattedData.push(apiObj)


      }
    }
    console.log(formattedData);
    
    return formattedData;
    
  }
}
