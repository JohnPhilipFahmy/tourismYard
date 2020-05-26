import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormDescriptionComponent } from './trip-form-description.component';

describe('TripFormDescriptionComponent', () => {
  let component: TripFormDescriptionComponent;
  let fixture: ComponentFixture<TripFormDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripFormDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
