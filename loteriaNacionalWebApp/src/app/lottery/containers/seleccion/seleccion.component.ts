import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { LotteryService } from "../../services/lottery.service";
import { PaymentService } from "../../../payment/services/payment.service";
import { ShoppingCartService } from "../../../payment/services/shopping-cart.service";
@Component({
  selector: "app-seleccion",
  templateUrl: "./seleccion.component.html",
  styleUrls: ["./seleccion.component.scss"]
})
export class SeleccionComponent implements OnInit {
  linkLotto: any = [];
  linkLoteriaNacional: any = [];
  linkPozoMillonario: any = [];
  token: string;
  lotteryToken: string;
  usuario: string;
  errorTitle: string;
  isLoading: boolean;
  loadingMessage: string;

  ticketsPozo: any;
  ticketsLotto: any;
  ticketsLoteria: any;
  ticketsCarrito: any;
  constructor(
    private actRoute: ActivatedRoute,
    private lottery: LotteryService,
    private paymentService: PaymentService,
    private cart: ShoppingCartService,

    private router: Router
  ) {
    this.actRoute.params.subscribe(params => {
      this.token = params["token"];
    });
  }

  async ngOnInit() {
    try {
      this.loadingMessage = "Espera mientras procesamos tu información";
      this.isLoading = true;
      let data = await this.lottery.authUser(this.token);
      console.log(data);
      this.lotteryToken = data.lotteryToken;
      if(this.lotteryToken){
        this.linkLoteriaNacional = `/compra_tus_juegos/loteria/${this.token}`;
        this.linkLotto = `/compra_tus_juegos/lotto/${this.token}`;
        this.linkPozoMillonario = `/compra_tus_juegos/pozo-millonario/${this.token}`;  
      }

      this.getCarritoTickets();
      this.getTotal();
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      let errorTitle = "Error";
      this.openError(errorMessage, errorTitle);
    }
  }

  confirmacionDeCompra: boolean = false;
  compraFinalizada: boolean = false;
  saldoInsuficiente: boolean = false;
  compraCancelada: boolean = false;
  instantaneas: any;
  isInstantaneas: boolean = false;
  cancelMessage: string = "";
  detalleCompra: any;
  recargaDeSaldoMessage: string;

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

  total: string;
  getTotal() {
    this.total = this.cart.getTotal();
  }
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

  finalizarCompra() {
    this.paymentService.finalizarCompra();
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  irARecarga() {}

  async confirmarCompra() {
    try {
      this.isLoading = true;
      this.loadingMessage = "Espera mientras procesamos tu compra";
      let hasBalance = await this.paymentService.hasBalance(0, this.token);

      if (hasBalance) {
        let reservaId = this.cart.getReservaId();
        let response = await this.paymentService.confirmarCompra(
          this.token,
          reservaId
        );
        if (response.status) {
          if (response.instantanea.status) {
            this.dismissCompras();
            this.instantaneas = response.instantanea.data;
            this.cart.borrarCarrito();
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
      let errorTitle = "Error";
      this.openError(errorMessage, errorTitle);
    }
  }

  cancelarCompra() {
    this.dismissCompras();
    this.compraCancelada = true;
  }

  abrirFinalizar() {
    this.dismissCompras();
    this.cart.borrarCarrito();
    this.compraFinalizada = true;
  }

  recargarSaldo(message) {
    this.recargaDeSaldoMessage = message;
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }

  async deleteLoteriaTicket(data) {
    try {
      let identificador = data.ticket.identificador;
      let fracciones = data.ticket.seleccionados;
      console.log(data);
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let ticket = this.ticketsLoteria[identificador].ticket;
      let sorteo = data.sorteo;

      let reservaId = this.lottery.getReservaId();
      if (fracciones.length != 0) {
        let response = await this.lottery.eliminarBoletosDeReserva(
          this.token,
          ticket,
          sorteo,
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
      this.getCarritoTickets();
      this.getTotal();

      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      let errorTitle = "Error";
      this.openError(errorMessage, errorTitle);
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

      let reservaId = this.lottery.getReservaId();
      let response = await this.lottery.eliminarBoletosDeReserva(
        this.token,
        ticket,
        sorteo,
        fraccion,
        2,
        reservaId
      );

      delete this.ticketsLotto[identificador];

      localStorage.setItem(
        "seleccionadosLotto",
        JSON.stringify(this.ticketsLotto)
      );
      this.getCarritoTickets();
      this.getTotal();
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      let errorTitle = "Error";
      this.openError(errorMessage, errorTitle);
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
      let response = await this.lottery.eliminarBoletosDeReserva(
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

      this.cart.setCarritoLoteria(this.ticketsLoteria);
      this.getCarritoTickets();
      this.getTotal();
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      let errorTitle = "Error";
      this.openError(errorMessage, errorTitle);
    }
  }
  async deletePozoTicket(data) {
    try {
      let identificador = data.ticket.identificador;
      let fraccion = "";
      this.loadingMessage = "Removiendo boleto del carrito";
      this.isLoading = true;
      let ticket = this.ticketsPozo[identificador].ticket;
      let sorteo = data.sorteo;

      let reservaId = this.lottery.getReservaId();
      let response = await this.lottery.eliminarBoletosDeReserva(
        this.token,
        ticket,
        sorteo,
        fraccion,
        5,
        reservaId
      );

      delete this.ticketsPozo[identificador];

      localStorage.setItem(
        "seleccionadosPozo",
        JSON.stringify(this.ticketsPozo)
      );
      this.getCarritoTickets();
      this.getTotal();
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      let errorTitle = "Error";
      this.openError(errorMessage, errorTitle);
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
      let reservaId = this.lottery.getReservaId();
      await this.lottery.eliminarTodosLosBoletosDeReserva(
        this.token,
        boletosLoteria,
        boletosLotto,
        boletosPozo,
        reservaId
      );
      this.cart.borrarCarrito();
      this.getCarritoTickets();
      this.getTotal();
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      let errorTitle = "Error";
      this.openError(errorMessage, errorTitle);
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
      this.ticketsPozo = JSON.parse(
        localStorage.getItem("seleccionadosPozo")
      );
    } else {
      this.ticketsPozo = {};
    }
  }

  authError(){
      this.openError("Por favor, para poder comprar su boleto preferido, deberá iniciar sesión en su cuenta", "Aviso")
  }

  isError: boolean = false;
  errorMessage: string;
  openError(msg, title) {
    this.errorTitle = title.toUpperCase();
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }
}
