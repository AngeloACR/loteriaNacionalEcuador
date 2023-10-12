import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
  @Input() logo?: String;
  @Input() ticketsLoteria: any;
  @Input() ticketsLotto: any;
  @Input() ticketsPozo: any;
  @Input() ticketsMillonaria: any;
  @Input() ticketsPozoRevancha: any;
  @Input() ticketsBingazo: any;
  @Input() tickets: any;
  @Input() tipoLoteria?: string;
  @Input() isResumen: boolean = false;
  @Output() emitirCompra = new EventEmitter();
  @Output() eliminarTodo = new EventEmitter();
  @Output() deleteLoteriaTicket = new EventEmitter();
  @Output() deleteLoteriaFraccion = new EventEmitter();
  @Output() deleteMillonariaFraccion = new EventEmitter();
  @Output() deleteLottoTicket = new EventEmitter();
  @Output() deleteBingazoTicket = new EventEmitter();
  @Output() deletePozoTicket = new EventEmitter();
  @Output() deletePozoRevanchaTicket = new EventEmitter();
  @Output() deleteMillonariaTicket = new EventEmitter();

  isLoteriaNacional: boolean = false;
  isLotto: boolean = false;
  isPozoMillonario: boolean = false;
  isLaMillonaria: boolean = false;
  isBingazo: boolean = false;
  logoPath?: string;
  total: any;
  totalConDesc: any;
  seleccionadosCarrito: any;
  constructor(private cart: CarritoService) { }

  comprar() {
    this.emitirCompra.emit();
  }
  eliminar() {
    this.eliminarTodo.emit();
  }

  async ngOnInit() {
    this.seleccionadosCarrito = this.cart.ticketsCarrito;
    //this.seleccionadosCarrito = (await this.cart.getCarrito()).carrito
    this.seleccionadosCarrito =
      this.seleccionadosCarrito.length != 0
        ? this.seleccionadosCarrito.reverse()
        : [];
    //this.seleccionadosCarrito = this.seleccionadosCarrito? this.seleccionadosCarrito.reverse(): [];
    switch (this.tipoLoteria) {
      case 'loteria':
        this.isLoteriaNacional = true;
        this.logoPath = 'assets/img/loteria-carrito.svg';
        break;
      case 'lotto':
        this.isLotto = true;
        this.logoPath = 'assets/img/lotto-carrito.svg';
        break;
      case 'dacilotto':
        this.isLotto = true;
        this.logoPath = 'assets/img/lotto-carrito.svg';
        break;
      case 'pozo':
        this.isPozoMillonario = true;
        this.logoPath = 'assets/img/pozo-carrito.svg';
        break;

      case 'bingazo':
        this.isBingazo = true;
        this.logoPath = 'assets/img/lotto-carrito.svg';
        break;
      case 'millonaria':
        this.isLaMillonaria = true;
        this.logoPath = 'assets/img/lotto-carrito.svg';
        break;
    }
    this.getTotal();
  }

  hasDiscount(total: string) {
    return parseInt(total.replace('$', ''));
  }

  async ngDoCheck() {
    //this.seleccionadosCarrito = (await this.cart.getCarrito()).carrito
    this.seleccionadosCarrito = this.cart.getCarritoLocal();
    this.seleccionadosCarrito =
      this.seleccionadosCarrito.length != 0
        ? this.seleccionadosCarrito.reverse()
        : [];
    //await this.cart.setTotal();
    this.getTotal();
  }

  checkTicketsLoteria() {
    if (this.ticketsLoteria) {
      return Object.keys(this.ticketsLoteria).length != 0;
    } else return false;
  }

  checkTicketsLotto() {
    if (this.ticketsLotto) {
      return Object.keys(this.ticketsLotto).length != 0;
    } else return false;
  }


  checkTicketsBingazo() {
    if (this.ticketsBingazo) {
      return Object.keys(this.ticketsBingazo).length != 0;
    } else return false;
  }

  checkTicketsPozo() {
    if (this.ticketsPozo) {
      return Object.keys(this.ticketsPozo).length != 0;
    } else return false;
  }

  checkTicketsLaMillonaria() {
    if (this.ticketsMillonaria) {
      return Object.keys(this.ticketsMillonaria).length != 0;
    } else return false;
  }

  checkTicketsPozoRevancha() {
    if (this.ticketsPozoRevancha) {
      return Object.keys(this.ticketsPozoRevancha).length != 0;
    } else return false;
  }

  deleteLoteria(ticket: any) {
    this.deleteLoteriaTicket.emit(ticket.identificador);
  }


  deleteBingazo(ticket: any) {
    this.deleteBingazoTicket.emit(ticket.identificador);
  }

  deleteFraccionLoteria(ticket: any, fraccion: any) {
    let data = {
      ticket,
      fraccion,
    };
    this.deleteLoteriaFraccion.emit(data);
  }
  deleteFraccionMillonaria(ticket: any, fraccion: any) {
    let data = {
      ticket,
      fraccion,
    };
    this.deleteMillonariaFraccion.emit(data);
  }

  deleteLotto(ticket: any) {
    this.deleteLottoTicket.emit(ticket.identificador);
  }

  deleteMillonaria(ticket: any) {
    this.deleteMillonariaTicket.emit(ticket.identificador);
  }
  deletePozo(ticket: any) {
    this.deletePozoTicket.emit(ticket.identificador);
  }
  deletePozoRevancha(ticket: any) {
    this.deletePozoRevanchaTicket.emit(ticket.identificador);
  }

  getTotal() {
    this.total = this.formatNumber(this.cart.getTotal());
    this.totalConDesc = this.formatNumber(this.cart.getTotalConDesc());
  }
  formatNumber(number: any) {
    // Create our number formatter.
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
