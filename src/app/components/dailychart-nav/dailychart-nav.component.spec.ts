import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailychartNavComponent } from './dailychart-nav.component';

describe('DailychartNavComponent', () => {
  let component: DailychartNavComponent;
  let fixture: ComponentFixture<DailychartNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailychartNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailychartNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
