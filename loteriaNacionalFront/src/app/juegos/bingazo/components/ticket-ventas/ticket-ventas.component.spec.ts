import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketVentasComponent } from './ticket-ventas.component';

describe('TicketVentasComponent', () => {
  let component: TicketVentasComponent;
  let fixture: ComponentFixture<TicketVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
