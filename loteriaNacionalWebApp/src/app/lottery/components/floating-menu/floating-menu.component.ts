import {
  Component,
  OnInit,
  OnChanges,
  Input,
  EventEmitter,
  Output,
} from "@angular/core";
import { ShoppingCartService } from "../../../payment/services/shopping-cart.service";
@Component({
  selector: "app-floating-menu",
  templateUrl: "./floating-menu.component.html",
  styleUrls: ["./floating-menu.component.scss"],
})
export class FloatingMenuComponent implements OnInit, OnChanges {
  isToggled: boolean = false;
  @Input() ticketsLoteria: any;
  @Input() ticketsLotto: any;
  @Input() ticketsPozo: any;
  @Input() tickets: any;
  @Input() tipoLoteria: string;
  @Output() emitirCompra = new EventEmitter();
  @Output() eliminarTodo = new EventEmitter();
  @Output() deleteLoteriaTicket = new EventEmitter();
  @Output() deleteLoteriaFraccion = new EventEmitter();
  @Output() deleteLottoTicket = new EventEmitter();
  @Output() deletePozoTicket = new EventEmitter();
  constructor(
    private cart: ShoppingCartService
    ) {
      
  }
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
    this.isCart = false;
    this.emitirCompra.emit();
  }
  deleteAllTickets() {
    this.eliminarTodo.emit();
  }
  deleteLoteria(e) {
    this.deleteLoteriaTicket.emit(e);
  }
  deleteLotto(e) {
    this.deleteLottoTicket.emit(e);
  }
  deletePozo(e) {
    this.deletePozoTicket.emit(e);
  }
  deleteFraccion(e) {
    this.deleteLoteriaFraccion.emit(e);
  }
    
  @Input() total: string

  ngDoCheck() {
    this.total = this.cart.getTotal();
    this.total = this.formatNumber(this.total)
    console.log(this.total)
  }
  ngOnChanges() {
    this.total = this.cart.getTotal();
    this.total = this.formatNumber(this.total)
    console.log(this.total)
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
