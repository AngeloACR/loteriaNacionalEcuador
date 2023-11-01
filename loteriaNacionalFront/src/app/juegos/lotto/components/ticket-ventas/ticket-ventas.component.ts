import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { sorteo } from '../../interfaces/sorteo';
import { ticketsVenta } from '../../interfaces/ticket-venta';
import { VentaService } from '../../services/venta.service';
import { VentasService } from 'src/app/ventas/services/ventas.service';

@Component({
  selector: 'lotto-ticket-ventas',
  templateUrl: './ticket-ventas.component.html',
  styleUrls: ['./ticket-ventas.component.scss'],
})
export class TicketVentasComponent implements OnInit {
  @Input() ticket?: ticketsVenta;
  @Input() sorteo?: sorteo;
  @Output() delete = new EventEmitter();
  ticketIndex?: string;
  date?: string;
  ticketNumbers?: string[];
  sorteoNumber?: string;

  objeto: any;
  numero: any;
  antojito: any;
  boleto: any;
  sorteoLunes: boolean;
  sorteoJueves: boolean;
  otrosSorteos: boolean;
  constructor(private lotteryService: VentaService, private ventas: VentasService) { }


  async ngOnInit() {
    this.ticketIndex = this.ticket!.combinacion1;
    this.ticketNumbers = this.ticket!.display;
    this.sorteoNumber = this.sorteo!.sorteo;
    this.date = this.sorteo!.fecha;

    this.sorteoLunes = this.sorteo!.dia == "Lunes"
    this.sorteoJueves = this.sorteo!.dia == "Jueves"
    this.otrosSorteos = this.sorteo!.dia == "Martes" || this.sorteo!.dia == "Sábado"
    this.boleto = this.ventas.obtenerImagenBoleto(
      2,
      this.sorteoNumber
    );
    this.antojito = this.lotteryService.obtenerCaracteristicasDeAntojito(
      this.ticket!.combinacion5
    );
  }
  deleteTicket() {
    this.delete.emit()
  }
}
