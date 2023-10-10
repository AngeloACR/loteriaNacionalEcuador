import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {
  sorteo,
} from '../../interfaces/venta';
import { Router, ActivatedRoute } from '@angular/router';

import { VentaService as BingazoService } from '../../../juegos/bingazo/services/venta.service';
import { VentasService } from '../../services/ventas.service';
import { PagosService } from '../../services/pagos.service';
import { CarritoService } from '../../services/carrito.service';
@Component({
  selector: 'app-bingazo',
  templateUrl: './bingazo.component.html',
  styleUrls: ['./bingazo.component.scss']
})
export class BingazoComponent implements OnInit {
  combinacionDeLaSuerte: string[] = ['', '', '', '', '', ''];

  frutasTabs: any[] = [];
  revanchas?: boolean[];
  @ViewChild('figureSelector') figureSelector: any;
  buscarCartones: boolean = true;

  page_size: number = 12;
  page_number: number = 1;
  showNumeros: boolean = false;
  sorteo?: sorteo[];
  seleccionFrutas: any[];
  ticketsDisponibles?: any;
  ticketsDisponiblesRevancha?: any;
  pageSizeOptions?: [5, 10, 20, 100];
  token?: string;
  usuario?: string;
  ticketsMillonaria: any = {};
  ticketsPozoRevancha: any = {};
  ticketsPozo: any = {};
  ticketsBingazo: any = {};

