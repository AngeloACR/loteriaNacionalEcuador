import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'loteria-ticket-consulta',
  templateUrl: './ticket-consulta.component.html',
  styleUrls: ['./ticket-consulta.component.scss'],
})
export class TicketConsultaComponent implements OnInit {
  @Input() ticket: any;

  description?: String;
  ticketNumbers?: Number[];
  sorteo?: Number;
  constructor() {}

  ngOnInit() {
    this.ticketNumbers = this.ticket.ticketNumbers;
    this.sorteo = this.ticket.numeroSorteo;
  }
}
