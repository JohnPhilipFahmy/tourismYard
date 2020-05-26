import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrearchRatingComponent } from './srearch-rating.component';

describe('SrearchRatingComponent', () => {
  let component: SrearchRatingComponent;
  let fixture: ComponentFixture<SrearchRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrearchRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrearchRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
