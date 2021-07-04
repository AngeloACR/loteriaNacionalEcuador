import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-loteria-nacional-ticket",
  templateUrl: "./loteria-nacional-ticket.component.html",
  styleUrls: ["./loteria-nacional-ticket.component.scss"]
})
export class LoteriaNacionalTicketComponent implements OnInit {
  @Input() ticket: any;

  description: String;
  ticketNumbers: Number[];
  sorteo: Number;
  constructor() {}

  ngOnInit() {
    this.description = this.ticket.description;
    this.ticketNumbers = this.ticket.ticketNumbers;
    this.sorteo = this.ticket.numeroSorteo;
  }
}
