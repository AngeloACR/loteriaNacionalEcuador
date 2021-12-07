import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { PageEvent } from "@angular/material";
import {
  sorteo,
  ticketsNacional,
  ticketsAnimales,
  ticketsLotto,
} from "../../interfaces/lottery.interface";
import { LotteryService } from "../../services/lottery.service";
import { PaymentService } from "../../../payment/services/payment.service";
import { ShoppingCartService } from "../../../payment/services/shopping-cart.service";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-lotto",
  templateUrl: "./lotto.component.html",
  styleUrls: ["./lotto.component.scss"],
})
export class LottoComponent implements OnInit {
  sorteo: sorteo[];
  combinacionDeLaSuerte: any = ["", "", "", "", "", ""];

  ticketsDisponibles: ticketsLotto[];

  page_size: number = 6;
  page_number: number = 1;
  pageSizeOptions: [5, 10, 20, 100];
  showNumeros: boolean = false;
  token: string;
  usuario: string;

  constructor(
    private lotteryService: LotteryService,
    private actRoute: ActivatedRoute,
    private cart: ShoppingCartService,
    private changeDetectorRef: ChangeDetectorRef,
    private paymentService: PaymentService,
    private router: Router
  ) {
    this.actRoute.params.subscribe((params) => {
      this.token = params["token"];
    });
  }
  total: string;
  getTotal() {
    this.changeDetectorRef.detectChanges();

    this.total = this.cart.getTotal();
    this.changeDetectorRef.markForCheck();
  }
  async buscarNumero() {
    try {
      this.loadingMessage = "Buscando combinaciones disponibles";
      this.isLoading = true;
      this.showNumeros = false;
      let combinacion = this.combinacionDeLaSuerte.map((element) => {
        if (element == null || element == undefined || element == "") {
          return "_";
        } else {
          return element;
        }
      });
      this.ticketsDisponibles = await this.lotteryService.obtenerTickets(
        this.token,
        2,
        this.sorteoSeleccionado.sorteo,
        combinacion.join(""),
        "",
        this.tipoSeleccion
      );

      this.combinacionDeLaSuerte = ["", "", "", "", "", ""];
      this.showNumeros = true;
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  tipoSeleccion: number = 96;

  sorteoSeleccionado: sorteo;
  procesaEmitir(sorteo) {
    this.sorteoSeleccionado = sorteo;
    this.showNumeros = false;
  }
  async seleccionarTicket(id: string) {
    try {
      this.ticketsDisponibles[id].status = !this.ticketsDisponibles[id].status;
      if (!this.ticketsDisponibles[id].status) {
        let identificador = this.ticketsDisponibles[id].identificador;
        let ticketLotto = this.ticketsLotto[identificador];
        await this.deleteLottoTicket(ticketLotto);
      } else {
        let count = (await this.cart.getCount()) + 1;
        if (count <= 1000) {
          await this.pushToSeleccionado(this.ticketsDisponibles[id]);
        } else {
          this.changeDetectorRef.detectChanges();
          this.ticketsDisponibles[id].status = false;
          this.changeDetectorRef.markForCheck();
          let errorMessage =
            "Incluir el boleto excede el límite de compra. Si quieres escoger este boleto, por favor elimina algún otro de tu carrito.";
          this.openError(errorMessage);
        }
      }
      //await this.setDescuento(2);
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  ticketsLotto: any = {};

  ticketsPozo: any = {};
  ticketsLoteria: any = {};

  async pushToSeleccionado(ticket) {
    try {
      this.loadingMessage = "Agregando boleto al carrito";
      this.isLoading = true;

      let subtotal = this.sorteoSeleccionado.precio;
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
          this.token,
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
          "Tu saldo es insuficiente para agregar este boleto al carrito";
        this.ticketsDisponibles.find(
          (x) => x.identificador === ticket.identificador
        ).status = false;
        this.recargarSaldo(message);
      }
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  irARecarga() {}

  abrirResumen() {
    this.router.navigate([`compra_tus_juegos/resumen/${this.token}`]);
  }

  confirmacionDeCompra: boolean = false;
  compraFinalizada: boolean = false;
  saldoInsuficiente: boolean = false;
  compraCancelada: boolean = false;

  cancelMessage: string = "";

  dismissCompras() {
    this.confirmacionDeCompra = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
  }
  volver() {
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }
  detalleCompra: any;
  comprar() {
    this.dismissCompras();

    let loteriaAux = this.ticketsLoteria;
    let loteria = [];
    for (let id in loteriaAux) {
      let aux = {};
      aux["combinacion1"] = loteriaAux[id].ticket.combinacion;
      aux["fracciones"] = loteriaAux[id].ticket.seleccionados;
      aux["subtotal"] = parseFloat(loteriaAux[id].subtotal).toFixed(2);
      aux["subtotalConDesc"] = parseFloat(loteriaAux[id].subtotalConDesc).toFixed(2);
      aux["tieneDescuento"] = loteriaAux[id].tieneDescuento;

      aux["fecha"] = loteriaAux[id].sorteo.fecha;
      aux["sorteo"] = loteriaAux[id].sorteo.sorteo;
      loteria.push(aux);
    }
    let lottoAux = this.ticketsLotto;
    let lotto = [];
    for (let id in lottoAux) {
      let aux = {};
      aux["combinacion1"] = lottoAux[id].ticket.combinacion1;
      aux["combinacion2"] = lottoAux[id].ticket.combinacion2;
      aux["combinacion3"] = lottoAux[id].ticket.combinacion3;
      aux["combinacion4"] = lottoAux[id].ticket.combinacion4;
      aux["sorteo"] = lottoAux[id].sorteo.sorteo;
      aux["subtotal"] = parseFloat(lottoAux[id].subtotal).toFixed(2);
      aux["subtotalConDesc"] = parseFloat(lottoAux[id].subtotalConDesc).toFixed(2);
      aux["tieneDescuento"] = lottoAux[id].tieneDescuento;
      aux["fecha"] = lottoAux[id].sorteo.fecha;
      lotto.push(aux);
    }
    let pozoAux = this.ticketsPozo;
    let pozo = [];
    for (let id in pozoAux) {
      let aux = {};
      aux["combinacion1"] = pozoAux[id].ticket.combinacion1;
      aux["combinacion2"] = pozoAux[id].ticket.combinacion2;
      aux["mascota"] = pozoAux[id].ticket.mascota;
      aux["sorteo"] = pozoAux[id].sorteo.sorteo;
      aux["subtotal"] = parseFloat(pozoAux[id].subtotal).toFixed(2);
      aux["subtotalConDesc"] = parseFloat(pozoAux[id].subtotalConDesc).toFixed(2);
      aux["tieneDescuento"] = pozoAux[id].tieneDescuento;
      aux["fecha"] = pozoAux[id].sorteo.fecha;
      pozo.push(aux);
    }
    let amount = parseFloat(this.paymentService.getTotal()).toFixed(2);
    let amountConDesc = parseFloat(this.cart.getTotalConDesc()).toFixed(2);

    this.detalleCompra = {
      loteria,
      pozo,
      lotto,
      amount,
      amountConDesc
    };

    this.confirmacionDeCompra = true;
  }
  finalizarCompra() {
    this.paymentService.finalizarCompra();

    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  instantaneas: any;
  isInstantaneas: boolean = false;
  async confirmarCompra() {
    try {
      this.isLoading = true;
      this.loadingMessage = "Espera mientras procesamos tu compra";
      let hasBalance = await this.paymentService.hasBalance(0, this.token);

      if (hasBalance) {
        let reservaId = this.lotteryService.getReservaId();
        let cartValidation = await this.cart.validarCarrito(reservaId);
        if (cartValidation) {
          let response = await this.paymentService.confirmarCompra(
            this.token,
            reservaId
          );
          this.isLoading = false;
          if (response.status) {
            if (response.instantanea.status) {
              this.dismissCompras();
              this.instantaneas = response.instantanea.data;
              this.isInstantaneas = true;
            } else {
              this.instantaneas = "";
              this.abrirFinalizar();
            }
          } else {
            this.cancelarCompra();
          }
        }
        this.isLoading = false;
      } else {
        this.isLoading = false;
        let message = "Tu saldo es insuficiente para realizar la compra";
        this.recargarSaldo(message);
      }
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  async abrirFinalizar() {
    this.dismissCompras();
    await this.cart.borrarCarrito();
    this.compraFinalizada = true;
  }
  cancelarCompra() {
    this.dismissCompras();
    this.compraCancelada = true;
  }

  recargaDeSaldoMessage: string;
  recargarSaldo(message) {
    this.recargaDeSaldoMessage = message;
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }
  handlerPage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  isLoading: boolean;
  showComponents: boolean = false;
  loadingMessage: string;
  descuentos: any;
  async ngOnInit() {
    try {
      this.loadingMessage = "Cargando los sorteos disponibles";
      this.isLoading = true;
      await this.getCarritoTickets();
      //this.getTotal();
      this.sorteo = await this.lotteryService.obtenerSorteo(this.token, 2);
      //this.descuentos = await this.lotteryService.obtenerDescuentos()
      this.isLoading = false;
      this.showComponents = true;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage =
        "Ha ocurrido un error obteniendo los sorteos disponibles. Por favor, verifique si tiene la sesión iniciada e intente de nuevo.";
      this.openError(errorMessage);
    }
  }

  async setDescuento(tipoLoteria){
    let descuentos = this.descuentos.filter(
      (element: any) => parseInt(element.tipoLoteria) == tipoLoteria
    );
    for (let index = 0; index < descuentos.length; index++) {
      const element = descuentos[index];
      let conteo = await this.cart.contarBoletos(element.sorteo, tipoLoteria);
      if(conteo >= parseInt(element.cantidad)){
        await this.cart.calcularDescuento(element);
      }else {
        await this.cart.eliminarDescuento(element, tipoLoteria)  
      }
      await this.getCarritoTickets();
    }
    await this.cart.setTotalConDesc();

  }
  obtenerAntojito(antojito) {
    return this.lotteryService.obtenerCaracteristicasDeAntojito(antojito).ruta;
  }

  async deleteLoteriaFraccion(data) {
    try {
      this.loadingMessage = "Removiendo boleto del carrito";
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
      ].ticket.seleccionados.findIndex((x) => x == fraccion);
      this.ticketsLoteria[identificador].ticket.seleccionados.splice(index, 1);
      if (this.ticketsLoteria[identificador].ticket.seleccionados.length == 0) {
        delete this.ticketsLoteria[identificador];
      }

      await this.cart.setCarritoLoteria(this.ticketsLoteria);
      await this.getCarritoTickets();
      //this.getTotal();

      //await this.setDescuento(1);
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  async deleteLoteriaTicket(data) {
    try {
      let identificador = data.ticket.identificador;
      let fracciones = data.ticket.seleccionados;
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let ticket = this.ticketsLoteria[identificador].ticket;
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
      //await this.setDescuento(1);
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  async deleteLottoTicket(data) {
    try {
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let identificador = data.ticket.identificador;
      let fraccion = "";

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
          (x) => x.identificador === identificador
        );
        if (deletedIndex != -1)
          this.ticketsDisponibles[deletedIndex].status = false;
      }
      await this.getCarritoTickets();
      //this.getTotal();
      //await this.setDescuento(2);
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  async deletePozoTicket(data) {
    try {
      let identificador = data.ticket.identificador;
      let fraccion = "";
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let ticket = this.ticketsPozo[identificador].ticket;
      let sorteo = data.sorteo;

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
      //await this.setDescuento(5);
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  async deleteAllTickets() {
    try {
      this.loadingMessage = "Removiendo boletos del carrito";
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
      let reservaId = this.lotteryService.getReservaId();
      await this.lotteryService.eliminarTodosLosBoletosDeReserva(
        this.token,
        boletosLoteria,
        boletosLotto,
        boletosPozo,
        reservaId
      );
      Object.keys(this.ticketsLotto).forEach((key) => {
        if (this.ticketsDisponibles && this.ticketsDisponibles.length != 0) {
          let deletedIndex = this.ticketsDisponibles.findIndex(
            (x) => x.identificador == key
          );
          if (deletedIndex != -1)
            this.ticketsDisponibles[deletedIndex].status = false;
        }
      });
      await this.cart.borrarCarrito();
      await this.getCarritoTickets();
      //this.getTotal();
      this.isLoading = false;
    } catch (e) {
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
    this.ticketsPozo = carrito.pozo;
  }

  isError: boolean = false;
  errorMessage: string;
  openError(msg) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }
}
