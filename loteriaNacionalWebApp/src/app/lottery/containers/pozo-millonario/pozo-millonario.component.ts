import { Component, Input, OnInit } from "@angular/core";
import { LotteryService } from "../../services/lottery.service";
import { PaymentService } from "../../../payment/services/payment.service";
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

  seleccionarTicket(id: string) {
    this.ticketAnimales[id].status = !this.ticketAnimales[id].status;
    if (!this.ticketAnimales[id].status) {
      this.removeSeleccionado(this.ticketAnimales[id].identificador, "");
    } else {
      this.pushToSeleccionado(this.ticketAnimales[id]);
    }
  }
  ticketsSeleccionados: any = {};

  async removeSeleccionado(identificador, fraccion) {
    try {
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let aux = {
        ticket: this.ticketsSeleccionados[identificador].ticket,
        sorteo: this.sorteoSeleccionado,
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
      alert(e);
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
          "Su saldo es insuficiente para agregar este boleto al carrito";
          this.ticketAnimales.find(x => x.identificador === ticket.identificador).status = false
          this.recargarSaldo(message);
      }
    } catch (e) {
      this.isLoading = false;
      alert(e.toString());
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
        this.combinacionDeLaSuerte.forEach((number) => {
          let aux = parseInt(number);
          if (aux > 25) {
            isHigher = true;
          }
        });
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

        if (isHigher) {
          alert(
            "Las números no pueden ser mayores a 25. Por favor, revise el formulario e intente de nuevo."
          );
          return;
        } else {
          this.ticketAnimales = await this.lotteryService.obtenerTickets(
            this.token,
            5,
            this.sorteoSeleccionado.sorteo,
            combinacion.join(""),
            combinacionFigura.join("")
          );
        }

        this.showNumeros = true;
        this.isLoading = false;
      } else {
        alert("Por favor seleccione un sorteo");
        this.showNumeros = false;
        this.isLoading = false;
      }
    } catch (e) {
      alert(
        "Parece que ha habido un problema, revise el formulario e intente de nuevo"
      );
      this.isLoading = false;
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

  comprar() {
    this.dismissCompras();
    this.confirmacionDeCompra = true;
  }

  finalizarCompra() {
    this.paymentService.finalizarCompra();
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  async confirmarCompra() {
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
    this.isLoading = true;
    if (JSON.parse(localStorage.getItem("seleccionadosPozo"))) {
      this.ticketsSeleccionados = JSON.parse(
        localStorage.getItem("seleccionadosPozo")
      );
    }
    if (JSON.parse(localStorage.getItem("seleccionadosLoteria"))) {
      this.ticketsLoteria = JSON.parse(
        localStorage.getItem("seleccionadosLoteria")
      );
    }
    if (JSON.parse(localStorage.getItem("seleccionadosLotto"))) {
      this.ticketsLotto = JSON.parse(
        localStorage.getItem("seleccionadosLotto")
      );
    }
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
  }
}
