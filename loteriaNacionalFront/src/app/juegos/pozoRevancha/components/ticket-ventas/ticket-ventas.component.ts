import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { sorteo } from "../../interfaces/sorteo";
import { ticketsVenta } from "../../interfaces/ticket-venta";
import { VentaService } from "../../services/venta.service";
import { VentasService } from "src/app/ventas/services/ventas.service";

@Component({
  selector: 'revancha-ticket-ventas',
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
  boleto: any;

  constructor(private lotteryService: VentaService, private ventas: VentasService) { }

  async ngOnInit() {
    this.ticketIndex = this.ticket!.combinacion1;
    this.ticketNumbers = this.ticket!.display;
    this.sorteoNumber = this.sorteo!.sorteo;
    this.date = this.sorteo!.fecha;
    this.mascota = this.lotteryService.obtenerCaracteristicasDeMascota(
      this.ticket!.mascota
    );
    this.boleto = this.ventas.obtenerImagenBoleto(
      17,
      this.sorteoNumber
    );
  }

  obtenerAnimal(mascota: any) {
    return this.lotteryService.obtenerMascota(mascota);
  }
  deleteTicket() {
    this.delete.emit()
  }

}
