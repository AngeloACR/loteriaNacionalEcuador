import { Component, OnInit, Input } from "@angular/core";
import { ticketsAnimales } from "../../interfaces/lottery.interface";

@Component({
  selector: "app-pozo-millonario-ticket",
  templateUrl: "./pozo-millonario-ticket.component.html",
  styleUrls: ["./pozo-millonario-ticket.component.scss"]
})
export class PozoMillonarioTicketComponent implements OnInit {
  @Input() ticket: ticketsAnimales;

  constructor() {}

  ngOnInit() {}
}
