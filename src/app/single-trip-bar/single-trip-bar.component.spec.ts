import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTripBarComponent } from './single-trip-bar.component';

describe('SingleTripBarComponent', () => {
  let component: SingleTripBarComponent;
  let fixture: ComponentFixture<SingleTripBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTripBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTripBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
