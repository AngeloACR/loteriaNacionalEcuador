import { Component, OnInit, Input } from "@angular/core";
import { ticketsAnimales, sorteo } from "../../interfaces/lottery.interface";
import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-pozo-millonario-ticket",
  templateUrl: "./pozo-millonario-ticket.component.html",
  styleUrls: ["./pozo-millonario-ticket.component.scss"]
})
export class PozoMillonarioTicketComponent implements OnInit {
  @Input() ticket: ticketsAnimales;
  @Input() sorteo: sorteo;
  ticketIndex: string;
  date: string;
  ticketNumbers: string[];
  sorteoNumber: string;
  mascota: any;

  objeto: any;
  numero: any;

  constructor(private lotteryService: LotteryService) {}

  async ngOnInit() {
    this.ticketIndex = this.ticket.combinacion1;
    this.ticketNumbers = this.ticket.display;
    this.sorteoNumber = this.sorteo.sorteo;
    this.date = this.sorteo.fecha;
    this.mascota = this.lotteryService.obtenerCaracteristicasDeMascota(
      this.ticket.mascota
    );
    /* console.log(JSON.parse(localStorage.getItem('loteriaTickets'))); */
    /* this.ticketNumbers = JSON.parse(localStorage.getItem('loterianumero' + ticket)); */
  }

  obtenerAnimal(mascota) {
    return this.lotteryService.obtenerMascota(mascota);
  }
}
