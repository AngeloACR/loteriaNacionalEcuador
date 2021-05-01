import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInquiryComponent } from './single-inquiry.component';

describe('SingleInquiryComponent', () => {
  let component: SingleInquiryComponent;
  let fixture: ComponentFixture<SingleInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
