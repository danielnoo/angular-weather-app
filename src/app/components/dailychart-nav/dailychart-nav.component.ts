import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dailychart-nav',
  templateUrl: './dailychart-nav.component.html',
  styleUrls: ['./dailychart-nav.component.scss']
})
export class DailychartNavComponent implements OnInit {
  @Output() onPageTurn: EventEmitter<any> = new EventEmitter();
  
  @Input() dayIndex: number = 0;
  @Input() weather: any[] = [];

  constructor() { }

 

  ngOnInit(): void {
  }

  handleClick(instruction: string) {
    // if the element in the array is less than 6(with more data in the DB will allow for more complexity) ... increment the day (move back a day - since it is sorted temporally descending) and feed new data to ngx chart via the convert data service
    // if(this.dayIndex < 6) {
    //   this.dayIndex = this.dayIndex + 1
    //   this.multi = this.convertDataService.convertToNgxChartFormat(this.weather, this.dayIndex)
    // } else {
    //   return
    // }

    
      this.onPageTurn.emit(instruction);
   

  }

  // handleNextClickEmit() {
  //   // if element is 0 (most current day) then return, else decrease indexDay(move back in time one day)

  //   // if(this.dayIndex === 0) {
  //   //   return
  //   // } else {
  //   //   this.dayIndex = this.dayIndex - 1
  //   //   this.multi = this.convertDataService.convertToNgxChartFormat(this.weather, this.dayIndex)
  //   // }
  // }

}



