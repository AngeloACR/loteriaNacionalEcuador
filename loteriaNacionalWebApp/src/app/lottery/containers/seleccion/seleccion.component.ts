import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { LotteryService } from "../../services/lottery.service";
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

  isLoading: boolean;
  loadingMessage: string;

  constructor(
    private actRoute: ActivatedRoute,
    private lottery: LotteryService
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

      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e.message);
      let errorMessage = e.message;
      this.openError(errorMessage);
    }
  }

  authError(){
      this.openError("Por favor, para poder comprar su boleto preferido, deberá iniciar sesión en su cuenta")
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
