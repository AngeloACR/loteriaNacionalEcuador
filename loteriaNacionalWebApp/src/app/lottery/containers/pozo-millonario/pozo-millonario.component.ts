import { Component, Input, OnInit } from "@angular/core";
import { LotteryService } from "../../services/lottery.service";
import { PaymentService } from "../../../payment/services/payment.service";
import { ShoppingCartService } from "../../../payment/services/shopping-cart.service";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import {
  animales,
  ticketsAnimales,
  sorteo,
  ticketsNacional,
  ticketsLotto,
} from "../../interfaces/lottery.interface";
import { PageEvent } from "@angular/material";
import { ReturnStatement } from "@angular/compiler";

@Component({
  selector: "app-pozo-millonario",
  templateUrl: "./pozo-millonario.component.html",
  styleUrls: ["./pozo-millonario.component.scss"],
})
export class PozoMillonarioComponent implements OnInit {
  sorteo: sorteo[];
  combinacionDeLaSuerte: string[] = ["", "", "", ""];

  seleccionAnimales: animales[];
  animalesTabs: animales[] = [];

  ticketAnimales: ticketsAnimales[];

  page_size: number = 6;
  page_number: number = 1;
  pageSizeOptions: [5, 10, 20, 100];
  showNumeros: boolean = false;
  token: string;
  usuario: string;
  constructor(
    private lotteryService: LotteryService,
    private actRoute: ActivatedRoute,
    private paymentService: PaymentService,
    private cart: ShoppingCartService,

    private router: Router
  ) {
    this.actRoute.params.subscribe((params) => {
      this.token = params["token"];
    });
  }

  agregar(animal: animales, i: number) {
    if (this.seleccionAnimales[i].status === false) {
      this.seleccionAnimales[i].status = true;
      this.animalesTabs.push(this.seleccionAnimales[i]);
    } else {
      this.seleccionAnimales[i].status = false;
      this.animalesTabs = this.animalesTabs.filter((element) => {
        return element.nombre !== animal.nombre;
      });
    }
    localStorage.setItem(
      "animalesSeleccionados",
      JSON.stringify(this.seleccionAnimales)
    );
    localStorage.setItem("animalesTabs", JSON.stringify(this.animalesTabs));
  }

  remover(animal: string) {
    this.animalesTabs = this.animalesTabs.filter((element) => {
      return element.nombre !== animal;
    });

    this.seleccionAnimales.forEach((element) => {
      if (element.nombre === animal) {
        return (element.status = false);
      }
    });

    this.lotteryService.setCarritoPozo(this.ticketsSeleccionados);

    localStorage.setItem("animalesTabs", JSON.stringify(this.animalesTabs));
  }

