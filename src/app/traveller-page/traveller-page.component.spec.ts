import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerPageComponent } from './traveller-page.component';

describe('TravellerPageComponent', () => {
  let component: TravellerPageComponent;
  let fixture: ComponentFixture<TravellerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
