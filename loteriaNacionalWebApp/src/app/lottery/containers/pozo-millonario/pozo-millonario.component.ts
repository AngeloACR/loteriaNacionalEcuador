import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

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

  ticketsDisponibles: ticketsAnimales[];

  page_size: number = 4;
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

    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
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

  async remover(animal: string) {
    this.animalesTabs = this.animalesTabs.filter((element) => {
      return element.nombre !== animal;
    });

    this.seleccionAnimales.forEach((element) => {
      if (element.nombre === animal) {
        return (element.status = false);
      }
    });

    await this.cart.setCarritoPozo(this.ticketsPozo);

    localStorage.setItem("animalesTabs", JSON.stringify(this.animalesTabs));
  }

  async seleccionarTicket(id: string) {
    try {
      this.changeDetectorRef.detectChanges();
      this.ticketsDisponibles[id].status = !this.ticketsDisponibles[id].status;
      this.changeDetectorRef.markForCheck();
      if (!this.ticketsDisponibles[id].status) {
        let identificador = this.ticketsDisponibles[id].identificador;
        let ticketPozo = this.ticketsPozo[identificador];
        await this.deletePozoTicket(ticketPozo);
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
      //await this.setDescuento(5);
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }
  ticketsPozo: any = {};

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
        this.ticketsPozo[ticket.identificador] = aux;
        let reservaId = this.lotteryService.getReservaId();
        let response = await this.lotteryService.reservarBoletos(
          this.token,
          aux,
          5,
          reservaId
        );

        this.lotteryService.setReservaId(response);
        await this.cart.setCarrito(aux, 5);
        await this.cart.setCarritoPozo(this.ticketsPozo);
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

  over25Error: boolean = false;
  over25ErrorTag: string =
    "Los números no pueden ser mayores a 25. Por favor, toma esto en cuenta al ingresar tus números preferidos.";

  validate() {
    let isHigher = false;
    this.combinacionDeLaSuerte.forEach((number, i) => {
      let aux = parseInt(number);
      if (aux > 25) {
        this.combinacionDeLaSuerte[i] = "";
        this.over25Error = true;
        setTimeout(() => {
          this.over25Error = false;
        }, 6000);
      }
    });
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

      this.ticketsDisponibles = await this.lotteryService.obtenerTickets(
        this.token,
        5,
        this.sorteoSeleccionado.sorteo,
        combinacion.join(""),
        combinacionFigura.join(""),
        this.tipoSeleccion
      );

      this.combinacionDeLaSuerte = ["", "", "", ""];
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
      if (tipoSeleccion != 1) {
        let selectedIndexs = [];
        for (let i = 0; i < tipoSeleccion; i++) {
          let index = Math.floor(
            Math.random() * this.ticketsDisponibles.length
          );
          while (selectedIndexs.indexOf(index) != -1) {
            index = Math.floor(Math.random() * this.ticketsDisponibles.length);
          }
          let ticket = this.ticketsDisponibles[index];
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
    this.showNumeros = false;
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

  instantaneas: any;
  isInstantaneas: boolean = false;
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
  irARecarga() {}

  recargaDeSaldoMessage: string;
  recargarSaldo(message) {
    this.recargaDeSaldoMessage = message;
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }
  ticketsLoteria: any = {};
  ticketsLotto: any = {};
  descuentos: any;
  async ngOnInit() {
    try {
      this.isLoading = true;
      await this.getCarritoTickets();
      //this.getTotal();

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
      this.descuentos = await this.lotteryService.obtenerDescuentos()
      this.isLoading = false;
      this.showComponents = true;
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
        await this.cart.eliminarDescuento(tipoLoteria)  
      }
      await this.getCarritoTickets();
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

      await this.cart.removeFromCart(ticket, 5);
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
      let identificador = data.ticket.identificador;
      let fraccion = "";
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let ticket = this.ticketsLotto[identificador].ticket;
      let sorteo = data.sorteo;

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
  async deletePozoTicket(data) {
    try {
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let identificador = data.ticket.identificador;
      let fraccion = "";
      let ticket = this.ticketsPozo[identificador].ticket;
      let sorteo = this.ticketsPozo[identificador].sorteo;
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
      if (this.ticketsDisponibles && this.ticketsDisponibles.length) {
        let deletedIndex = this.ticketsDisponibles.findIndex(
          (x) => x.identificador === identificador
        );
        if (deletedIndex != -1)
          this.ticketsDisponibles[deletedIndex].status = false;
      }
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
      Object.keys(this.ticketsPozo).forEach((key) => {
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
