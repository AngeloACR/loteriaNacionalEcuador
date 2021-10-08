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
  @Output() eliminarTodo = new EventEmitter();
  @Output() deleteLoteriaTicket = new EventEmitter();
  @Output() deleteLoteriaFraccion = new EventEmitter();
  @Output() deleteLottoTicket = new EventEmitter();
  @Output() deletePozoTicket = new EventEmitter();

  isLoteriaNacional: boolean = false;
  isLotto: boolean = false;
  isPozoMillonario: boolean = false;
  logoPath: string;
  total: any;
  constructor(private cart: ShoppingCartService) {}

  comprar() {
    this.emitirCompra.emit();
  }
  eliminar() {
    this.eliminarTodo.emit();
  }

  ngOnInit() {
    switch (this.tipoLoteria) {
      case "loteria":
        this.isLoteriaNacional = true;
        this.logoPath = "assets/img/loteria-carrito.svg";
        break;
      case "lotto":
        this.isLotto = true;
        this.logoPath = "assets/img/lotto-carrito.svg";
        break;
      case "pozo":
        this.isPozoMillonario = true;
        this.logoPath = "assets/img/pozo-carrito.svg";
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
    this.total = this.formatNumber(this.cart.getTotal());
  }
  formatNumber(number){// Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    
    return formatter.format(number);
  }

}
