import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormPromoteComponent } from './trip-form-promote.component';

describe('TripFormPromoteComponent', () => {
  let component: TripFormPromoteComponent;
  let fixture: ComponentFixture<TripFormPromoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripFormPromoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormPromoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
