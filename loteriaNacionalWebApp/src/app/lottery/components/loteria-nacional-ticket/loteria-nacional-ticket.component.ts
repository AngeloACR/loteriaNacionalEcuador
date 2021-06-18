import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-loteria-nacional-ticket",
  templateUrl: "./loteria-nacional-ticket.component.html",
  styleUrls: ["./loteria-nacional-ticket.component.scss"]
})
export class LoteriaNacionalTicketComponent implements OnInit {
  @Input() ticket: any;
  ticketIndex: Number;
  date: String;
  fraccion: Number[];
  ticketNumbers: Number[];
  sorteo: Number;
  constructor() {}

  ngOnInit() {
    this.ticketIndex = this.ticket.ticketIndex;
    this.date = this.ticket.date;
    this.fraccion = this.ticket.fraccion;
    this.ticketNumbers = this.ticket.ticketNumbers;
    this.sorteo = this.ticket.sorteo;
  }
}
