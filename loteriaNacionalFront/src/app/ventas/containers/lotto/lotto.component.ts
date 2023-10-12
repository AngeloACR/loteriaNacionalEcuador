import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {
  sorteo,
  ticketsNacional,
  ticketsAnimales,
  ticketsLotto,
} from '../../interfaces/venta';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { VentaService as LottoService } from '../../../juegos/lotto/services/venta.service';
import { VentasService } from '../../services/ventas.service';
import { PagosService } from '../..//services/pagos.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss'],
})
export class LottoComponent implements OnInit {
  combinacionDeLaSuerte: any = ['', '', '', '', '', ''];
  boleto: string = "";

  page_size: number = 9;
  page_number: number = 1;
  showNumeros: boolean = false;
  sorteoLunes: boolean = false;
  sorteoJueves: boolean = false;
  otrosSorteos: boolean = false;
  sorteo?: sorteo[];
  ticketsDisponibles?: any;
  pageSizeOptions?: [5, 10, 20, 100];
  token?: string;
  usuario?: string;
  ticketsMillonaria: any;
  codigoPromocional: any = [];
  ticketsPozoRevancha: any;

  constructor(
    private lotteryService: VentasService,
    private actRoute: ActivatedRoute,
    private cart: CarritoService,
    private lotto: LottoService,
    private changeDetectorRef: ChangeDetectorRef,
    private paymentService: PagosService,
    private router: Router
  ) {
    this.actRoute.params.subscribe((params) => {
      this.token = params['token'];
    });
  }
  total?: string;
  getTotal() {
    this.changeDetectorRef.detectChanges();

    this.total = this.cart.getTotal();
    this.changeDetectorRef.markForCheck();
  }
  async buscarNumero() {
    try {
      this.loadingMessage = 'Buscando combinaciones disponibles';
      this.isLoading = true;
      this.showNumeros = false;
      let combinacion = this.combinacionDeLaSuerte.map((element: any) => {
        if (element == null || element == undefined || element == '') {
          return '_';
        } else {
          return element;
        }
      });
      let authData = this.lotteryService.getAuthData();

      this.ticketsDisponibles = await this.lotto.obtenerTickets(
        this.sorteoSeleccionado!.sorteo,
        combinacion.join(''),
        '',
        this.tipoSeleccion,
        authData
      );

      this.combinacionDeLaSuerte = ['', '', '', '', '', ''];
      this.showNumeros = true;
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  tipoSeleccion: number = 96;

  sorteoSeleccionado?: sorteo;
  procesaEmitir(sorteo: any) {
    this.sorteoSeleccionado = sorteo;
    this.sorteoLunes = sorteo.dia == "Lunes"
    this.sorteoJueves = sorteo.dia == "Jueves"
    this.otrosSorteos = sorteo.dia == "Martes" || sorteo.dia == "Sábado"
    this.boleto = this.lotteryService.obtenerImagenBoleto(
      2,
      this.sorteoSeleccionado?.sorteo
    );
    this.showNumeros = false;
  }
  async seleccionarTicket(id: any) {
    try {
      this.ticketsDisponibles![id].status =
        !this.ticketsDisponibles![id].status;
      if (!this.ticketsDisponibles![id].status) {
        let identificador = this.ticketsDisponibles![id].identificador;
        let ticketLotto = this.ticketsLotto[identificador];
        await this.deleteLottoTicket(identificador);
      } else {
        let count = (await this.cart.getCount()) + 1;
        if (count <= 1000) {
          await this.pushToSeleccionado(this.ticketsDisponibles[id]);
        } else {
          this.changeDetectorRef.detectChanges();
          this.ticketsDisponibles[id].status = false;
          this.changeDetectorRef.markForCheck();
          let errorMessage =
            'Incluir el boleto excede el límite de compra. Si quieres escoger este boleto, por favor elimina algún otro de tu carrito.';
          this.openError(errorMessage);
        }
      }
      await this.setDescuento(2);
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  ticketsLotto: any = {};

  ticketsPozo: any = {};
  ticketsLoteria: any = {};

  async pushToSeleccionado(ticket: any) {
    try {
      this.loadingMessage = 'Agregando boleto al carrito';
      this.isLoading = true;

      let subtotal = this.sorteoSeleccionado!.precio;
      let aux = {
        ticket,
        sorteo: this.sorteoSeleccionado,
        subtotal,
      };
      let hasBalance = await this.paymentService.hasBalance(
        subtotal,
        this.token
      );
      if (hasBalance) {
        this.ticketsLotto[ticket.identificador] = aux;
        let reservaId = this.lotteryService.getReservaId();
        let response = await this.lotteryService.reservarBoletos(
          this.token!,
          aux,
          2,

          reservaId
        );

        this.lotteryService.setReservaId(response);
        await this.cart.setCarrito(aux, 2);
        await this.cart.setCarritoLotto(this.ticketsLotto);
        await this.getCarritoTickets();
        //this.getTotal();
        this.isLoading = false;
      } else {
        this.isLoading = false;
        let message =
          'Tu saldo es insuficiente para agregar este boleto al carrito';
        this.ticketsDisponibles.find(
          (x: any) => x.identificador === ticket.identificador
        ).status = false;
        this.recargarSaldo(message);
      }
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  irARecarga() { }


  saldoInsuficiente: boolean = false;


  comprar() {
    this.router.navigateByUrl(`/compra_tus_juegos/confirmar_venta/${this.token!}`);
  }


  recargaDeSaldoMessage?: string;
  recargarSaldo(message: string) {
    this.recargaDeSaldoMessage = message;
    this.saldoInsuficiente = true;
  }
  handlerPage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  isLoading?: boolean;
  showComponents: boolean = false;
  loadingMessage?: string;
  descuentos: any;
  async ngOnInit() {
    try {
      this.loadingMessage = 'Cargando los sorteos disponibles';
      this.isLoading = true;

      await this.getCarritoTickets();
      let authData = this.lotteryService.getAuthData();
      this.sorteo = await this.lotto.obtenerSorteo(authData);
      this.descuentos = await this.lotteryService.obtenerDescuentos();
      this.isLoading = false;
      this.showComponents = true;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage =
        'Ha ocurrido un error obteniendo los sorteos disponibles. Por favor, verifique si tiene la sesión iniciada e intente de nuevo.';
      this.openError(errorMessage);
    }
  }

  async setDescuento(tipoLoteria: any) {
    return;
    let descuentos = this.descuentos.filter(
      (element: any) => parseInt(element.tipoLoteria) == tipoLoteria
    );
    for (let index = 0; index < descuentos.length; index++) {
      const element = descuentos[index];
      let conteo = await this.cart.contarBoletos(element.sorteo, tipoLoteria);
      if (conteo >= parseInt(element.cantidad)) {
        await this.cart.calcularDescuento(element);
      } else {
        await this.cart.eliminarDescuento(element, tipoLoteria);
      }
      await this.getCarritoTickets();
    }
    await this.cart.setTotalConDesc();
  }
  obtenerAntojito(antojito: any) {
    return this.lotto.obtenerCaracteristicasDeAntojito(antojito)!.ruta;
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
      let response = await this.lotteryService.eliminarBoletosDeReserva(
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
      //this.getTotal();

      await this.setDescuento(1);
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  async deleteLoteriaTicket(identificador: any) {
    try {
      let data = this.ticketsLoteria[identificador]
      let fracciones = data.ticket.seleccionados;
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let ticket = data.ticket;
      let sorteo = data.sorteo;
      let reservaId = this.lotteryService.getReservaId();
      if (fracciones.length != 0) {
        let response = await this.lotteryService.eliminarBoletosDeReserva(
          this.token,
          ticket,
          sorteo,
          fracciones,
          1,
          reservaId
        );
      }
      delete this.ticketsLoteria[identificador];

      await this.cart.removeFromCart(ticket, 1);
      await this.cart.setCarritoLoteria(this.ticketsLoteria);

      await this.getCarritoTickets();
      //this.getTotal();
      await this.setDescuento(1);
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  async deleteMillonariaTicket(identificador: any) {
    try {
      let data = this.ticketsMillonaria[identificador]
      let fracciones = data.ticket.seleccionados;
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let ticket = this.ticketsMillonaria[identificador].ticket;
      let sorteo = data.sorteo;
      let reservaId = this.lotteryService.getReservaId();
      if (fracciones.length != 0) {
        let response = await this.lotteryService.eliminarBoletosDeReserva(
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
      await this.setDescuento(14);
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  async deleteLottoTicket(identificador: any) {
    try {
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let fraccion = '';

      let ticket = this.ticketsLotto[identificador].ticket;
      let sorteo = this.ticketsLotto[identificador].sorteo;
      let reservaId = this.lotteryService.getReservaId();

      let response = await this.lotteryService.eliminarBoletosDeReserva(
        this.token,
        ticket,
        sorteo,
        fraccion,
        2,
        reservaId
      );

      delete this.ticketsLotto[identificador];
      await this.cart.removeFromCart(ticket, 2);
      await this.cart.setCarritoLotto(this.ticketsLotto);
      if (this.ticketsDisponibles && this.ticketsDisponibles.length) {
        let deletedIndex = this.ticketsDisponibles.findIndex(
          (x: any) => x.identificador === identificador
        );
        if (deletedIndex != -1)
          this.ticketsDisponibles[deletedIndex].status = false;
      }
      await this.getCarritoTickets();
      //this.getTotal();
      await this.setDescuento(2);
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  async deletePozoTicket(identificador: any) {
    try {
      let data = this.ticketsPozo[identificador]
      let fraccion = '';
      this.loadingMessage = 'Removiendo boleto del carrito';
      let ticket = this.ticketsPozo[identificador].ticket;
      let sorteo = data.sorteo;

      if (this.ticketsPozoRevancha[identificador + 1]) {
        await this.deletePozoRevanchaTicket(
          identificador + 1
        );
      }
      this.isLoading = true;
      let reservaId = this.lotteryService.getReservaId();
      let response = await this.lotteryService.eliminarBoletosDeReserva(
        this.token,
        ticket,
        sorteo,
        fraccion,
        5,
        reservaId
      );

      delete this.ticketsPozo[identificador];

      await this.cart.removeFromCart(ticket, 5);
      await this.cart.setCarritoPozo(this.ticketsPozo);

      await this.getCarritoTickets();

      //this.getTotal();
      await this.setDescuento(5);
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  ticketsBingazo: any = {}
  async deleteBingazoTicket(identificador: any) {
    try {
      let data = this.ticketsBingazo[identificador]
      let fraccion = '';
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let ticket = this.ticketsBingazo[identificador].ticket;
      let sorteo = data.sorteo;

      let reservaId = this.lotteryService.getReservaId();
      let response = await this.lotteryService.eliminarBoletosDeReserva(
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
      this.openError(errorMessage);
    }
  }
  async deletePozoRevanchaTicket(identificador: any) {
    try {
      let data = this.ticketsPozoRevancha[identificador];
      let fraccion = '';
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let ticket = this.ticketsPozoRevancha[identificador].ticket;
      let sorteo = data.sorteo;

      let reservaId = this.lotteryService.getReservaId();
      let response = await this.lotteryService.eliminarBoletosDeReserva(
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
      this.openError(errorMessage);
    }
  }
  async deleteAllTickets() {
    try {
      this.loadingMessage = 'Removiendo boletos del carrito';
      this.isLoading = true;
      Object.keys(this.ticketsLotto).forEach((key) => {
        if (this.ticketsDisponibles && this.ticketsDisponibles.length != 0) {
          let deletedIndex = this.ticketsDisponibles.findIndex(
            (x: any) => x.identificador == key
          );
          if (deletedIndex != -1)
            this.ticketsDisponibles[deletedIndex].status = false;
        }
      });
      await this.cart.borrarCarrito();
      await this.getCarritoTickets();
      //this.getTotal();
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  async getCarritoTickets() {
    let carrito = await this.cart.buscarCarrito();
    this.ticketsLoteria = carrito.loteria;
    this.ticketsLotto = carrito.lotto;
    this.ticketsMillonaria = carrito.millonaria;
    this.ticketsPozo = carrito.pozo;
    this.ticketsBingazo = carrito.bingazo;
    this.ticketsPozoRevancha = carrito.pozoRevancha;
  }
  isError: boolean = false;
  errorMessage?: string;
  openError(msg: string) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }
  isValidationError: boolean = false;
  validationErrorMessage?: string;
  openValidationError(msg: string) {
    this.validationErrorMessage = msg;
    this.isValidationError = true;
  }

  closeValidationError() {
    this.isValidationError = false;
    this.validationErrorMessage = '';
    window.location.reload();
  }
}
