import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormPaymentComponent } from './trip-form-payment.component';

describe('TripFormPaymentComponent', () => {
  let component: TripFormPaymentComponent;
  let fixture: ComponentFixture<TripFormPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripFormPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
