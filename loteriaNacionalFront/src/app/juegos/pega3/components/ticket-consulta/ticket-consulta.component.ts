import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pega3-ticket-consulta',
  templateUrl: './ticket-consulta.component.html',
  styleUrls: ['./ticket-consulta.component.scss'],
})
export class TicketConsultaComponent implements OnInit {
  @Input() ticket: any;

  description?: String;
  ticketNumbers?: Number[];
  numeroSorteo?: Number;
  sorteo: any;
  premio: any;
  constructor() {}

  ngOnInit() {
    this.description = this.ticket.description;
    this.ticketNumbers = this.ticket.ticketNumbers;
    this.premio = this.ticket.valorPremio? this.ticket.valorPremio : "";

    this.sorteo = this.ticket.sorteo;
    this.numeroSorteo = this.ticket.numeroSorteo;
  }
}
