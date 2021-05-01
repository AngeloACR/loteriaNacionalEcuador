import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInquiryComponent } from './all-inquiry.component';

describe('AllInquiryComponent', () => {
  let component: AllInquiryComponent;
  let fixture: ComponentFixture<AllInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
