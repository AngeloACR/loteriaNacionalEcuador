import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import {
  ticketsNacional,
  ticketsLotto,
  ticketsAnimales
} from "../../interfaces/lottery.interface";

@Component({
  selector: "app-ticket-scroller",
  templateUrl: "./ticket-scroller.component.html",
  styleUrls: ["./ticket-scroller.component.scss"]
})
export class TicketScrollerComponent implements OnInit {
  @Input() logo: String;
  @Input() tickets: any;
  @Input() tipoLoteria: string;
  @Input() isResumen: boolean = false;
  @Output() emitirCompra = new EventEmitter();

  isLoteriaNacional: boolean = false;
  isLotto: boolean = false;
  isPozoMillonario: boolean = false;
  logoPath: string;
  constructor() {}

  comprar() {
    this.emitirCompra.emit();
  }

  ngOnInit() {
    console.log(this.tickets);
    switch (this.tipoLoteria) {
      case "loteria":
        this.isLoteriaNacional = true;
        this.logoPath = "assets/Lotto middle.png";
        break;
      case "lotto":
        this.isLotto = true;
        this.logoPath = "assets/img/lotto.png";
        break;
      case "pozo":
        this.isPozoMillonario = true;
        this.logoPath = "assets/img/pozzo millonario.png";
        break;
    }
  }

  checkTickets() {
    if (this.tickets) {
      return Object.keys(this.tickets).length != 0;
    }
  }
}
