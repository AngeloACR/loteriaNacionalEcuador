import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
} from '@angular/core';
import { VentasService } from '../../services/ventas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PagosService } from '../../services/pagos.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-confirmacion-de-venta',
  templateUrl: './confirmacion-de-venta.component.html',
  styleUrls: ['./confirmacion-de-venta.component.scss'],
})
export class ConfirmacionDeVentaComponent implements OnInit {
  @Output() compraConfirmada = new EventEmitter();
  @Output() compraCancelada = new EventEmitter();
  codigoPromocional: any;
  token: string;
  user: any;
  disabled: boolean = false;
  isLoading?: boolean;
  loadingMessage: string;

  instantaneas: any;
  isInstantaneas: boolean = false;

  ticketsPozo: any;
  ticketsLotto: any;
  ticketsLoteria: any;
  ticketsPozoRevancha: any;
  ticketsBingazo: any = {};
  compra: any = {};
  confirmacionDeCompra: boolean = false;
  boletosListos: boolean = false;

  constructor(
    private ventas: VentasService,
    private pagos: PagosService,
    private cart: CarritoService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.actRoute.params.subscribe((params) => {
      this.token! = params['token'];
    });
  }

  async ngOnInit() {
    this.loadingMessage = 'Recopilando los datos de la compra';
    this.isLoading = true;

    this.user = this.ventas.getAuthData().user;
    await this.getCarritoTickets();

    let loteriaAux = this.ticketsLoteria;
    let loteria = [];
    for (let id in loteriaAux) {
      let aux: any = {};
      aux['combinacion1'] = loteriaAux[id].ticket.combinacion;
      aux['fracciones'] = loteriaAux[id].ticket.seleccionados;
      aux['subtotal'] = parseFloat(loteriaAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(
        loteriaAux[id].subtotalConDesc
      ).toFixed(2);
      aux['tieneDescuento'] = loteriaAux[id].tieneDescuento;
      aux['fecha'] = loteriaAux[id].sorteo.fecha;
      aux['sorteo'] = loteriaAux[id].sorteo.sorteo;
      loteria.push(aux);
    }
    let lottoAux = this.ticketsLotto;
    let lotto = [];
    for (let id in lottoAux) {
      let aux: any = {};
      aux['combinacion1'] = lottoAux[id].ticket.combinacion1;
      aux['combinacion2'] = lottoAux[id].ticket.combinacion2;
      aux['combinacion3'] = lottoAux[id].ticket.combinacion3;
      aux['combinacion4'] = lottoAux[id].ticket.combinacion4;
      aux['combinacion5'] = lottoAux[id].ticket.combinacion5;
      aux['sorteo'] = lottoAux[id].sorteo.sorteo;
      aux['subtotal'] = parseFloat(lottoAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(lottoAux[id].subtotalConDesc).toFixed(
        2
      );
      aux['tieneDescuento'] = lottoAux[id].tieneDescuento;
      aux['fecha'] = lottoAux[id].sorteo.fecha;
      lotto.push(aux);
    }
    let pozoAux = this.ticketsPozo;
    let pozo = [];
    for (let id in pozoAux) {
      let aux: any = {};
      aux['combinacion1'] = pozoAux[id].ticket.combinacion1;
      aux['combinacion2'] = pozoAux[id].ticket.combinacion2;
      aux['mascota'] = pozoAux[id].ticket.mascota;
      aux['sorteo'] = pozoAux[id].sorteo.sorteo;
      aux['subtotal'] = parseFloat(pozoAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(pozoAux[id].subtotalConDesc).toFixed(
        2
      );
      aux['tieneDescuento'] = pozoAux[id].tieneDescuento;
      aux['fecha'] = pozoAux[id].sorteo.fecha;
      pozo.push(aux);
    }
    let pozoRevanchaAux = this.ticketsPozoRevancha;
    let pozoRevancha = [];
    for (let id in pozoRevanchaAux) {
      let aux: any = {};
      aux['combinacion1'] = pozoRevanchaAux[id].ticket.combinacion1;
      aux['combinacion2'] = pozoRevanchaAux[id].ticket.combinacion2;
      aux['mascota'] = pozoRevanchaAux[id].ticket.mascota;
      aux['sorteo'] = pozoRevanchaAux[id].sorteo.sorteo;
      aux['subtotal'] = parseFloat(pozoRevanchaAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(
        pozoRevanchaAux[id].subtotalConDesc
      ).toFixed(2);
      aux['tieneDescuento'] = pozoRevanchaAux[id].tieneDescuento;
      aux['fecha'] = pozoRevanchaAux[id].sorteo.fecha;
      pozoRevancha.push(aux);
    }
    let bingazoAux = this.ticketsBingazo;
    let bingazo = [];
    for (let id in bingazoAux) {
      let aux: any = {};
      aux['combinacion1'] = bingazoAux[id].ticket.combinacion1;
      aux['combinacion2'] = bingazoAux[id].ticket.combinacion2;
      aux['fruta'] = bingazoAux[id].ticket.fruta;
      aux['sorteo'] = bingazoAux[id].sorteo.sorteo;
      aux['subtotal'] = parseFloat(bingazoAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(
        bingazoAux[id].subtotalConDesc
      ).toFixed(2);
      aux['tieneDescuento'] = bingazoAux[id].tieneDescuento;
      aux['fecha'] = bingazoAux[id].sorteo.fecha;
      bingazo.push(aux);
    }
    let amount = parseFloat(this.pagos.getTotal()).toFixed(2);
    let amountConDesc = parseFloat(this.cart.getTotalConDesc()).toFixed(2);

    this.compra = {
      loteria,
      bingazo,
      lotto,
      pozo,
      millonaria: [],
      pozoRevancha,
      amount,
      amountConDesc,
    };

    this.boletosListos = true;
    this.isLoading = false;
  }
  async getCarritoTickets() {
    let carrito = await this.cart.buscarCarrito();
    this.ticketsLoteria = carrito.loteria;
    this.ticketsLotto = carrito.lotto;
    this.ticketsPozo = carrito.pozo;
    this.ticketsPozoRevancha = carrito.pozoRevancha;
    this.ticketsBingazo = carrito.bingazo;
  }

  idVenta: string;
  async confirmarCompra() {
    try {
      this.loadingMessage = 'Espera mientras procesamos tu compra';
      this.isLoading = true;
      this.disabled = true;

      let hasBalance = await this.pagos.hasBalance(0, this.token);
      if (hasBalance) {
        let reservaId = this.ventas.getReservaId();
        let cartValidation ={status: true, message: ""} // await this.cart.validarCarrito(reservaId);
        if (cartValidation.status) {
          let response = await this.pagos.confirmarCompra(
            this.token,
            reservaId
          );
          this.isLoading = false;
          if (response.status) {
            this.idVenta = response.idVenta;
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
      this.habilitarBoton();
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  async abrirFinalizar() {
    await this.cart.borrarCarrito();
    this.router.navigateByUrl(
      `/compra_tus_juegos/venta_finalizada/${this.token!}/${this.idVenta!}`
    );
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
      'La compra no se pudo procesar, por favor intente mas tarde'
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
