import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingPageComponent } from './best-selling-page.component';

describe('BestSellingPageComponent', () => {
  let component: BestSellingPageComponent;
  let fixture: ComponentFixture<BestSellingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestSellingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