  async seleccionarTicket(id: string) {
    try {
      this.ticketAnimales[id].status = !this.ticketAnimales[id].status;
      if (!this.ticketAnimales[id].status) {
        await this.removeSeleccionado(
          this.ticketAnimales[id].identificador,
          ""
        );
      } else {
        await this.pushToSeleccionado(this.ticketAnimales[id]);
      }
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  ticketsSeleccionados: any = {};

  async removeSeleccionado(identificador, fraccion) {
    try {
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let aux = {
        ticket: this.ticketsSeleccionados[identificador].ticket,
        sorteo: this.ticketsSeleccionados[identificador].sorteo,
      };
      let reservaId = this.lotteryService.getReservaId();
      let response = await this.lotteryService.eliminarBoletosDeReserva(
        this.token,
        aux,
        fraccion,
        5,
        reservaId
      );

      delete this.ticketsSeleccionados[identificador];

      localStorage.setItem(
        "seleccionadosPozo",
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
        this.ticketsSeleccionados[ticket.identificador] = aux;
        console.log("Buscando la id de reserva");
        let reservaId = this.lotteryService.getReservaId();
        console.log(reservaId);
        let response = await this.lotteryService.reservarBoletos(
          this.token,
          aux,
          5,
          reservaId
        );

        this.lotteryService.setReservaId(response);
        this.lotteryService.setCarritoPozo(this.ticketsSeleccionados);

        this.isLoading = false;
      } else {
        this.isLoading = false;
        let message =
          "Tu saldo es insuficiente para agregar este boleto al carrito";
        this.ticketAnimales.find(
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

  handlerPage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  obtenerMascota(mascota) {
    return this.lotteryService.obtenerMascota(mascota);
  }

  ordenaCombinacion(a, b) {
    return a - b;
  }
  validate() {
    let isHigher = false;
    this.combinacionDeLaSuerte.forEach((number, i) => {
      let aux = parseInt(number);
      if (aux > 25) {
        let errorMessage =
          "Las números no pueden ser mayores a 25. Por favor, revise el formulario e intente de nuevo.";
        this.openError(errorMessage);
        this.combinacionDeLaSuerte[i] = "";
        isHigher = true;
      }
    });
    if (isHigher) {
      return;
    }
  }
  async buscarNumero() {
    try {
      this.loadingMessage = "Buscando combinaciones disponibles";
      this.isLoading = true;
      this.showNumeros = false;
      let combinacion = this.combinacionDeLaSuerte.map((number) => {
        let numero = number;
        if (numero.length < 2) {
          numero = `0${numero}`;
        }

        if (numero == "0" || numero == "00") {
          return "";
        }
        return numero;
      });
      let combinacionFigura = this.animalesTabs.map((animal) => {
        return animal.identificador;
      });
      combinacion.sort(this.ordenaCombinacion);
      combinacionFigura.sort(this.ordenaCombinacion);

      this.ticketAnimales = await this.lotteryService.obtenerTickets(
        this.token,
        5,
        this.sorteoSeleccionado.sorteo,
        combinacion.join(""),
        combinacionFigura.join(""),
        this.tipoSeleccion
      );

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

  async seleccionarVarios(tipoSeleccion) {
    try {
      console.log(tipoSeleccion);
      if (tipoSeleccion != 1) {
        let selectedIndexs = [];
        for (let i = 0; i < tipoSeleccion; i++) {
          let index = Math.floor(Math.random() * this.ticketAnimales.length);
          while (selectedIndexs.indexOf(index) != -1) {
            index = Math.floor(Math.random() * this.ticketAnimales.length);
          }
          let ticket = this.ticketAnimales[index];
          await this.pushToSeleccionado(ticket);
          selectedIndexs.push(index);
        }
      }
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  sorteoSeleccionado: sorteo;
  procesaEmitir(sorteo) {
    this.sorteoSeleccionado = sorteo;
    this.ticketAnimales = JSON.parse(localStorage.getItem("ticketsAnimales"));
  }
  isLoading: boolean;
  showComponents: boolean = false;
  loadingMessage: string;

  obtenerAnimal(mascota) {
    return this.lotteryService.obtenerMascota(mascota);
  }

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
    let pozoAux = this.ticketsSeleccionados;
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
        this.isLoading = false;
        if (response.status) {
          this.dismissCompras();
          this.lotteryService.borrarCarrito();
          this.compraFinalizada = true;
        } else {
          this.cancelarCompra();
        }
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
  irARecarga() {}

  recargaDeSaldoMessage: string;
  recargarSaldo(message) {
    this.recargaDeSaldoMessage = message;
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }
  ticketsLoteria: any = {};
  ticketsLotto: any = {};
  async ngOnInit() {
    try {
      this.isLoading = true;
      this.getCarritoTickets();

      this.loadingMessage = "Cargando los sorteos disponibles";
      this.seleccionAnimales = JSON.parse(
        localStorage.getItem("animalesSeleccionados")
      );
      this.animalesTabs = JSON.parse(localStorage.getItem("animalesTabs"));

      //TODO: Preguntar como quiere que venga la variable tabs, si llena o no
      this.seleccionAnimales.forEach((element) => {
        this.animalesTabs.forEach((elemento) => {
          if (elemento.nombre === element.nombre) {
            element.status = elemento.status;
          }
        });
      });
      localStorage.setItem(
        "animalesSeleccionados",
        JSON.stringify(this.seleccionAnimales)
      );

      this.sorteo = await this.lotteryService.obtenerSorteo(this.token, 5);
      this.isLoading = false;
      this.showComponents = true;
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
      console.log(data);
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let aux = {
        ticket: this.ticketsLoteria[identificador].ticket,
        sorteo: data.sorteo,
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
      delete this.ticketsLoteria[identificador];

      localStorage.setItem(
        "seleccionadosLoteria",
        JSON.stringify(this.ticketsLoteria)
      );

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
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let identificador = data.ticket.identificador;
      let fraccion = "";
      console.log(data);
      await this.removeSeleccionado(identificador, fraccion);
      let deletedIndex = this.ticketAnimales.findIndex(
        (x) => x.identificador === identificador
      );
      if (deletedIndex != -1) this.ticketAnimales[deletedIndex].status = false;
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
      let boletosPozo = Object.keys(this.ticketsSeleccionados).map((key) => {
        return {
          ticket: this.ticketsSeleccionados[key].ticket,
          sorteo: this.ticketsSeleccionados[key].sorteo,
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
        if (this.ticketAnimales && this.ticketAnimales.length != 0) {
          let deletedIndex = this.ticketAnimales.findIndex(
            (x) => x.identificador == key
          );
          if (deletedIndex != -1)
            this.ticketAnimales[deletedIndex].status = false;
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
      this.ticketsLoteria = JSON.parse(
        localStorage.getItem("seleccionadosLoteria")
      );
    } else {
      this.ticketsLoteria = {};
    }
    if (JSON.parse(localStorage.getItem("seleccionadosLotto"))) {
      this.ticketsLotto = JSON.parse(
        localStorage.getItem("seleccionadosLotto")
      );
    } else {
      this.ticketsLotto = {};
    }
    if (JSON.parse(localStorage.getItem("seleccionadosPozo"))) {
      this.ticketsSeleccionados = JSON.parse(
        localStorage.getItem("seleccionadosPozo")
      );
    } else {
      this.ticketsSeleccionados = {};
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
