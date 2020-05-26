import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDealsTripComponent } from './hot-deals-trip.component';

describe('HotDealsTripComponent', () => {
  let component: HotDealsTripComponent;
  let fixture: ComponentFixture<HotDealsTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotDealsTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotDealsTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
