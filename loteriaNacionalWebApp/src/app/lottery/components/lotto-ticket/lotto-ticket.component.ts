import { Component, OnInit, Input } from "@angular/core";
import { ticketsLotto } from "../../interfaces/lottery.interface";

@Component({
  selector: "app-lotto-ticket",
  templateUrl: "./lotto-ticket.component.html",
  styleUrls: ["./lotto-ticket.component.scss"]
})
export class LottoTicketComponent implements OnInit {
  @Input() ticket: ticketsLotto;

  constructor() {}

  ngOnInit() {}
}
