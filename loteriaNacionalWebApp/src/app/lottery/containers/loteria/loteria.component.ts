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
import { CATCH_STACK_VAR } from "@angular/compiler/src/output/output_ast";

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
  fracciones: number;
  showNumeros: boolean = false;
  page_size: number = 6;
  page_number: number = 1;
  pageSizeOptions: [5, 10, 20, 100];
  token: string;
  usuario: string;

  constructor(
    private lotteryService: LotteryService,
    private paymentService: PaymentService,
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

  seleccionarTicket(id: number) {
    this.fondo = !this.fondo;
    this.ticketsNacional[id].status = !this.ticketsNacional[id].status;
    if (!this.ticketsNacional[id].status) {
      this.allFractions[id] = false;
      this.removeSeleccionado(
        this.ticketsNacional[id].identificador,
        this.ticketsNacional[id].seleccionados
      );
    }
  }

  async buscarNumero() {
    try {
      this.loadingMessage = "Buscando combinaciones disponibles";
      this.isLoading = true;
      //if (this.sorteoSeleccionado.nombre != "default") {
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
        ""
      );
      this.allFractions = [];
      this.ticketsNacional.forEach((ticket) => {
        this.allFractions.push(false);
      });
      this.showNumeros = true; /* 
      } else {
        alert("Por favor seleccione un sorteo");
        this.showNumeros = false;
      } */
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      alert(JSON.stringify(e));
    }
  }

  fraccionSeleccionada(idTicket: number, idFraccion: string) {
    if (this.allFractions[idTicket]) this.allFractions[idTicket] = false;
    let index =
      this.ticketsNacional[idTicket].seleccionados.indexOf(idFraccion);
    if (index != -1) {
      let fraccion = this.ticketsNacional[idTicket].seleccionados[index];
      console.log(fraccion);
      this.ticketsNacional[idTicket].seleccionados.splice(index, 1);
      console.log(this.ticketsNacional[idTicket].seleccionados.length);
      this.removeSeleccionado(this.ticketsNacional[idTicket].identificador, [
        fraccion,
      ]);
    } else {
      this.ticketsNacional[idTicket].seleccionados.push(idFraccion);
      this.pushToSeleccionado(this.ticketsNacional[idTicket], [idFraccion]);
    }
  }

  seleccionarTodo(id: number) {
    this.changeDetectorRef.detectChanges();
    this.allFractions[id] = !this.allFractions[id];
    let fracciones = [];
    this.ticketsNacional[id].fraccionesDisponibles.forEach((element) => {
      fracciones.push(element);
    });
    if (this.allFractions[id]) {
      this.ticketsNacional[id].seleccionados = fracciones;
      this.pushToSeleccionado(this.ticketsNacional[id], fracciones);
    } else {
      this.ticketsNacional[id].seleccionados = [];
      this.removeSeleccionado(
        this.ticketsNacional[id].identificador,
        fracciones
      );
    }
    this.changeDetectorRef.markForCheck();
  }

  async removeSeleccionado(identificador, fracciones) {
    try {
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let aux = {
        ticket: this.ticketsSeleccionados[identificador].ticket,
        sorteo: this.sorteoSeleccionado,
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
      fracciones.forEach((fraccion) => {
        let index =
          this.ticketsSeleccionados[identificador].ticket.seleccionados.indexOf(
            fraccion
          );
        console.log(index);
        this.ticketsSeleccionados[identificador].ticket.seleccionados.splice(
          index,
          1
        );
      });
      if (
        this.ticketsSeleccionados[identificador].ticket.seleccionados.length ==
        0
      ) {
        delete this.ticketsSeleccionados[identificador];
      }

      localStorage.setItem(
        "seleccionadosLoteria",
        JSON.stringify(this.ticketsSeleccionados)
      );

      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      alert(JSON.stringify(e));
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
          "Su saldo es insuficiente para agregar este boleto al carrito";
          this.ticketsNacional.find(x => x.identificador === ticket.identificador).status = false
          this.recargarSaldo(message);
      }
    } catch (e) {
      this.isLoading = false;
      alert(JSON.stringify(e));
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

  dismissCompras() {
    this.confirmacionDeCompra = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
  }
  volver() {
    //this.lotteryService.borrarCarrito();
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  comprar() {
    this.dismissCompras();
    this.confirmacionDeCompra = true;
  }

  seguirComprando() {
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  irARecarga() {}

  async confirmarCompra() {
    try {
      this.isLoading = true;
      this.loadingMessage = "Espere mientras procesamos su compra";
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
          this.compraFinalizada = true;
        } else {
          this.cancelarCompra();
        }
      } else {
        this.isLoading = false;
        let message = "Su saldo es insuficiente para realizar la compra";
        this.recargarSaldo(message);
      }
    } catch (e) {
      this.isLoading = false;
      alert(JSON.stringify(e));
      console.log(JSON.stringify(e));
    }
  }
  cancelarCompra() {
    this.dismissCompras();
    this.compraCancelada = true;
  }

  recardaDeSaldoMessage: string;
  recargarSaldo(message) {
    this.recardaDeSaldoMessage = message;
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
    this.loadingMessage = "Cargando los sorteos disponibles";
    this.isLoading = true;
    if (JSON.parse(localStorage.getItem("seleccionadosLoteria"))) {
      this.ticketsSeleccionados = JSON.parse(
        localStorage.getItem("seleccionadosLoteria")
      );
    }
    if (JSON.parse(localStorage.getItem("seleccionadosLotto"))) {
      this.ticketsLotto = JSON.parse(
        localStorage.getItem("seleccionadosLotto")
      );
    }
    if (JSON.parse(localStorage.getItem("seleccionadosPozo"))) {
      this.ticketsPozo = JSON.parse(localStorage.getItem("seleccionadosPozo"));
    }
    this.sorteo = await this.lotteryService.obtenerSorteo(this.token, 1);
    this.isLoading = false;
    this.showComponents = true;
  }
}
