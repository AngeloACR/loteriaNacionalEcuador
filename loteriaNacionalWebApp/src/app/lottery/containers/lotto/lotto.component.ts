import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material";
import { sorteo, ticketsLotto } from "../../interfaces/lottery.interface";
import { LotteryService } from "../../services/lottery.service";
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
    private router: Router
  ) {
    this.actRoute.params.subscribe(params => {
      this.token = params["token"];
      console.log(this.token);
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
        let isHigher = false;
        let combinacion = this.combinacionDeLaSuerte.map(element => {
          if (element == null || element == undefined || element == "") {
            return "_";
          } else if (element.length != 1) {
            isHigher = true;
          } else {
            return element;
          }
        });
        if (isHigher) {
          alert(
            "Sólo puede ingresar valores entre 0 y 9 al formulario. Por favor revíselo e intente de nuevo"
          );
          return;
        }
        console.log(combinacion);
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
      alert(e.toString());
    }
  }
  sorteoSeleccionado: sorteo;
  procesaEmitir(sorteo) {
    this.sorteoSeleccionado = sorteo;
  }
  seleccionarTicket(id: string) {
    this.ticketsLotto[id].status = !this.ticketsLotto[id].status;
    if (!this.ticketsLotto[id].status) {
      this.removeSeleccionado(this.ticketsLotto[id].identificador);
    } else {
      this.pushToSeleccionado(this.ticketsLotto[id]);
    }
  }

  ticketsSeleccionados: any = {};

  removeSeleccionado(identificador) {
    delete this.ticketsSeleccionados[identificador];
    localStorage.setItem('seleccionadosLotto', JSON.stringify(this.ticketsSeleccionados));
  }

  pushToSeleccionado(ticket) {
    this.ticketsSeleccionados[ticket.identificador] = {
      ticket,
      sorteo: this.sorteoSeleccionado
    };
    console.log(this.ticketsSeleccionados);
    localStorage.setItem('seleccionadosLotto', JSON.stringify(this.ticketsSeleccionados));
  }

  abrirResumen() {
    this.router.navigate([`compra_tus_juegos/resumen/${this.token}`]);
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
    if (JSON.parse(localStorage.getItem("seleccionadosLotto"))){
      this.ticketsSeleccionados = JSON.parse(
        localStorage.getItem("seleccionadosLotto")
      );
      }
      this.loadingMessage = "Cargando los sorteos disponibles";
    this.sorteo = await this.lotteryService.obtenerSorteo(this.token, 2);
    this.isLoading = false;
    this.showComponents = true;
  }
}
