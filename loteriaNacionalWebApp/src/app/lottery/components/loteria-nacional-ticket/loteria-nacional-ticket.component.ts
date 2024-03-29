import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ticketsNacional, sorteo } from "../../interfaces/lottery.interface";

@Component({
  selector: "app-loteria-nacional-ticket",
  templateUrl: "./loteria-nacional-ticket.component.html",
  styleUrls: ["./loteria-nacional-ticket.component.scss"]
})
export class LoteriaNacionalTicketComponent implements OnInit {
  @Input() ticket: ticketsNacional;
  @Input() sorteo: sorteo;
  @Output() deleteTicket = new EventEmitter();
  @Output() deleteFraccion = new EventEmitter();
  ticketIndex: string;
  date: string;
  fraccion: string[];
  ticketNumbers: string[];
  sorteoNumber: string;

  objeto: any;
  numero: any;

  constructor() {}

  async ngOnInit() {
      this.ticketIndex = this.ticket.combinacion;
      this.fraccion = this.ticket.seleccionados;
      this.ticketNumbers = this.ticket.display;
      this.sorteoNumber = this.sorteo.sorteo;
      this.date = this.sorteo.fecha;
  }

  deleteBoleto(){
    this.deleteTicket.emit()
  }
}