  codigoPromocional: any = [];
  constructor(
    private ventas: VentasService,
    private actRoute: ActivatedRoute,
    private paymentService: PagosService,
    private cart: CarritoService,
    private bingazo: BingazoService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.actRoute.params.subscribe((params) => {
      this.token = params['token'];
    });
  }
  total?: string;
  agregar(fruta: any, i: number) {
    if (this.seleccionFrutas![i].status === false) {
      this.seleccionFrutas![i].status = true;
      this.frutasTabs.push(this.seleccionFrutas![i]);
    } else {
      this.seleccionFrutas![i].status = false;
      this.frutasTabs = this.frutasTabs.filter((element) => {
        return element.nombre !== fruta.nombre;
      });
    }
    localStorage.setItem(
      'frutasSeleccionadas',
      JSON.stringify(this.seleccionFrutas)
    );
    localStorage.setItem('frutasTabs', JSON.stringify(this.frutasTabs));
  }
  async seleccionarTicket(id: any) {
    try {
      this.isLoading = true;
      this.changeDetectorRef.detectChanges();
      this.ticketsDisponibles![id].status =
        !this.ticketsDisponibles![id].status;
      this.changeDetectorRef.markForCheck();
      if (!this.ticketsDisponibles![id].status) {
        let identificador = this.ticketsDisponibles![id].identificador;
        let ticketBingazo = this.ticketsBingazo[identificador];
        this.isLoading = false;
        await this.deleteBingazoTicket(ticketBingazo.identificador);
      } else {
        let count = (await this.cart.getCount()) + 1;
        if (count <= 1000) {
          this.isLoading = false;
          await this.pushToSeleccionado(this.ticketsDisponibles![id], 12);
        } else {
          this.changeDetectorRef.detectChanges();
          this.ticketsDisponibles![id].status = false;
          this.changeDetectorRef.markForCheck();
          let errorMessage =
            'Incluir el boleto excede el límite de compra. Si quieres escoger este boleto, por favor elimina algún otro de tu carrito.';
          this.openError(errorMessage);
          this.isLoading = false;
        }
      }
      await this.setDescuento(12);
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  async pushToSeleccionado(ticket: any, tipoLoteria: number) {
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
        this.ticketsBingazo[ticket.identificador] = aux;
        let reservaId = this.ventas.getReservaId();
        let response = await this.ventas.reservarBoletos(
          this.token!,
          aux,
          tipoLoteria,
          reservaId
        );

        this.ventas.setReservaId(response);
        await this.cart.setCarrito(aux, tipoLoteria);
        await this.cart.setCarritoBingazo(this.ticketsBingazo);
        await this.getCarritoTickets();
        
        this.isLoading = false;
      } else {
        this.isLoading = false;
        let message =
          'Tu saldo es insuficiente para agregar este boleto al carrito';
        this.ticketsDisponibles!.find(
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

  handlerPage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }


  async buscarNumero() {
    try {
      this.loadingMessage = 'Buscando combinaciones disponibles';
      this.isLoading = true;
      this.showNumeros = false;
      let combinacion: any = [];
      let combinacionFigura = this.frutasTabs.map((fruta) => {
        return fruta.identificador;
      });
      combinacionFigura.sort(this.ordenaCombinacion);
      let authData = this.ventas.getAuthData();
      this.ticketsDisponibles = await this.bingazo.obtenerTickets(
        this.sorteoSeleccionado!.sorteo,
        combinacion.join(''),
        combinacionFigura.join(''),
        this.tipoSeleccion,
        authData
      );
      this.showNumeros = true;
      this.figureSelector.close();
      this.buscarCartones = false;
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  openSelector() {
    this.figureSelector.open();
    this.buscarCartones = true;
  }

  ordenaCombinacion(a: any, b: any) {
    return a - b;
  }
  tipoSeleccion: number = 96;
  boleto: string = ""
  sorteoSeleccionado?: sorteo;
  procesaEmitir(sorteo: any) {
    this.sorteoSeleccionado = sorteo;

    this.boleto = this.ventas.obtenerImagenBoleto(
      12,
      this.sorteoSeleccionado?.sorteo
    );
    this.openSelector();

    this.showNumeros = false;
  }
  isLoading?: boolean;
  showComponents: boolean = false;
  loadingMessage?: string;

  obtenerFruta(fruta: any) {
    return this.bingazo.obtenerCaracteristicasDeFruta(fruta)!.ruta;
  }

  confirmacionDeCompra: boolean = false;
  compraFinalizada: boolean = false;
  saldoInsuficiente: boolean = false;
  compraCancelada: boolean = false;

  cancelMessage: string = '';


  comprar() {
    this.router.navigateByUrl(`/compra_tus_juegos/confirmar_venta/${this.token!}`);
  }

  irARecarga() { }

  recargaDeSaldoMessage?: string;
  recargarSaldo(message: any) {
    this.recargaDeSaldoMessage = message;
    this.saldoInsuficiente = true;
  }
  ticketsLoteria: any = {};
  ticketsLotto: any = {};
  descuentos: any;
  async ngOnInit() {
    try {
      this.isLoading = true;
      await this.getCarritoTickets();

      this.loadingMessage = 'Cargando los sorteos disponibles';
      this.seleccionFrutas = JSON.parse(
        localStorage.getItem('frutasSeleccionadas')!
      );
      this.frutasTabs = JSON.parse(localStorage.getItem('frutasTabs')!);
      this.seleccionFrutas!.forEach((element) => {
        this.frutasTabs.forEach((elemento: any) => {
          if (elemento.nombre === element.nombre) {
            element.status = elemento.status;
          }
        });
      });
      localStorage.setItem(
        'frutasSeleccionadas',
        JSON.stringify(this.seleccionFrutas)
      );
      let authData = this.ventas.getAuthData();
      this.sorteo = await this.bingazo.obtenerSorteo(authData);
      this.descuentos = await this.ventas.obtenerDescuentos();
      console.log(this.seleccionFrutas)
      this.showComponents = true;
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  trackBy(item: any) {
    console.log(item);
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
  async deleteLoteriaTicket(identificador: any) {
    try {
      let data = this.ticketsLoteria[identificador]
      let fracciones = data.ticket.seleccionados;
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let ticket = this.ticketsLoteria[identificador].ticket;
      let sorteo = data.sorteo;

      let reservaId = this.ventas.getReservaId();
      if (fracciones.length != 0) {
        let response = await this.ventas.eliminarBoletosDeReserva(
          this.token,
          ticket,
          sorteo,
          fracciones,
          1,
          reservaId
        );
      }
      delete this.ticketsLoteria[identificador];

      await this.cart.removeFromCart(ticket, 5);
      await this.cart.setCarritoLoteria(this.ticketsLoteria);

      await this.getCarritoTickets();
      
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
      let data = this.ticketsMillonaria[identificador];
      let fracciones = data.ticket.seleccionados;
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let ticket = this.ticketsMillonaria[identificador].ticket;
      let sorteo = data.sorteo;
      let reservaId = this.ventas.getReservaId();
      if (fracciones.length != 0) {
        let response = await this.ventas.eliminarBoletosDeReserva(
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
      let data = this.ticketsLotto[identificador]
      let fraccion = '';
      this.loadingMessage = 'Removiendo boleto del carrito';
      this.isLoading = true;
      let ticket = this.ticketsLotto[identificador].ticket;
      let sorteo = data.sorteo;

      let reservaId = this.ventas.getReservaId();
      let response = await this.ventas.eliminarBoletosDeReserva(
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
      await this.getCarritoTickets();
      
      await this.setDescuento(2);
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
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
      let response = await this.ventas.eliminarBoletosDeReserva(
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

      await this.cart.removeFromCart(ticket, 1);
      await this.cart.setCarritoLoteria(this.ticketsLoteria);
      await this.getCarritoTickets();
      
      await this.setDescuento(1);
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  async deleteBingazoTicket(identificador: any) {
    try {
      this.loadingMessage = 'Removiendo boleto del carrito';
      identificador
      let fraccion = '';
      let ticket = this.ticketsBingazo[identificador].ticket;
      let sorteo = this.ticketsBingazo[identificador].sorteo;

      this.isLoading = true;
      let reservaId = this.ventas.getReservaId();
      let response = await this.ventas.eliminarBoletosDeReserva(
        this.token,
        ticket,
        sorteo,
        fraccion,
        12,
        reservaId
      );

      delete this.ticketsBingazo[identificador];

      await this.cart.removeFromCart(ticket, 5);
      await this.cart.setCarritoBingazo(this.ticketsPozo);
      if (this.ticketsDisponibles && this.ticketsDisponibles.length) {
        let deletedIndex = this.ticketsDisponibles.findIndex(
          (x: any) => x.identificador === identificador
        );
        if (deletedIndex != -1)
          this.ticketsDisponibles[deletedIndex].status = false;
      }
      await this.getCarritoTickets();
      
      await this.setDescuento(5);

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
      this.loadingMessage = 'Removiendo boleto del carrito';
      let data = this.ticketsPozo[identificador];
      let fraccion = '';
      let ticket = this.ticketsPozo[identificador].ticket;
      let sorteo = data.sorteo;
      if (this.ticketsPozoRevancha[identificador + 1]) {
        await this.deletePozoRevanchaTicket(
          identificador + 1
        );
      }
      this.isLoading = true;
      let reservaId = this.cart.getReservaId();
      let response = await this.ventas.eliminarBoletosDeReserva(
        this.token!,
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
      

      await this.setDescuento(5);
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
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

      let reservaId = this.ventas.getReservaId();
      let response = await this.ventas.eliminarBoletosDeReserva(
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

      Object.keys(this.ticketsBingazo).forEach((key) => {
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
  openError(msg: any) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
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
