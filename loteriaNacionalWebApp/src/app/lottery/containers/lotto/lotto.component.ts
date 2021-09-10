import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material";
import {
  sorteo,
  ticketsNacional,
  ticketsAnimales,
  ticketsLotto
} from "../../interfaces/lottery.interface";
import { LotteryService } from "../../services/lottery.service";
import { PaymentService } from "../../../payment/services/payment.service";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-lotto",
  templateUrl: "./lotto.component.html",
  styleUrls: ["./lotto.component.scss"]
})
export class LottoComponent implements OnInit {
  sorteo: sorteo[];
  combinacionDeLaSuerte: any = ["", "", "", "", "", ""];

  ticketsLotto: ticketsLotto[];

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
    private router: Router
  ) {
    this.actRoute.params.subscribe(params => {
      this.token = params["token"];
    });
  }
  async buscarNumero() {
    try {
      this.loadingMessage = "Buscando combinaciones disponibles";
      this.isLoading = true;
      if (this.sorteoSeleccionado.nombre != "default") {
        /*this.ticketsNacional = JSON.parse(
        localStorage.getItem("ticketsNacional")
        );*/
        this.showNumeros = false;
        let combinacion = this.combinacionDeLaSuerte.map(element => {
          if (element == null || element == undefined || element == "") {
            return "_";
          } else {
            return element;
          }
        });
        this.ticketsLotto = await this.lotteryService.obtenerTickets(
          this.token,
          2,
          this.sorteoSeleccionado.sorteo,
          combinacion.join(""),
          ""
        );

        this.showNumeros = true;
      } else {
        alert("Por favor seleccione un sorteo");
        this.showNumeros = false;
      }
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      alert(e);
    }
  }
  sorteoSeleccionado: sorteo;
  procesaEmitir(sorteo) {
    this.sorteoSeleccionado = sorteo;
  }
  seleccionarTicket(id: string) {
    this.ticketsLotto[id].status = !this.ticketsLotto[id].status;
    if (!this.ticketsLotto[id].status) {
      this.removeSeleccionado(this.ticketsLotto[id].identificador, "");
    } else {
      this.pushToSeleccionado(this.ticketsLotto[id]);
    }
  }

  ticketsSeleccionados: any = {};

  ticketsPozo: any = {};
  ticketsLoteria: any = {};
  async removeSeleccionado(identificador, fraccion) {
    try {
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let aux = {
        ticket: this.ticketsSeleccionados[identificador].ticket,
        sorteo: this.sorteoSeleccionado
      };
      let reservaId = this.lotteryService.getReservaId();

      let response = await this.lotteryService.eliminarBoletosDeReserva(
        this.token,
        aux,
        fraccion,
        2,
        reservaId
      );

      delete this.ticketsSeleccionados[identificador];

      localStorage.setItem(
        "seleccionadosLotto",
        JSON.stringify(this.ticketsSeleccionados)
      );
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      alert(e.toString());
    }
  }

  async pushToSeleccionado(ticket) {
    try {
      this.loadingMessage = "Agregando boleto al carrito";
      this.isLoading = true;

      let aux = {
        ticket,
        sorteo: this.sorteoSeleccionado
      };
      this.ticketsSeleccionados[ticket.identificador] = aux;

      let reservaId = this.lotteryService.getReservaId();
      let response = await this.lotteryService.reservarBoletos(
        this.token,
        aux,
        2,

        reservaId
      );

      this.lotteryService.setReservaId(response.reservasAux.reservaId[0]);
      this.lotteryService.setCarritoLotto(this.ticketsSeleccionados);

      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      alert(e.toString());
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
    this.lotteryService.borrarCarrito();
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

  async confirmarCompra() {
    this.dismissCompras();

    let reservaId = this.lotteryService.getReservaId();
    let response = await this.paymentService.confirmarCompra(
      this.token,
      reservaId
    );
    if (response.status) {
      this.compraFinalizada = true;
    } else {
      this.cancelarCompra();
    }
  }
  cancelarCompra() {
    this.dismissCompras();
    this.compraCancelada = true;
  }

  recargarSaldo() {
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
  async ngOnInit() {
    this.isLoading = true;
    if (JSON.parse(localStorage.getItem("seleccionadosLotto"))) {
      this.ticketsSeleccionados = JSON.parse(
        localStorage.getItem("seleccionadosLotto")
      );
    }
    if (JSON.parse(localStorage.getItem("seleccionadosLoteria"))) {
      this.ticketsLoteria = JSON.parse(
        localStorage.getItem("seleccionadosLoteria")
      );
    }
    if (JSON.parse(localStorage.getItem("seleccionadosPozo"))) {
      this.ticketsPozo = JSON.parse(localStorage.getItem("seleccionadosPozo"));
    }
    this.loadingMessage = "Cargando los sorteos disponibles";
    this.sorteo = await this.lotteryService.obtenerSorteo(this.token, 2);
    this.isLoading = false;
    this.showComponents = true;
  }
}
