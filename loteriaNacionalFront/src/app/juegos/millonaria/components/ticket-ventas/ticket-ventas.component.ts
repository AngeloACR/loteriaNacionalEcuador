import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sorteo } from '../../interfaces/sorteo';
import { ticketsVenta } from '../../interfaces/ticket-venta';

@Component({
  selector: 'millonaria-ticket-ventas',
  templateUrl: './ticket-ventas.component.html',
  styleUrls: ['./ticket-ventas.component.scss']
})
export class TicketVentasComponent implements OnInit {
  @Input() ticket?: ticketsVenta;
  @Input() sorteo?: sorteo;
  @Output() deleteTicket = new EventEmitter();
  @Output() deleteFraccion = new EventEmitter();
  ticketIndex?: string;
  serie: any;
  date?: string;
  fraccion?: string[];
  ticketNumbers?: string[];
  sorteoNumber?: string;

  objeto: any;
  numero: any;

  constructor() {}

  async ngOnInit() {
    this.ticketIndex = this.ticket!.combinacion1;
    this.serie = this.ticket!.combinacion2;
      this.fraccion = this.ticket!.seleccionados;
      this.ticketNumbers = this.ticket!.display;
      this.sorteoNumber = this.sorteo!.sorteo;
      this.date = this.sorteo!.fecha;
  }

  deleteBoleto(){
    this.deleteTicket.emit()
  }
}
