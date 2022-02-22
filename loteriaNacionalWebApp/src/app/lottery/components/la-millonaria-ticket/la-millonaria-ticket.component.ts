import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sorteo, ticketsMillonaria } from '../../interfaces/lottery.interface';

@Component({
  selector: 'app-la-millonaria-ticket',
  templateUrl: './la-millonaria-ticket.component.html',
  styleUrls: ['./la-millonaria-ticket.component.scss']
})
export class LaMillonariaTicketComponent implements OnInit {
  @Input() ticket: ticketsMillonaria;
  @Input() sorteo: sorteo;
  @Output() deleteTicket = new EventEmitter();
  @Output() deleteFraccion = new EventEmitter();
  ticketIndex: string;
  serie: any;
  date: string;
  fraccion: string[];
  ticketNumbers: string[];
  sorteoNumber: string;

  objeto: any;
  numero: any;

  constructor() {}

  async ngOnInit() {
    this.ticketIndex = this.ticket.combinacion1;
    this.serie = this.ticket.combinacion2;
      this.fraccion = this.ticket.seleccionados;
      this.ticketNumbers = this.ticket.display;
      this.sorteoNumber = this.sorteo.sorteo;
      this.date = this.sorteo.fecha;
  }

  deleteBoleto(){
    this.deleteTicket.emit()
  }
}
