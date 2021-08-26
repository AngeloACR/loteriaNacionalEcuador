import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { PageEvent } from "@angular/material";
import { sorteo, ticketsNacional } from "../../interfaces/lottery.interface";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-loteria",
  templateUrl: "./loteria.component.html",
  styleUrls: ["./loteria.component.scss"]
})
export class LoteriaComponent implements OnInit {
  tickets: any;

  sorteo: sorteo[];
  ticketsNacional: ticketsNacional[];
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
    private actRoute: ActivatedRoute,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.actRoute.params.subscribe(params => {
      console.log(params);
      this.token = params["token"];
      console.log(this.token);
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
      this.ticketsNacional[id].seleccionados = [];
      this.allFractions[id] = false;
      this.removeSeleccionado(this.ticketsNacional[id].identificador, "");
    }
  }

  async buscarNumero() {
    try {
      this.loadingMessage = "Buscando combinaciones disponibles";
      this.isLoading = true;
      if (this.sorteoSeleccionado.nombre != "default") {
        this.showNumeros = false;
        let combinacion = this.combinacionDeLaSuerte.map(element => {
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
        console.log(this.ticketsNacional);
        this.allFractions = [];
        this.ticketsNacional.forEach(ticket => {
          this.allFractions.push(false);
        });
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

  fraccionSeleccionada(idTicket: number, idFraccion: string) {
    console.log(idTicket);
    if (this.allFractions[idTicket]) {
      this.allFractions[idTicket] = false;
    }
    let index = this.ticketsNacional[idTicket].seleccionados.indexOf(
      idFraccion
    );
    if (index != -1) {
      let fraccion = this.ticketsNacional[idTicket].seleccionados[idFraccion];
      this.ticketsNacional[idTicket].seleccionados.splice(index, 1);
      if (this.ticketsNacional[idTicket].seleccionados.length == 0) {
        this.removeSeleccionado(
          this.ticketsNacional[idTicket].identificador,
          fraccion
        );
      }
    } else {
      this.ticketsNacional[idTicket].seleccionados.push(idFraccion);
      this.pushToSeleccionado(this.ticketsNacional[idTicket]);
    }
  }

  seleccionarTodo(id: number) {
    this.changeDetectorRef.detectChanges();
    this.allFractions[id] = !this.allFractions[id];
    this.ticketsNacional[id].seleccionados = [];
    this.ticketsNacional[id].fraccionesDisponibles.forEach(element => {
      if (this.allFractions[id]) {
        this.ticketsNacional[id].seleccionados.push(element);
        this.pushToSeleccionado(this.ticketsNacional[id]);
      } else {
        this.removeSeleccionado(
          this.ticketsNacional[id].identificador,
          element
        );
      }
    });
    this.changeDetectorRef.markForCheck();
  }

  async removeSeleccionado(identificador, fraccion) {
    try {
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let aux = {
        ticket: this.ticketsSeleccionados[identificador].ticket,
        sorteo: this.sorteoSeleccionado
      };

      let response = await this.lotteryService.eliminarBoletosDeReserva(
        this.token,
        aux,
        fraccion,
        1
      );

      delete this.ticketsSeleccionados[identificador];

      localStorage.setItem(
        "seleccionadosLoteria",
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

      let response = await this.lotteryService.reservarBoletos(
        this.token,
        aux,
        1
      );

      localStorage.setItem(
        "seleccionadosLoteria",
        JSON.stringify(this.ticketsSeleccionados)
      );
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      alert(e.toString());
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
    this.sorteo = await this.lotteryService.obtenerSorteo(this.token, 1);
    this.isLoading = false;
    this.showComponents = true;
  }
}
