import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
} from "@angular/core";
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
  totalConDesc: any;
  seleccionadosCarrito: any;
  constructor(private cart: ShoppingCartService) {}

  comprar() {
    this.emitirCompra.emit();
  }
  eliminar() {
    this.eliminarTodo.emit();
  }

  async ngOnInit() {
    this.seleccionadosCarrito = this.cart.ticketsCarrito;
    //this.seleccionadosCarrito = (await this.cart.getCarrito()).carrito
    this.seleccionadosCarrito = this.seleccionadosCarrito.length != 0? this.seleccionadosCarrito.reverse(): [];
    //this.seleccionadosCarrito = this.seleccionadosCarrito? this.seleccionadosCarrito.reverse(): [];
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

  hasDiscount(total){
    return parseInt(total.replace("$", ""));
  }

  async ngDoCheck() {
    //this.seleccionadosCarrito = (await this.cart.getCarrito()).carrito
    this.seleccionadosCarrito = this.cart.getCarritoLocal();
    this.seleccionadosCarrito = this.seleccionadosCarrito.length != 0? this.seleccionadosCarrito.reverse(): [];
    //await this.cart.setTotal();
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
        this.deleteLoteriaTicket.emit(ticket)
    }

    deleteFraccionLoteria(ticket, fraccion) {
      let data = {
        ticket,
        fraccion
      }
      this.deleteLoteriaFraccion.emit(data)
  }


  deleteLotto(ticket) {
    this.deleteLottoTicket.emit(ticket)

  }
  deletePozo(ticket) {
    this.deletePozoTicket.emit(ticket)

  }

  getTotal() {
    this.total = this.formatNumber(this.cart.getTotal());
    this.totalConDesc = this.formatNumber(this.cart.getTotalConDesc());
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
