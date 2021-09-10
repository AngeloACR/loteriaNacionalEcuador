import {
  Component,
  OnInit,
  OnChanges,
  Input,
  EventEmitter,
  Output
} from "@angular/core";
import {
  ticketsNacional,
  ticketsLotto,
  ticketsAnimales
} from "../../interfaces/lottery.interface";
import { ShoppingCartService } from "../../../payment/services/shopping-cart.service";

@Component({
  selector: "app-ticket-scroller",
  templateUrl: "./ticket-scroller.component.html",
  styleUrls: ["./ticket-scroller.component.scss"]
})
export class TicketScrollerComponent implements OnInit {
  @Input() logo: String;
  @Input() ticketsLoteria: any;
  @Input() ticketsLotto: any;
  @Input() ticketsPozo: any;
  @Input() tickets: any;
  @Input() tipoLoteria: string;
  @Input() isResumen: boolean = false;
  @Output() emitirCompra = new EventEmitter();

  isLoteriaNacional: boolean = false;
  isLotto: boolean = false;
  isPozoMillonario: boolean = false;
  logoPath: string;
  total: number;
  constructor(private cart: ShoppingCartService) {}

  comprar() {
    this.emitirCompra.emit();
  }

  ngOnInit() {
    switch (this.tipoLoteria) {
      case "loteria":
        this.isLoteriaNacional = true;
        this.logoPath = "assets/img/loteria-amarillo.png";
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
    this.getTotal();
  }

  ngDoCheck() {
    this.getTotal();
  }

  checkTicketsLoteria() {
    if (this.ticketsLoteria) {
      return Object.keys(this.ticketsLoteria).length != 0;
    }
  }

  checkTicketsLotto() {
    if (this.ticketsLotto) {
      return Object.keys(this.ticketsLotto).length != 0;
    }
  }

  checkTicketsPozo() {
    if (this.ticketsPozo) {
      return Object.keys(this.ticketsPozo).length != 0;
    }
  }

  getTotal() {
    let total = 0;
    for (const key in this.ticketsLoteria) {
      let ticket = this.ticketsLoteria[key];
      let amount = parseFloat(ticket.sorteo.precio);
      ticket.ticket.seleccionados.forEach(element => {
        total += parseFloat(ticket.sorteo.precio);
      });
    }
    for (const key in this.ticketsLotto) {
      let ticket = this.ticketsLotto[key];
      let amount = parseFloat(ticket.sorteo.precio);
      total += parseFloat(ticket.sorteo.precio);
    }
    for (const key in this.ticketsPozo) {
      let ticket = this.ticketsPozo[key];
      let amount = parseFloat(ticket.sorteo.precio);
      total += parseFloat(ticket.sorteo.precio);
    }
    this.total = total;
    this.cart.setTotal(this.total);
  }
}
