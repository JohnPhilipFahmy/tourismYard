import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPageBodyComponent } from './company-page-body.component';

describe('CompanyPageBodyComponent', () => {
  let component: CompanyPageBodyComponent;
  let fixture: ComponentFixture<CompanyPageBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyPageBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
