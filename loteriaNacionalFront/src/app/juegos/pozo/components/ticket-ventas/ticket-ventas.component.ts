import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {  sorteo } from "../../interfaces/sorteo";
import { ticketsVenta } from "../../interfaces/ticket-venta";
import { VentaService } from "../../services/venta.service";

@Component({
  selector: 'pozo-ticket-ventas',
  templateUrl: './ticket-ventas.component.html',
  styleUrls: ['./ticket-ventas.component.scss']
})
export class TicketVentasComponent implements OnInit {
  @Input() ticket!: ticketsVenta;
  @Input() sorteo!: sorteo;
  @Output() delete = new EventEmitter();
  ticketIndex!: string;
  date!: string;
  ticketNumbers!: any;
  sorteoNumber!: string;
  mascota: any;

  objeto: any;
  numero: any;

  constructor(private lotteryService: VentaService) {}

  async ngOnInit() {
    this.ticketIndex = this.ticket!.combinacion1;
    this.ticketNumbers = this.ticket!.display;
    this.sorteoNumber = this.sorteo!.sorteo;
    this.date = this.sorteo!.fecha;
    this.mascota = this.lotteryService.obtenerCaracteristicasDeMascota(
      this.ticket!.mascota
    );
  }

  obtenerAnimal(mascota: any) {
    return this.lotteryService.obtenerMascota(mascota);
  }
  deleteTicket(){
    this.delete.emit()
  }
 
}