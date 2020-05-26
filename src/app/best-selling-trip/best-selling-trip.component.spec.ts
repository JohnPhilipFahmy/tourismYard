import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingTripComponent } from './best-selling-trip.component';

describe('BestSellingTripComponent', () => {
  let component: BestSellingTripComponent;
  let fixture: ComponentFixture<BestSellingTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestSellingTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellingTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
