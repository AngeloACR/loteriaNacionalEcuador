import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PozoMillonarioTicketComponent } from './pozo-millonario-ticket.component';

describe('PozoMillonarioTicketComponent', () => {
  let component: PozoMillonarioTicketComponent;
  let fixture: ComponentFixture<PozoMillonarioTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PozoMillonarioTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PozoMillonarioTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
