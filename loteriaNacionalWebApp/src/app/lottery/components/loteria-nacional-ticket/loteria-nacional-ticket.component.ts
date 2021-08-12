import { Component, OnInit, Input } from "@angular/core";
import { ticketsNacional } from "../../interfaces/lottery.interface";

@Component({
  selector: "app-loteria-nacional-ticket",
  templateUrl: "./loteria-nacional-ticket.component.html",
  styleUrls: ["./loteria-nacional-ticket.component.scss"]
})
export class LoteriaNacionalTicketComponent implements OnInit {
  @Input() ticket: ticketsNacional;
  ticketIndex: number;
  date: string;
  fraccion: number[];
  ticketNumbers: number[];
  sorteoNumber: number[];

  objeto: any;
  numero: any;

  constructor() {}

  async ngOnInit() {
    /* console.log(JSON.parse(localStorage.getItem('loteriaTickets'))); */
    /* this.ticketNumbers = JSON.parse(localStorage.getItem('loterianumero' + ticket)); */
  }
}
