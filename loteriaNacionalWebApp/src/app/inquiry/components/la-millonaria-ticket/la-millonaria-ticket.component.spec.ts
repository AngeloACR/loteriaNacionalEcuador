import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaMillonariaTicketComponent } from './la-millonaria-ticket.component';

describe('LaMillonariaTicketComponent', () => {
  let component: LaMillonariaTicketComponent;
  let fixture: ComponentFixture<LaMillonariaTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaMillonariaTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaMillonariaTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
