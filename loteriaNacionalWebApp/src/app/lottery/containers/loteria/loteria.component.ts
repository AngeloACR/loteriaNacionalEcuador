import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { PageEvent } from "@angular/material";
import {
  sorteo,
  ticketsNacional,
  ticketsAnimales,
  ticketsLotto,
} from "../../interfaces/lottery.interface";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

import { LotteryService } from "../../services/lottery.service";
import { PaymentService } from "../../../payment/services/payment.service";
import { ShoppingCartService } from "../../../payment/services/shopping-cart.service";
@Component({
  selector: "app-loteria",
  templateUrl: "./loteria.component.html",
  styleUrls: ["./loteria.component.scss"],
})
export class LoteriaComponent implements OnInit {
  tickets: any;

  sorteo: sorteo[];
  ticketsDisponibles: ticketsNacional[];
  ticketsPozo: any;
  ticketsLotto: any;
  ticketsLoteria: any;
  ticketsCarrito: any;
  descuentos: any;
  combinacionDeLaSuerte: any = ["", "", "", "", ""];
  allFractions: boolean[];
  mostrar: boolean = false;
  fondo: boolean = false;
  tipoSeleccion: number = 96;
  fracciones: number;
  showNumeros: boolean = false;
  page_size: number = 4;
  page_number: number = 1;
  pageSizeOptions: [5, 10, 20, 100];
  token: string;
  usuario: string;

  constructor(
    private lotteryService: LotteryService,
    private paymentService: PaymentService,
    private cart: ShoppingCartService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.actRoute.params.subscribe((params) => {
      this.token = params["token"];
    });
  }
  async ngOnInit() {
    try {
      this.loadingMessage = "Cargando los sorteos disponibles";
      this.isLoading = true;
      await this.getCarritoTickets();
      this.sorteo = await this.lotteryService.obtenerSorteo(this.token, 1);
      this.descuentos = await this.lotteryService.obtenerDescuentos()
      this.isLoading = false;
      this.showComponents = true;
    } catch (e) {
      console.log(e.message);
      this.isLoading = false;
      this.openError(e.message);
    }
  }

  async getCarritoTickets() {
    let carrito = await this.cart.buscarCarrito();
    this.ticketsLoteria = carrito.loteria;
    this.ticketsLotto = carrito.lotto;
    this.ticketsPozo = carrito.pozo;
  }

  sorteoSeleccionado: sorteo;
  procesaEmitir(sorteo) {
    this.sorteoSeleccionado = sorteo;
    this.showNumeros = false;
  }

