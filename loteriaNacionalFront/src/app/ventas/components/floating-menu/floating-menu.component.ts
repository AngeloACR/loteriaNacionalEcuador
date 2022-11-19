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
  @ViewChild('float') floatingBox: any;

  @HostListener('window:message', ['$event'])
  handleScroll(e: any) {
    let position =
      e.data.screen - 90 + e.data.top > e.target.innerHeight - 20
        ? e.target.innerHeight - 20
        : e.data.screen - 90 + e.data.top;
        console.log(this.floatingBox);
    this.floatingBox._elementRef.nativeElement.style.top = `${position}px`;
  }

  @Input() ticketsLoteria: any;
  @Input() ticketsMillonaria: any;
  @Input() ticketsLotto: any;
  @Input() ticketsPozo: any;
  @Input() tickets: any;
  @Input() tipoLoteria?: string;
  @Output() emitirCompra = new EventEmitter();
  @Output() eliminarTodo = new EventEmitter();
  @Output() deleteLoteriaTicket = new EventEmitter();
  @Output() deleteLoteriaFraccion = new EventEmitter();
  @Output() deleteLottoTicket = new EventEmitter();
  @Output() deletePozoTicket = new EventEmitter();
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
    console.log(this.floatingBox);
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
