import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-lotto-ticket",
  templateUrl: "./lotto-ticket.component.html",
  styleUrls: ["./lotto-ticket.component.scss"]
})
export class LottoTicketComponent implements OnInit {
  @Input() ticket: any;

  description: String;
  ticketNumbers: Number[];
  ticketNumbers2: Number[];
  ticketNumbers3: Number[];
  numeroSorteo: Number;
  sorteo: any;
  constructor() {}

  ngOnInit() {
    this.description = this.ticket.description;
    this.ticketNumbers = this.ticket.ticketNumbers;
    this.ticketNumbers2 = this.ticket.ticketNumbers2;
    this.ticketNumbers3 = this.ticket.ticketNumbers3;

    this.sorteo = this.ticket.sorteo;
    this.numeroSorteo = this.ticket.numeroSorteo;
  }
}
