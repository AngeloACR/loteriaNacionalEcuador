import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'pozo-ticket-consulta',
  templateUrl: './ticket-consulta.component.html',
  styleUrls: ['./ticket-consulta.component.scss']
})
export class TicketConsultaComponent implements OnInit {
  @Input() ticket: any;
  @Input() mascotaPath: any;
  @Input() mascota: any;

  description?: String;
  ticketNumbers?: Number[];
  numeroSorteo?: Number;
  sorteo: any;
  constructor() {}

  ngOnInit() {
    this.description = this.ticket.description;
    this.ticketNumbers = this.ticket.ticketNumbers;
    this.numeroSorteo = this.ticket.numeroSorteo;
    this.sorteo = this.ticket.sorteo;
  }
}
