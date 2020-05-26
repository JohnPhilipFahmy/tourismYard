import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormAvailableDatesComponent } from './trip-form-available-dates.component';

describe('TripFormAvailableDatesComponent', () => {
  let component: TripFormAvailableDatesComponent;
  let fixture: ComponentFixture<TripFormAvailableDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripFormAvailableDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormAvailableDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
