import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTripDetailsComponent } from './single-trip-details.component';

describe('SingleTripDetailsComponent', () => {
  let component: SingleTripDetailsComponent;
  let fixture: ComponentFixture<SingleTripDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTripDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
