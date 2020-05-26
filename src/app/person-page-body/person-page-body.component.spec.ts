import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPageBodyComponent } from './person-page-body.component';

describe('PersonPageBodyComponent', () => {
  let component: PersonPageBodyComponent;
  let fixture: ComponentFixture<PersonPageBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonPageBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
