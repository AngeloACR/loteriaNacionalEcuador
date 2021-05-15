import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoTicketComponent } from './lotto-ticket.component';

describe('LottoTicketComponent', () => {
  let component: LottoTicketComponent;
  let fixture: ComponentFixture<LottoTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
