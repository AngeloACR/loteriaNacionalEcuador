import {
  Component,
  OnInit,
  OnChanges,
  Input,
  EventEmitter,
  Output,
} from "@angular/core";
import {
  ticketsNacional,
  ticketsLotto,
  ticketsAnimales,
} from "../../interfaces/lottery.interface";
import { ShoppingCartService } from "../../../payment/services/shopping-cart.service";

@Component({
  selector: "app-ticket-scroller",
  templateUrl: "./ticket-scroller.component.html",
  styleUrls: ["./ticket-scroller.component.scss"],
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
  @Output() deleteLoteriaTicket = new EventEmitter();
  @Output() deleteLoteriaFraccion = new EventEmitter();
  @Output() deleteLottoTicket = new EventEmitter();
  @Output() deletePozoTicket = new EventEmitter();

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
    this.cart.setTotal();
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

  deleteLoteria(ticket) {
        this.deleteLoteriaTicket.emit(ticket.value)
    }

    deleteFraccionLoteria(ticket, fraccion) {
      let data = {
        ticket,
        fraccion
      }
      this.deleteLoteriaFraccion.emit(data)
  }


  deleteLotto(ticket) {
    this.deleteLottoTicket.emit(ticket.value)

  }
  deletePozo(ticket) {
    this.deletePozoTicket.emit(ticket.value)

  }

  getTotal() {
    this.total = this.cart.getTotal();
  }
}
