import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dailychart-nav',
  templateUrl: './dailychart-nav.component.html',
  styleUrls: ['./dailychart-nav.component.scss'],
})
export class DailychartNavComponent implements OnInit {
  @Output() pageTurn: EventEmitter<string> = new EventEmitter<string>();

  @Input() dayIndex: number;
  @Input() weather: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  handleClick(instruction: string) {
   this.pageTurn.emit(instruction);
  }

}
