import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaNacionalTicketComponent } from './loteria-nacional-ticket.component';

describe('LoteriaNacionalTicketComponent', () => {
  let component: LoteriaNacionalTicketComponent;
  let fixture: ComponentFixture<LoteriaNacionalTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteriaNacionalTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteriaNacionalTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
