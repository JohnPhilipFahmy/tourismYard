import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTripSliderComponent } from './single-trip-slider.component';

describe('SingleTripSliderComponent', () => {
  let component: SingleTripSliderComponent;
  let fixture: ComponentFixture<SingleTripSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTripSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTripSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
