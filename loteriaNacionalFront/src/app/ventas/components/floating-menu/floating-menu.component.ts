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
  @ViewChild('float', {static: false}) floatingBox: any;



  @Input() ticketsLoteria: any;
  @Input() ticketsMillonaria: any;
  @Input() ticketsLotto: any;
  @Input() ticketsPozo: any;
  @Input() tickets: any;
  @Input() ticketsPozoRevancha: any;
  @Input() tipoLoteria?: string;
  @Output() emitirCompra = new EventEmitter();
  @Output() eliminarTodo = new EventEmitter();
  @Output() deleteLoteriaTicket = new EventEmitter();
  @Output() deleteLoteriaFraccion = new EventEmitter();
  @Output() deleteLottoTicket = new EventEmitter();
  @Output() deletePozoTicket = new EventEmitter();
  @Output() deletePozoRevanchaTicket = new EventEmitter();
  @Output() deleteMillonariaTicket = new EventEmitter();
  constructor(private cart: CarritoService) {}
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
    this.isToggled = !this.isToggled;
    this.carrito = {
      carritoDisplay: this.isToggled,
    };
    this.cerrar = {
      cerrarDisplay: this.isToggled,
    };
    this.isCart = false;
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
  deleteMillonaria(e: any) {
    this.deleteMillonariaTicket.emit(e);
  }
  deleteFraccion(e: any) {
    this.deleteLoteriaFraccion.emit(e);
  }

  deletePozoRevancha(ticket: any) {
    this.deletePozoRevanchaTicket.emit(ticket);
  }

  total?: any;

  ngDoCheck() {
    this.total = this.cart.getTotal();
    this.total = this.formatNumber(this.total);
  }

  formatNumber(number: number) {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(number);
  }
}
