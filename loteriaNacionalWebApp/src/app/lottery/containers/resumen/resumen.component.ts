import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { LotteryService } from "../../services/lottery.service";

import {
  ticketsNacional,
  ticketsLotto,
  ticketsAnimales
} from "../../interfaces/lottery.interface";
@Component({
  selector: "app-resumen",
  templateUrl: "./resumen.component.html",
  styleUrls: ["./resumen.component.scss"]
})
export class ResumenComponent implements OnInit {
  ticketsNacional: any;
  ticketsLotto: any;
  ticketsPozo: any;

  confirmacionDeCompra: boolean = false;
  compraFinalizada: boolean = false;
  saldoInsuficiente: boolean = false;
  compraCancelada: boolean = false;
  token: string;
  constructor(
    private actRoute: ActivatedRoute,
    private lotteryService: LotteryService,
    private router: Router
  ) {
    this.actRoute.params.subscribe(params => {
      this.token = params["token"];
      console.log(this.token);
    });
  }
  ngOnInit() {
    this.ticketsNacional = JSON.parse(
      localStorage.getItem("seleccionadosLoteria")
    );
    this.ticketsLotto = JSON.parse(localStorage.getItem("seleccionadosLotto"));
    this.ticketsPozo = JSON.parse(localStorage.getItem("seleccionadosPozo"));
  }

  dismissCompras() {
    this.confirmacionDeCompra = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
  }

  cancelMessage: string = "";
  volver() {
    this.lotteryService.borrarCarrito();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  comprar() {
    this.dismissCompras();
    this.confirmacionDeCompra = true;
  }

  finalizarCompra() {
    this.dismissCompras();
    this.compraFinalizada = true;
  }
  cancelarCompra() {
    this.dismissCompras();
    this.compraCancelada = true;
  }

  recargarSaldo() {
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }
}
