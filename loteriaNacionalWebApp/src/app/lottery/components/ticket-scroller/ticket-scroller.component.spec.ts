import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketScrollerComponent } from './ticket-scroller.component';

describe('TicketScrollerComponent', () => {
  let component: TicketScrollerComponent;
  let fixture: ComponentFixture<TicketScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
