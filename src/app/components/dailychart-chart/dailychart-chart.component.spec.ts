import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailychartChartComponent } from './dailychart-chart.component';

describe('DailychartChartComponent', () => {
  let component: DailychartChartComponent;
  let fixture: ComponentFixture<DailychartChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailychartChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailychartChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
