import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormTransportationComponent } from './trip-form-transportation.component';

describe('TripFormTransportationComponent', () => {
  let component: TripFormTransportationComponent;
  let fixture: ComponentFixture<TripFormTransportationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripFormTransportationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