  async buscarNumero() {
    try {
      this.loadingMessage = "Buscando combinaciones disponibles";
      this.isLoading = true;

      this.showNumeros = false;

      let combinacion = this.combinacionDeLaSuerte.map((element) => {
        element = element.toString();
        if (element == null || element == undefined || element == "") {
          return "_";
        } else {
          return element;
        }
      });

      this.ticketsDisponibles = await this.lotteryService.obtenerTickets(
        this.token,
        1,
        this.sorteoSeleccionado.sorteo,
        combinacion.join(""),
        "",
        this.tipoSeleccion
      );

      this.allFractions = [];
      this.ticketsDisponibles.forEach((ticket) => {
        this.allFractions.push(false);
      });

      this.combinacionDeLaSuerte = ["", "", "", "", ""];
      this.showNumeros = true;
      this.isLoading = false;
    } catch (e) {
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

  async fraccionSeleccionada(idTicket: number, fraccion: string) {
    try {
      this.changeDetectorRef.detectChanges();
      if (this.allFractions[idTicket]) this.allFractions[idTicket] = false;
      this.changeDetectorRef.markForCheck();
      let index =
        this.ticketsDisponibles[idTicket].seleccionados.indexOf(fraccion);

      if (index != -1) {
        let identificador = this.ticketsDisponibles[idTicket].identificador;
        let ticketLoteria = this.ticketsLoteria[identificador];
        let aux = {
          ticket: ticketLoteria,
          fraccion,
        };
        await this.deleteLoteriaFraccion(aux);
        this.changeDetectorRef.detectChanges();
        //this.ticketsDisponibles[idTicket].seleccionados.pop();
        this.ticketsDisponibles[idTicket].seleccionados.splice(index, 1);
        this.changeDetectorRef.markForCheck();
      } else {
        let count = (await this.cart.getCount()) + 1;
        this.changeDetectorRef.detectChanges();
        this.ticketsDisponibles[idTicket].seleccionados.push(fraccion);
        this.changeDetectorRef.markForCheck();
        if (count <= 1000) {
          await this.pushToSeleccionado(this.ticketsDisponibles[idTicket], [
            fraccion,
          ]);
        } else {
          this.changeDetectorRef.detectChanges();
          this.ticketsDisponibles[idTicket].seleccionados.pop();
          this.changeDetectorRef.markForCheck();

          let errorMessage =
            "Incluir el boleto excede el límite de compra. Si quieres escoger este boleto, por favor elimina algún otro de tu carrito.";
          this.openError(errorMessage);
        }
      }
      //await this.setDescuento(1);
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
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

  async seleccionarTodo(id: number) {
    try {
      this.changeDetectorRef.detectChanges();
      this.allFractions[id] = !this.allFractions[id];
      this.changeDetectorRef.markForCheck();
      //      let fracciones = [...this.ticketsDisponibles[id].fraccionesDisponibles];
      let fracciones = [
        ...this.ticketsDisponibles[id].fraccionesDisponibles.filter(
          (x) => !this.ticketsDisponibles[id].seleccionados.includes(x)
        ),
      ];
      if (this.allFractions[id]) {
        let count =
          (await this.cart.getCount()) +
          (fracciones.length -
            this.ticketsDisponibles[id].seleccionados.length);
        if (count <= 1000) {
          this.ticketsDisponibles[id].seleccionados =
            this.ticketsDisponibles[id].seleccionados.concat(fracciones);
          await this.pushToSeleccionado(
            this.ticketsDisponibles[id],
            fracciones
          );
        } else {
          this.changeDetectorRef.detectChanges();
          this.allFractions[id] = false;
          this.changeDetectorRef.markForCheck();
          let errorMessage =
            "Incluir los boletos excede el límite de compra. Si quieres escoger estos boletos, por favor elimina algunos de tu carrito.";
          this.openError(errorMessage);
        }
      } else {
        let identificador = this.ticketsDisponibles[id].identificador;
        await this.deleteLoteriaTicket(this.ticketsLoteria[identificador]);
        this.ticketsDisponibles[id].seleccionados = [];
      }      //await this.setDescuento(1);


    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  async pushToSeleccionado(ticket, fracciones) {
    try {
      this.loadingMessage = "Agregando boleto al carrito";
      this.isLoading = true;

      await this.getCarritoTickets();
      let subtotalTest =
        parseFloat(this.sorteoSeleccionado.precio) * fracciones.length;
      let subtotal =
        parseFloat(this.sorteoSeleccionado.precio) *
        ticket.seleccionados.length;
      let aux = {
        ticket,
        fracciones,
        sorteo: this.sorteoSeleccionado,
        subtotal,
      };
      let hasBalance = await this.paymentService.hasBalance(
        subtotalTest,
        this.token
      );
      if (hasBalance) {
        this.ticketsLoteria[ticket.identificador] = aux;
        let reservaId = this.cart.getReservaId();
        let response = await this.lotteryService.reservarBoletos(
          this.token,
          aux,
          1,
          reservaId
        );
        this.cart.setReservaId(response);

        await this.cart.setCarrito(aux, 1);
        await this.cart.setCarritoLoteria(this.ticketsLoteria);
        //this.getTotal();

        this.isLoading = false;
      } else {
        this.isLoading = false;
        let message =
          "Tu saldo es insuficiente para agregar este boleto al carrito";
        var idTicket = this.ticketsDisponibles.findIndex(
          (p) => p.identificador == ticket.identificador
        );
        this.ticketsDisponibles[idTicket].seleccionados =
          this.ticketsDisponibles[idTicket].seleccionados.filter(
            (el) => !fracciones.includes(el)
          );
        this.allFractions[idTicket] = false;

        this.recargarSaldo(message);
      }
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  isSelected(idTicket: number, idFraccion: string) {
    let ticket = this.ticketsDisponibles[idTicket];
    if (ticket.seleccionados.indexOf(idFraccion) != -1) {
      return true;
    } else {
      return false;
    }
  }

  confirmacionDeCompra: boolean = false;
  compraFinalizada: boolean = false;
  saldoInsuficiente: boolean = false;
  compraCancelada: boolean = false;
  instantaneas: any;
  isInstantaneas: boolean = false;
  cancelMessage: string = "";
  detalleCompra: any;
  recargaDeSaldoMessage: string;

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

  total: string;
  getTotal() {
    this.changeDetectorRef.detectChanges();

    this.total = this.cart.getTotal();
    this.changeDetectorRef.markForCheck();
  }

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

  irARecarga() {}

  async confirmarCompra() {
    try {
      this.isLoading = true;
      this.loadingMessage = "Espera mientras procesamos tu compra";
      let hasBalance = await this.paymentService.hasBalance(0, this.token);

      if (hasBalance) {
        let reservaId = this.cart.getReservaId();
        let cartValidation = await this.cart.validarCarrito(reservaId);
        if (cartValidation) {
          let response = await this.paymentService.confirmarCompra(
            this.token,
            reservaId
          );
          if (response.status) {
            if (response.instantanea.status) {
              this.dismissCompras();
              this.instantaneas = response.instantanea.data;
              await this.cart.borrarCarrito();
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

  cancelarCompra() {
    this.dismissCompras();
    this.compraCancelada = true;
  }

  async abrirFinalizar() {
    this.dismissCompras();
    await this.cart.borrarCarrito();
    this.compraFinalizada = true;
  }

  recargarSaldo(message) {
    this.recargaDeSaldoMessage = message;
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }

  isLoading: boolean;
  showComponents: boolean = false;
  loadingMessage: string;

  async deleteLoteriaTicket(data) {
    try {
      await this.getCarritoTickets();
      let identificador = data.ticket.identificador;
      let fracciones = data.ticket.seleccionados;
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let sorteo = this.ticketsLoteria[identificador].sorteo;
      let ticket = this.ticketsLoteria[identificador].ticket;
      let reservaId = this.cart.getReservaId();
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
      //this.getTotal();
      if (this.ticketsDisponibles && this.ticketsDisponibles.length) {
        let deletedIndex = this.ticketsDisponibles.findIndex(
          (x) => x.identificador === identificador
        );
        if (deletedIndex != -1) {
          this.allFractions[deletedIndex] = false;
          this.ticketsDisponibles[deletedIndex].seleccionados = [];
        }
      }
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
      await this.getCarritoTickets();
      let identificador = data.ticket.identificador;
      let fraccion = "";
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let ticket = this.ticketsLotto[identificador].ticket;
      let sorteo = data.sorteo;
      let reservaId = this.cart.getReservaId();
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
      await this.getCarritoTickets();
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let identificador = data.ticket.identificador;
      let fraccion = "";
      let ticket = this.ticketsPozo[identificador].ticket;
      let sorteo = data.sorteo;
      let reservaId = this.cart.getReservaId();
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
  async deleteLoteriaFraccion(data) {
    try {
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      await this.getCarritoTickets();
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
      let indexA = this.ticketsLoteria[
        identificador
      ].ticket.seleccionados.findIndex((x) => x == fraccion);
      this.ticketsLoteria[identificador].ticket.seleccionados.splice(indexA, 1);
      let indexB = this.ticketsLoteria[identificador].fracciones.findIndex(
        (x) => x == fraccion
      );
      this.ticketsLoteria[identificador].fracciones.splice(indexB, 1);
      if (this.ticketsLoteria[identificador].ticket.seleccionados.length == 0) {
        await this.cart.removeFromCart(this.ticketsLoteria[identificador], 1);
        delete this.ticketsLoteria[identificador];
      } else {
        await this.cart.setCarrito(this.ticketsLoteria[identificador], 1);
        this.ticketsLoteria[identificador].subtotal -= parseFloat(
          sorteo.precio
        );
      }

      await this.cart.setCarritoLoteria(this.ticketsLoteria);
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
  async deleteAllTickets() {
    try {
      this.loadingMessage = "Removiendo boletos del carrito";
      this.isLoading = true;
      await this.getCarritoTickets();

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
      let reservaId = this.cart.getReservaId();
      await this.lotteryService.eliminarTodosLosBoletosDeReserva(
        this.token,
        boletosLoteria,
        boletosLotto,
        boletosPozo,
        reservaId
      );

      Object.keys(this.ticketsLoteria).forEach((key) => {
        if (this.ticketsDisponibles && this.ticketsDisponibles.length != 0) {
          let deletedIndex = this.ticketsDisponibles.findIndex(
            (x) => x.identificador == key
          );
          if (deletedIndex != -1) {
            this.allFractions[deletedIndex] = false;
            this.ticketsDisponibles[deletedIndex].seleccionados = [];
          }
        }
      });
      await this.cart.borrarCarrito();
      //this.getTotal();
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
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
