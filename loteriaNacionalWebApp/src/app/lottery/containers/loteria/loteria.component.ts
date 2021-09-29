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
  ticketsNacional: ticketsNacional[];
  ticketsPozo: any = {};
  ticketsLotto: any = {};
  ticketsSeleccionados: any = {};
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

  handlerPage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
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
      this.ticketsNacional = await this.lotteryService.obtenerTickets(
        this.token,
        1,
        this.sorteoSeleccionado.sorteo,
        combinacion.join(""),
        "",
        this.tipoSeleccion
      );
      this.allFractions = [];
      this.ticketsNacional.forEach((ticket) => {
        this.allFractions.push(false);
      });
      this.showNumeros = true;

      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  async seleccionarVarios(tipoSeleccion) {
    try {
      console.log(tipoSeleccion);
      if (tipoSeleccion != 1) {
        for (let i = 0; i < tipoSeleccion; i++) {
          let index = Math.floor(Math.random() * this.ticketsNacional.length);
          let ticket = this.ticketsNacional[index];
          let fraccionIndex = Math.floor(
            Math.random() * ticket.fraccionesDisponibles.length
          );
          let fraccion = ticket.fraccionesDisponibles[fraccionIndex];
          while (
            this.ticketsNacional[index].seleccionados.indexOf(fraccion) != -1
          ) {
            fraccionIndex = Math.floor(
              Math.random() * ticket.fraccionesDisponibles.length
            );
            fraccion = ticket.fraccionesDisponibles[fraccionIndex];
          }
          this.ticketsNacional[index].seleccionados.push(fraccion);
          await this.pushToSeleccionado(ticket, [fraccion]);
        }
      }
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  async fraccionSeleccionada(idTicket: number, idFraccion: string) {
    try {
      if (this.allFractions[idTicket]) this.allFractions[idTicket] = false;
      let index =
        this.ticketsNacional[idTicket].seleccionados.indexOf(idFraccion);
      if (index != -1) {
        let fraccion = this.ticketsNacional[idTicket].seleccionados[index];
        console.log(fraccion);
        this.ticketsNacional[idTicket].seleccionados.splice(index, 1);
        console.log(this.ticketsNacional[idTicket].seleccionados.length);
        await this.removeSeleccionado(
          this.ticketsNacional[idTicket].identificador,
          [fraccion]
        );
      } else {
        this.ticketsNacional[idTicket].seleccionados.push(idFraccion);
        await this.pushToSeleccionado(this.ticketsNacional[idTicket], [
          idFraccion,
        ]);
      }
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  async seleccionarTodo(id: number) {
    try {
      this.changeDetectorRef.detectChanges();
      this.allFractions[id] = !this.allFractions[id];
      let fracciones = this.ticketsNacional[id].fraccionesDisponibles;
      if (this.allFractions[id]) {
        this.ticketsNacional[id].seleccionados = fracciones;
        await this.pushToSeleccionado(this.ticketsNacional[id], fracciones);
      } else {
        this.ticketsNacional[id].seleccionados = [];
        await this.removeSeleccionado(
          this.ticketsNacional[id].identificador,
          fracciones
        );
      }
      this.changeDetectorRef.markForCheck();
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  async removeSeleccionado(identificador, fracciones) {
    try {
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let aux = {
        ticket: this.ticketsSeleccionados[identificador].ticket,
        sorteo: this.ticketsSeleccionados[identificador].sorteo,
      };

      let reservaId = this.lotteryService.getReservaId();
      if (fracciones.length != 0) {
        console.log("1");
        let response = await this.lotteryService.eliminarBoletosDeReserva(
          this.token,
          aux,
          fracciones,
          1,
          reservaId
        );
      }
      console.log("2");
      let ticketId = this.ticketsNacional.findIndex(
        (p) => p.identificador == identificador
      );
      this.ticketsSeleccionados[identificador].seleccionados =
        this.ticketsNacional[ticketId].seleccionados.filter(
          (el) => !fracciones.includes(el)
        );
      console.log("3");

      if (
        this.ticketsSeleccionados[identificador].ticket.seleccionados.length ==
        0
      ) {
        delete this.ticketsSeleccionados[identificador];
      }
      console.log("4");

      localStorage.setItem(
        "seleccionadosLoteria",
        JSON.stringify(this.ticketsSeleccionados)
      );

      this.isLoading = false;
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
        subtotal,
        this.token
      );
      if (hasBalance) {
        this.ticketsSeleccionados[ticket.identificador] = aux;
        console.log(aux);
        let reservaId = this.lotteryService.getReservaId();
        let response = await this.lotteryService.reservarBoletos(
          this.token,
          aux,
          1,
          reservaId
        );
        this.lotteryService.setReservaId(response);
        console.log("Agregando al carrito");
        this.lotteryService.setCarritoLoteria(this.ticketsSeleccionados);
        this.isLoading = false;
      } else {
        this.isLoading = false;
        let message =
          "Tu saldo es insuficiente para agregar este boleto al carrito";
        var idTicket = this.ticketsNacional.findIndex(
          (p) => p.identificador == ticket.identificador
        );
        this.ticketsNacional[idTicket].seleccionados = this.ticketsNacional[
          idTicket
        ].seleccionados.filter((el) => !fracciones.includes(el));
        fracciones.forEach((fraccion) => {
          //this.ticketsNacional[idTicket].seleccionados.splice(index, 1);
        });
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
    let ticket = this.ticketsNacional[idTicket];
    if (ticket.seleccionados.indexOf(idFraccion) != -1) {
      return true;
    } else {
      return false;
    }
  }

  abrirResumen() {
    this.router.navigate([`compra_tus_juegos/resumen/${this.token}`]);
  }

  confirmacionDeCompra: boolean = false;
  compraFinalizada: boolean = false;
  saldoInsuficiente: boolean = false;
  compraCancelada: boolean = false;

  cancelMessage: string = "";
  detalleCompra: any;
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

  comprar() {
    this.dismissCompras();

    let loteriaAux = this.ticketsSeleccionados;
    let loteria = [];
    for (let id in loteriaAux) {
      let aux = {};
      aux["combinacion1"] = loteriaAux[id].ticket.combinacion;
      aux["fracciones"] = loteriaAux[id].ticket.seleccionados;
      aux["subtotal"] = parseFloat(loteriaAux[id].subtotal).toFixed(2);
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
      aux["fecha"] = pozoAux[id].sorteo.fecha;
      pozo.push(aux);
    }
    let amount = parseFloat(this.paymentService.getTotal()).toFixed(2);

    this.detalleCompra = {
      loteria,
      pozo,
      lotto,
      amount,
    };

    this.confirmacionDeCompra = true;
  }

  finalizarCompra() {
    this.paymentService.finalizarCompra();
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  irARecarga() {}

  instantaneas: any;
  isInstantaneas: boolean = false;
  async confirmarCompra() {
    try {
      this.isLoading = true;
      this.loadingMessage = "Espera mientras procesamos tu compra";
      let hasBalance = await this.paymentService.hasBalance(0, this.token);

      if (hasBalance) {
        let reservaId = this.lotteryService.getReservaId();
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
            this.instantaneas = "";
            this.abrirFinalizar();
          }
        } else {
          this.cancelarCompra();
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

  abrirFinalizar() {
    this.dismissCompras();
    this.lotteryService.borrarCarrito();
    this.compraFinalizada = true;
  }

  recargaDeSaldoMessage: string;
  recargarSaldo(message) {
    this.recargaDeSaldoMessage = message;
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }
  sorteoSeleccionado: sorteo;
  procesaEmitir(sorteo) {
    this.sorteoSeleccionado = sorteo;
  }

  isLoading: boolean;
  showComponents: boolean = false;
  loadingMessage: string;
  async ngOnInit() {
    try {
      this.loadingMessage = "Cargando los sorteos disponibles";
      this.isLoading = true;
      this.getCarritoTickets();
      this.sorteo = await this.lotteryService.obtenerSorteo(this.token, 1);
      this.isLoading = false;
      this.showComponents = true;
    } catch (e) {
      console.log(e.message);
      this.isLoading = false;
      this.openError(e.message);
    }
  }

  async deleteLoteriaTicket(data) {
    try {
      console.log(data);
      let identificador = data.ticket.identificador;
      let fracciones = data.ticket.seleccionados;
      console.log(data);
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let aux = {
        ticket: this.ticketsSeleccionados[identificador].ticket,
        sorteo: this.ticketsSeleccionados[identificador].sorteo,
      };
      let reservaId = this.lotteryService.getReservaId();
      if (fracciones.length != 0) {
        let response = await this.lotteryService.eliminarBoletosDeReserva(
          this.token,
          aux,
          fracciones,
          1,
          reservaId
        );
      }
      delete this.ticketsSeleccionados[identificador];

      localStorage.setItem(
        "seleccionadosLoteria",
        JSON.stringify(this.ticketsSeleccionados)
      );

      let deletedIndex = this.ticketsNacional.findIndex(
        (x) => x.identificador === identificador
      );
      if (deletedIndex != -1) {
        this.allFractions[deletedIndex] = false;
        this.ticketsNacional[deletedIndex].seleccionados = [];
      }
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
      console.log(data);
      let identificador = data.ticket.identificador;
      let fraccion = "";
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let aux = {
        ticket: this.ticketsLotto[identificador].ticket,
        sorteo: data.sorteo,
      };
      let reservaId = this.lotteryService.getReservaId();
      let response = await this.lotteryService.eliminarBoletosDeReserva(
        this.token,
        aux,
        fraccion,
        2,
        reservaId
      );

      delete this.ticketsLotto[identificador];

      localStorage.setItem(
        "seleccionadosLotto",
        JSON.stringify(this.ticketsLotto)
      );
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
      console.log(data);
      let identificador = data.ticket.identificador;
      let fraccion = "";
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let aux = {
        ticket: this.ticketsPozo[identificador].ticket,
        sorteo: data.sorteo,
      };
      let reservaId = this.lotteryService.getReservaId();
      let response = await this.lotteryService.eliminarBoletosDeReserva(
        this.token,
        aux,
        fraccion,
        5,
        reservaId
      );

      delete this.ticketsPozo[identificador];

      localStorage.setItem(
        "seleccionadosPozo",
        JSON.stringify(this.ticketsPozo)
      );
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  async deleteLoteriaFraccion(data) {}
  async deleteAllTickets() {
    try {
      this.loadingMessage = "Removiendo boletos del carrito";
      this.isLoading = true;

      let boletosLoteria = Object.keys(this.ticketsSeleccionados).map((key) => {
        return {
          ticket: this.ticketsSeleccionados[key].ticket,
          sorteo: this.ticketsSeleccionados[key].sorteo,
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

      Object.keys(this.ticketsSeleccionados).forEach((key) => {
        if (this.ticketsNacional && this.ticketsNacional.length != 0) {
          let deletedIndex = this.ticketsNacional.findIndex(
            (x) => x.identificador == key
          );
          if (deletedIndex != -1) {
            this.allFractions[deletedIndex] = false;
            this.ticketsNacional[deletedIndex].seleccionados = [];
          }
        }
      });
      this.cart.borrarCarrito();
      this.getCarritoTickets();
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  getCarritoTickets() {
    if (JSON.parse(localStorage.getItem("seleccionadosLoteria"))) {
      this.ticketsSeleccionados = JSON.parse(
        localStorage.getItem("seleccionadosLoteria")
      );
    } else {
      this.ticketsSeleccionados = {};
    }
    if (JSON.parse(localStorage.getItem("seleccionadosLotto"))) {
      this.ticketsLotto = JSON.parse(
        localStorage.getItem("seleccionadosLotto")
      );
    } else {
      this.ticketsLotto = {};
    }
    if (JSON.parse(localStorage.getItem("seleccionadosPozo"))) {
      this.ticketsPozo = JSON.parse(localStorage.getItem("seleccionadosPozo"));
    } else {
      this.ticketsPozo = {};
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
