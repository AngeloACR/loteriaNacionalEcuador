import { Component, OnInit, Input } from "@angular/core";
import { ticketsLotto, sorteo } from "../../interfaces/lottery.interface";

@Component({
  selector: "app-lotto-ticket",
  templateUrl: "./lotto-ticket.component.html",
  styleUrls: ["./lotto-ticket.component.scss"]
})
export class LottoTicketComponent implements OnInit {
  @Input() ticket: ticketsLotto;
  @Input() sorteo: sorteo;
  ticketIndex: string;
  date: string;
  ticketNumbers: string[];
  sorteoNumber: string;

  objeto: any;
  numero: any;

  constructor() {}

  async ngOnInit() {
    this.ticketIndex = this.ticket.combinacion1;
    this.ticketNumbers = this.ticket.display;
    this.sorteoNumber = this.sorteo.sorteo;
    this.date = this.sorteo.fecha;
    /* console.log(JSON.parse(localStorage.getItem('loteriaTickets'))); */
    /* this.ticketNumbers = JSON.parse(localStorage.getItem('loterianumero' + ticket)); */
  }
}
