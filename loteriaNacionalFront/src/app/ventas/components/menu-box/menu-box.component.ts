import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { VentasService } from '../../services/ventas.service';
import { PagosService } from '../../services/pagos.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'ventas-menu-box',
  templateUrl: './menu-box.component.html',
  styleUrls: ['./menu-box.component.scss'],
})
export class MenuBoxComponent implements OnInit {
  linkLotto: string = '';
  linkLoteriaNacional: string = '';
  linkPozoMillonario: string = '';
  linkMillonaria: string = '';
  token?: string;
  lotteryToken?: string;
  usuario?: string;
  errorTitle?: string;
  isLoading?: boolean;
  loadingMessage?: string;
  ticketsPozo: any;
  ticketsLotto: any;
  ticketsLoteria: any;
  ticketsCarrito: any;
  ticketsMillonaria: any;
  @Input() miniBox: boolean = false;
  ticketsPozoRevancha: any;

  constructor(
    private actRoute: ActivatedRoute,
    public lottery: VentasService,
    private paymentService: PagosService,
    private cart: CarritoService,

    private router: Router
  ) {
    this.actRoute.params.subscribe((params) => {
      this.token = params['token'];
    });
  }

  async ngOnInit() {
    try {
      this.loadingMessage = 'Espera mientras procesamos tu información';
      this.isLoading = true;
      if (this.token) {
        let data = await this.lottery.authUser(this.token);
        this.lotteryToken = data.lotteryToken;
        if (this.lotteryToken) {
          this.linkLoteriaNacional = `/compra_tus_juegos/loteria/${this.token}`;
          this.linkLotto = `/compra_tus_juegos/lotto/${this.token}`;
          this.linkPozoMillonario = `/compra_tus_juegos/pozo/${this.token}`;
          this.linkMillonaria = `/compra_tus_juegos/millonaria/${this.token}`;
        }

        await this.getCarritoTickets();
        //this.getTotal();
      }
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e);
      let errorMessage = e.message;
      let errorTitle = 'Error';
      this.openError(errorMessage, errorTitle);
    }
  }

  confirmacionDeCompra: boolean = false;
  compraFinalizada: boolean = false;
  saldoInsuficiente: boolean = false;
  compraCancelada: boolean = false;
  instantaneas: any;
  isInstantaneas: boolean = false;
  cancelMessage: string = '';
  detalleCompra: any;
  recargaDeSaldoMessage?: string;

  dismissCompras() {
    this.confirmacionDeCompra = false;
    this.isInstantaneas = false;

    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
  }

  volver() {
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  total?: string;
  getTotal() {
    this.total = this.cart.getTotal();
  }
  comprar() {
    this.dismissCompras();

    let loteriaAux = this.ticketsLoteria;
    let loteria = [];
    for (let id in loteriaAux) {
      let aux: any = {};
      aux['combinacion1'] = loteriaAux[id].ticket.combinacion;
      aux['fracciones'] = loteriaAux[id].ticket.seleccionados;
      aux['subtotal'] = parseFloat(loteriaAux[id].subtotal).toFixed(2);
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
      aux['sorteo'] = lottoAux[id].sorteo.sorteo;
      aux['subtotal'] = parseFloat(lottoAux[id].subtotal).toFixed(2);
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
      aux['fecha'] = pozoAux[id].sorteo.fecha;
      pozo.push(aux);
    }
    let millonariaAux = this.ticketsMillonaria;
    let millonaria = [];
    for (let id in millonariaAux) {
      let aux: any = {};
      aux['combinacion1'] = millonariaAux[id].ticket.combinacion1;
      aux['combinacion2'] = millonariaAux[id].ticket.combinacion2;
      aux['fracciones'] = millonariaAux[id].ticket.seleccionados;
      aux['subtotal'] = parseFloat(millonariaAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(
        millonariaAux[id].subtotalConDesc
      ).toFixed(2);
      aux['tieneDescuento'] = millonariaAux[id].tieneDescuento;
      aux['fecha'] = millonariaAux[id].sorteo.fecha;
      aux['sorteo'] = millonariaAux[id].sorteo.sorteo;
      millonaria.push(aux);
    }
    let amount = parseFloat(this.paymentService.getTotal()).toFixed(2);
    let amountConDesc = parseFloat(this.cart.getTotalConDesc()).toFixed(2);

    this.detalleCompra = {
      loteria,
      millonaria,
      lotto,
      pozo,
      amount,
      amountConDesc,
    };

    this.confirmacionDeCompra = true;
  }

  finalizarCompra() {
    this.paymentService.finalizarCompra();
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  irARecarga() {}

  async confirmarCompra() {
    try {
      this.isLoading = true;
      this.loadingMessage = 'Espera mientras procesamos tu compra';
      let hasBalance = await this.paymentService.hasBalance(0, this.token);

      if (hasBalance) {
        let reservaId = this.cart.getReservaId();
        let cartValidation = await this.cart.validarCarrito(reservaId);
        if (cartValidation.status) {
          let response = await this.paymentService.confirmarCompra(
            this.token,
            reservaId
          );
          if (response.status) {
            if (response.instantanea.status) {
              this.dismissCompras();
              this.instantaneas = response.instantanea.data;
              this.isInstantaneas = true;
            } else {
              this.instantaneas = '';
              this.abrirFinalizar();
            }
          } else {
            this.cancelarCompra('');
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
      let errorTitle = 'Error';
      this.openError(errorMessage, errorTitle);
    }
  }
  @ViewChild('purchase') purchase: any;

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
  cancelarCompra(e: any) {
    this.dismissCompras();
    this.compraCancelada = true;
  }

  async abrirFinalizar() {
    this.dismissCompras();
    await this.cart.borrarCarrito();
    this.compraFinalizada = true;
  }

  recargarSaldo(message: any) {
    this.recargaDeSaldoMessage = message;
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }

  async deleteMillonariaTicket(data: any) {
    try {
      let identificador = data.ticket.identificador;
      let fracciones = data.ticket.seleccionados;
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let ticket = this.ticketsMillonaria[identificador].ticket;
      let sorteo = data.sorteo;
      let reservaId = this.lottery.getReservaId();
      if (fracciones.length != 0) {
        let response = await this.lottery.eliminarBoletosDeReserva(
          this.token,
          ticket,
          sorteo,
          fracciones,
          14,
          reservaId
        );
      }
      delete this.ticketsMillonaria[identificador];

      await this.cart.removeFromCart(ticket, 1);
      await this.cart.setCarritoMillonaria(this.ticketsMillonaria);

      await this.getCarritoTickets();
      //this.getTotal();
      //await this.setDescuento(14);
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      let errorTitle = 'Error';
      this.openError(errorMessage, errorTitle);
    }
  }
  async deleteLoteriaTicket(data: any) {
    try {
      let identificador = data.ticket.identificador;
      let fracciones = data.ticket.seleccionados;
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let ticket = this.ticketsLoteria[identificador].ticket;
      let sorteo = data.sorteo;

      let reservaId = this.lottery.getReservaId();
      if (fracciones.length != 0) {
        let response = await this.lottery.eliminarBoletosDeReserva(
          this.token,
          ticket,
          sorteo,
          fracciones,
          1,
          reservaId
        );
      }
      delete this.ticketsLoteria[identificador];

      await this.cart.setCarritoLoteria(this.ticketsLoteria);

      await this.getCarritoTickets();
      this.getTotal();

      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      let errorTitle = 'Error';
      this.openError(errorMessage, errorTitle);
    }
  }
  async deleteLottoTicket(data: any) {
    try {
      let identificador = data.ticket.identificador;
      let fraccion = '';
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let ticket = this.ticketsLotto[identificador].ticket;
      let sorteo = data.sorteo;

      let reservaId = this.lottery.getReservaId();
      let response = await this.lottery.eliminarBoletosDeReserva(
        this.token,
        ticket,
        sorteo,
        fraccion,
        2,
        reservaId
      );

      delete this.ticketsLotto[identificador];

      await this.cart.setCarritoLotto(this.ticketsLotto);

      await this.getCarritoTickets();
      this.getTotal();
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      let errorTitle = 'Error';
      this.openError(errorMessage, errorTitle);
    }
  }

  async deleteLoteriaFraccion(data: any) {
    try {
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let identificador = data.ticket.ticket.identificador;
      let ticket = data.ticket.ticket;
      let sorteo = data.ticket.sorteo;
      let fraccion = data.fraccion;

      let reservaId = this.cart.getReservaId();
      let response = await this.lottery.eliminarBoletosDeReserva(
        this.token,
        ticket,
        sorteo,
        [fraccion],
        1,
        reservaId
      );
      let index = this.ticketsLoteria[
        identificador
      ].ticket.seleccionados.findIndex((x: any) => x == fraccion);
      this.ticketsLoteria[identificador].ticket.seleccionados.splice(index, 1);
      if (this.ticketsLoteria[identificador].ticket.seleccionados.length == 0) {
        delete this.ticketsLoteria[identificador];
      }

      await this.cart.setCarritoLoteria(this.ticketsLoteria);
      await this.getCarritoTickets();
      this.getTotal();
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      let errorTitle = 'Error';
      this.openError(errorMessage, errorTitle);
    }
  }
  async deletePozoTicket(data: any) {
    try {
      let identificador = data.ticket.identificador;
      let fraccion = '';
      this.loadingMessage = 'Removiendo boleto del carrito';
      let ticket = this.ticketsPozo[identificador].ticket;
      let sorteo = data.sorteo;

      if (this.ticketsPozoRevancha[identificador + 1]) {
        await this.deletePozoRevanchaTicket(
          this.ticketsPozoRevancha[identificador + 1]
        );
      }
      this.isLoading = true;
      let reservaId = this.lottery.getReservaId();
      let response = await this.lottery.eliminarBoletosDeReserva(
        this.token,
        ticket,
        sorteo,
        fraccion,
        5,
        reservaId
      );

      delete this.ticketsPozo[identificador];

      await this.cart.setCarritoPozo(this.ticketsPozo);

      await this.getCarritoTickets();
      this.getTotal();
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      let errorTitle = 'Error';
      this.openError(errorMessage, errorTitle);
    }
  }
  async deletePozoRevanchaTicket(data: any) {
    try {
      let identificador = data.ticket.identificador;
      let fraccion = '';
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let ticket = this.ticketsPozoRevancha[identificador].ticket;
      let sorteo = data.sorteo;

      let reservaId = this.lottery.getReservaId();
      let response = await this.lottery.eliminarBoletosDeReserva(
        this.token,
        ticket,
        sorteo,
        fraccion,
        17,
        reservaId
      );

      delete this.ticketsPozoRevancha[identificador];
      await this.cart.removeFromCart(ticket, 17);

      await this.cart.setCarritoPozoRevancha(this.ticketsPozoRevancha);

      await this.getCarritoTickets();
      this.getTotal();
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      let errorTitle = 'Error';
      this.openError(errorMessage, errorTitle);
    }
  }
  async deleteAllTickets() {
    try {
      this.loadingMessage = 'Removiendo boletos del carrito';
      this.isLoading = true;
      let boletosLoteria = Object.keys(this.ticketsLoteria).map((key) => {
        return {
          ticket: this.ticketsLoteria[key].ticket,
          sorteo: this.ticketsLoteria[key].sorteo,
        };
      });
      let boletosLotto = Object.keys(this.ticketsLotto).map((key) => {
        return {
          ticket: this.ticketsLotto[key].ticket,
          sorteo: this.ticketsLotto[key].sorteo,
        };
      });
      let boletosPozo = Object.keys(this.ticketsPozo).map((key) => {
        return {
          ticket: this.ticketsPozo[key].ticket,
          sorteo: this.ticketsPozo[key].sorteo,
        };
      });
      let reservaId = this.lottery.getReservaId();
      /*       await this.lottery.eliminarTodosLosBoletosDeReserva(
        this.token,
        boletosLoteria,
        boletosLotto,
        boletosPozo,
        reservaId
      ); */
      await this.cart.borrarCarrito();
      await this.getCarritoTickets();
      this.getTotal();
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      let errorTitle = 'Error';
      this.openError(errorMessage, errorTitle);
    }
  }

  async getCarritoTickets() {
    let carrito = await this.cart.buscarCarrito();
    this.ticketsLoteria = carrito.loteria;
    this.ticketsLotto = carrito.lotto;
    this.ticketsMillonaria = carrito.millonaria;
    this.ticketsPozo = carrito.pozo;
    this.ticketsPozoRevancha = carrito.pozoRevancha;
  }

  authError() {
    this.openError(
      'Por favor, para poder comprar tu boleto preferido, deberás iniciar sesión en tu cuenta',
      'Aviso'
    );
  }

  isError: boolean = false;
  errorMessage?: string;
  openError(msg: string, title: string) {
    this.errorTitle = title.toUpperCase();
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }
}
