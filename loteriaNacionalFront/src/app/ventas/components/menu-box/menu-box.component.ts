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
  linkBingazo: string = '';
  token?: string;
  lotteryToken?: string;
  usuario?: string;
  errorTitle?: string;
  isLoading?: boolean;
  loadingMessage?: string;
  ticketsPozo: any;
  ticketsLotto: any;
  ticketsLoteria: any;
  ticketsBingazo: any;
  ticketsCarrito: any;
  @Input() miniBox: boolean = false;
  ticketsPozoRevancha: any;
  codigoPromocional: any = [];

  constructor(
    public lottery: VentasService,
    private paymentService: PagosService,
    private cart: CarritoService,

    private actRoute: ActivatedRoute,
    private router: Router
  ) {

    this.loadingMessage = 'Espera mientras procesamos tu información';
    this.isLoading = true;
    this.actRoute.params.subscribe((params) => {
      this.token = params['token'];
      this.isLoading = false;
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
          this.linkBingazo = `/compra_tus_juegos/bingazo/${this.token}`;
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

  saldoInsuficiente: boolean = false;
  recargaDeSaldoMessage?: string;



  total?: string;
  getTotal() {
    this.total = this.cart.getTotal();
  }

  comprar() {
    this.router.navigateByUrl(`/compra_tus_juegos/confirmar_venta/${this.token!}`);
  }


  irARecarga() { }

  idVenta: string;

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

  recargarSaldo(message: any) {
    this.recargaDeSaldoMessage = message;
    this.saldoInsuficiente = true;
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
  async deleteBingazoTicket(data: any) {
    try {
      let identificador = data.ticket.identificador;
      let fraccion = '';
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let ticket = this.ticketsBingazo[identificador].ticket;
      let sorteo = data.sorteo;

      let reservaId = this.lottery.getReservaId();
      let response = await this.lottery.eliminarBoletosDeReserva(
        this.token,
        ticket,
        sorteo,
        fraccion,
        12,
        reservaId
      );

      delete this.ticketsBingazo[identificador];

      await this.cart.setCarritoBingazo(this.ticketsBingazo);

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
    this.ticketsPozo = carrito.pozo;
    this.ticketsPozoRevancha = carrito.pozoRevancha;
    this.ticketsBingazo = carrito.bingazo;
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
