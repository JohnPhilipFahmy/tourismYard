import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormAccommodationComponent } from './trip-form-accommodation.component';

describe('TripFormAccommodationComponent', () => {
  let component: TripFormAccommodationComponent;
  let fixture: ComponentFixture<TripFormAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripFormAccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
