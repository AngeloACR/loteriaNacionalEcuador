import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pozo-millonario-ticket",
  templateUrl: "./pozo-millonario-ticket.component.html",
  styleUrls: ["./pozo-millonario-ticket.component.scss"]
})
export class PozoMillonarioTicketComponent implements OnInit {
  @Input() ticket: any;

  description: String;
  ticketNumbers: Number[];
  numeroSorteo: Number;
  sorteo: any;
  constructor() {}

  ngOnInit() {
    this.description = this.ticket.description;
    this.ticketNumbers = this.ticket.ticketNumbers;
    this.numeroSorteo = this.ticket.numeroSorteo;
    this.sorteo = this.ticket.sorteo;
  }
}
