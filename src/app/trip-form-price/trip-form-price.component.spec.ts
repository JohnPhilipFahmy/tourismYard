import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormPriceComponent } from './trip-form-price.component';

describe('TripFormPriceComponent', () => {
  let component: TripFormPriceComponent;
  let fixture: ComponentFixture<TripFormPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripFormPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
