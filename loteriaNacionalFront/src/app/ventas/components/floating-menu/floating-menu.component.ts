import {
  Component,
  OnInit,
  OnChanges,
  AfterViewInit,
  Input,
  EventEmitter,
  Output,
  HostListener,
  ViewChild,
} from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { CarritoService } from '../../services/carrito.service';
@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.scss'],
})
export class FloatingMenuComponent implements OnInit, AfterViewInit {
  isToggled: boolean = false;
  @ViewChild('float', { static: false }) floatingBox: any;



  @Input() ticketsLoteria: any;
  @Input() ticketsLotto: any;
  @Input() ticketsPozo: any;
  @Input() ticketsBingazo: any;
  @Input() tickets: any;
  @Input() ticketsPozoRevancha: any;
  @Input() tipoLoteria?: string;
  @Output() emitirCompra = new EventEmitter();
  @Output() eliminarTodo = new EventEmitter();
  @Output() deleteLoteriaTicket = new EventEmitter();
  @Output() deleteLoteriaFraccion = new EventEmitter();
  @Output() deleteLottoTicket = new EventEmitter();
  @Output() deleteBingazoTicket = new EventEmitter();
  @Output() deletePozoTicket = new EventEmitter();
  @Output() deletePozoRevanchaTicket = new EventEmitter();
  constructor(private cart: CarritoService) { }
  carrito: any = {};
  cerrar: any = {};
  ngOnInit() {
    this.carrito = {
      carritoDisplay: false,
    };
    this.cerrar = {
      cerrarDisplay: false,
    };
  }
  ngAfterViewInit() {
  }
  toggleBox() {
    this.isCart = !this.isCart;
    this.carrito = {
      carritoDisplay: this.isCart,
    };
    this.cerrar = {
      cerrarDisplay: this.isCart,
    };
  }
  isCart: boolean = false;
  toggleCart() {
    this.isCart = true;
  }

  comprar() {
    this.toggleBox();
    this.emitirCompra.emit();
  }
  deleteAllTickets() {
    this.eliminarTodo.emit();
  }
  deleteLoteria(e: any) {
    this.deleteLoteriaTicket.emit(e);
  }
  deleteLotto(e: any) {
    this.deleteLottoTicket.emit(e);
  }
  deletePozo(e: any) {
    this.deletePozoTicket.emit(e);
  }
  deleteFraccion(e: any) {
    this.deleteLoteriaFraccion.emit(e);
  }

  deletePozoRevancha(ticket: any) {
    this.deletePozoRevanchaTicket.emit(ticket);
  }
  deleteBingazo(ticket: any) {
    this.deleteBingazoTicket.emit(ticket);
  }

  total?: any;

  ngDoCheck() {
    this.total = this.cart.getTotal();
    this.total = this.formatNumber(this.total);
  }

  formatNumber(number: number) {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(number);
  }
}
