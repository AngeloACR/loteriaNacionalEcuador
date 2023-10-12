import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { sorteo } from "../../interfaces/sorteo";
import { ticketsVenta } from "../../interfaces/ticket-venta";
import { VentaService } from "../../services/venta.service";

@Component({
  selector: 'bingazo-ticket-ventas',
  templateUrl: './ticket-ventas.component.html',
  styleUrls: ['./ticket-ventas.component.scss']
})
export class TicketVentasComponent implements OnInit {
  @Input() ticket!: ticketsVenta;
  @Input() sorteo!: sorteo;
  fruta!: any;
  @Output() delete = new EventEmitter();
  ticketIndex!: string;
  date!: string;
  ticketNumbers!: any;
  sorteoNumber!: string;

  objeto: any;
  numero: any;

  constructor(private lotteryService: VentaService) { }

  async ngOnInit() {
    this.ticketIndex = this.ticket!.combinacion1;
    this.ticketNumbers = this.ticket!.display?.filter((item: any) => item != '00');
    this.sorteoNumber = this.sorteo!.sorteo;
    this.date = this.sorteo!.fecha;

    this.fruta = this.lotteryService.obtenerCaracteristicasDeFruta(
      this.ticket!.fruta
    );
  }
  deleteTicket() {
    this.delete.emit()
  }

}
