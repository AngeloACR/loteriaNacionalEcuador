import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'millonaria-ticket-consulta',
  templateUrl: './ticket-consulta.component.html',
  styleUrls: ['./ticket-consulta.component.scss'],
})
export class TicketConsultaComponent implements OnInit {
  @Input() ticket: any;

  description?: String;
  ticketNumbers?: Number[];
  serieNumbers?: Number[];
  premio: any;
  sorteo?: Number;
  constructor() {}

  ngOnInit() {
    this.ticketNumbers = this.ticket.ticketNumbers;
    this.serieNumbers = this.ticket.serieNumbers;
    this.premio = this.ticket.valorPremio? this.ticket.valorPremio : "";
    this.sorteo = this.ticket.numeroSorteo;
  }
}
