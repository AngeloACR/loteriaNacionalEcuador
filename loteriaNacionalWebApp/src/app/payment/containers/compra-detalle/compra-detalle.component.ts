import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { PaymentService } from "../../services/payment.service";
import { LotteryService } from "../../../lottery/services/lottery.service";

@Component({
  selector: "app-compra-detalle",
  templateUrl: "./compra-detalle.component.html",
  styleUrls: ["./compra-detalle.component.scss"],
})
export class CompraDetalleComponent implements OnInit {
  ticketId: string;
  accountId: string;
  compra: any;
  ganador: any;
  compraReady: boolean = false;
  user: string;

  isLoading: boolean;
  loadingMessage: string;
  constructor(
    private actRoute: ActivatedRoute,
    private payment: PaymentService,
    private lottery: LotteryService
  ) {
    this.actRoute.params.subscribe((params) => {
      let aux = params["id"];
        this.accountId = aux.split("-")[0];
        this.ticketId = aux.split("-")[1];
    });
  }

  async ngOnInit() {
    try{
    this.loadingMessage = "Consultando el detalle de tu compra";
    this.isLoading = true;
    this.compra = await this.payment.getCompra(this.ticketId, this.accountId);
    this.user = this.compra.user
      ? this.compra.user
      : this.lottery.getAuthData().user;
    this.ganador = await this.payment.getGanador(this.ticketId);
    if (this.ganador.status) {
      let resultadosGanadores = this.ganador.values;
      this.compra.loteria.forEach((element) => {
        element["detalleGanador"] = [];
      });
      this.compra.lotto.forEach((element) => {
        element["detalleGanador"] = [];
      });
      this.compra.pozo.forEach((element) => {
        element["detalleGanador"] = [];
      });
      for (let i = 0; i < resultadosGanadores.length; i++) {
        const ganador = resultadosGanadores[i];
        let ganadorIndex;
        switch (ganador.tipoLoteria) {
          case 1:
            ganadorIndex = this.compra.loteria.findIndex(
              (x) =>
                x.combinacion1 == ganador.combinacion1 &&
                x.sorteo == ganador.numeroSorteo
            );
            if (ganadorIndex != -1) {
              this.compra.loteria[ganadorIndex]["hasGanador"] = true;
              this.compra.loteria[ganadorIndex]["detalleGanador"].push(ganador);
            }
            break;
          case 2:
            ganadorIndex = this.compra.lotto.findIndex(
              (x) =>
                x.combinacion1 == ganador.combinacion1 &&
                x.sorteo == ganador.numeroSorteo
            );
            if (ganadorIndex != -1) {
              this.compra.lotto[ganadorIndex]["hasGanador"] = true;
              this.compra.lotto[ganadorIndex]["detalleGanador"].push(ganador);
            }
            break;

          default:
            ganadorIndex = this.compra.pozo.findIndex(
              (x) =>
                x.combinacion1 == ganador.combinacion1 &&
                x.sorteo == ganador.numeroSorteo
            );
            if (ganadorIndex != -1) {
              this.compra.pozo[ganadorIndex]["hasGanador"] = true;
              this.compra.pozo[ganadorIndex]["detalleGanador"].push(ganador);
            }
            break;
        }
      }
    }
    this.compraReady = true;
    this.isLoading = false;

  } catch (e) {
    console.log(e.message);
    this.isLoading = false;
    this.openError(e.message);
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