import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from "@angular/core";
import { VentasService } from "../../services/ventas.service";
import { ActivatedRoute, Router } from "@angular/router";
import { PagosService } from "../../services/pagos.service";
import { CarritoService } from "../../services/carrito.service";

@Component({
  selector: 'app-confirmacion-de-venta',
  templateUrl: './confirmacion-de-venta.component.html',
  styleUrls: ['./confirmacion-de-venta.component.scss']
})
export class ConfirmacionDeVentaComponent implements OnInit {

  @Output() compraConfirmada = new EventEmitter();
  @Output() compraCancelada = new EventEmitter();
  @Input() compra: any;
  codigoPromocional: any;
  token: string;
  user: any;
  disabled: boolean = false;
  isLoading?: boolean;
  loadingMessage: string;

  instantaneas: any;
  isInstantaneas: boolean = false;
  
  constructor(
    private ventas: VentasService,
    private pagos: PagosService,
    private cart: CarritoService,
    private actRoute: ActivatedRoute,
    private router: Router,

  ) {
    this.actRoute.params.subscribe((params) => {
      this.token! = params['token'];
    });

  }

  ngOnInit() {
    this.user = this.ventas.getAuthData().user
  }
idVenta: string;
  async confirmarCompra() {    try {
      this.isLoading = true;
      this.loadingMessage = 'Espera mientras procesamos tu compra';
      let hasBalance = await this.pagos.hasBalance(0, this.token);

      if (hasBalance) {
        let reservaId = this.ventas.getReservaId();
        let cartValidation = await this.cart.validarCarrito(reservaId);
        if (cartValidation.status) {
          let response = await this.pagos.confirmarCompra(
            this.token,
            reservaId
          );
          this.isLoading = false;
          console.log(response);
          if (response.status) {
            this.codigoPromocional = response.codigoPromocional;
            if (response.instantanea.status) {
              this.instantaneas = response.instantanea.data;
              this.isInstantaneas = true;
            } else {
              this.instantaneas = '';
              this.abrirFinalizar();
            }
          } else {
            this.cancelarCompra();
          }
        } else {
          this.openValidationError(cartValidation.message);
        }
        this.isLoading = false;
      } else {
        this.isLoading = false;
        let message = 'Tu saldo es insuficiente para realizar la compra';
        this.recargarSaldo(message);
      }
    } catch (e: any) {
      this.isLoading = false;
      this.purchase.habilitarBoton();
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  @ViewChild('purchase') purchase: any;
  async abrirFinalizar() {
    await this.cart.borrarCarrito();
    this.router.navigateByUrl(`/compra_tus_juegos/venta_finalizada/${this.token!}`);

  }
  recargaDeSaldoMessage?: string;
  recargarSaldo(message: any) {
    this.recargaDeSaldoMessage = message;
  }
  isError: boolean = false;
  errorMessage?: string;
  openError(msg: any) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }

  habilitarBoton() {
    this.disabled = false;
  }

  volver() {
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token!}`);
  }

  cancelarCompra() {
    this.compraCancelada.emit(
      "La compra no se pudo procesar, por favor intente mas tarde"
    );
  }

  isValidationError: boolean = false;
  validationErrorMessage?: string;
  openValidationError(msg: any) {
    this.validationErrorMessage = msg;
    this.isValidationError = true;
  }

  closeValidationError() {
    this.isValidationError = false;
    this.validationErrorMessage = '';
    window.location.reload();
  }
}
