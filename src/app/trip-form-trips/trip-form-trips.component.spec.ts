import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormTripsComponent } from './trip-form-trips.component';

describe('TripFormTripsComponent', () => {
  let component: TripFormTripsComponent;
  let fixture: ComponentFixture<TripFormTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripFormTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
