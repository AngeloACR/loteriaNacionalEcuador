import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-seleccion-tipo",
  templateUrl: "./seleccion-tipo.component.html",
  styleUrls: ["./seleccion-tipo.component.scss"]
})
export class SeleccionTipoComponent implements OnInit {
  linkLotto: string;
  linkLoteriaNacional: string;
  linkPozoMillonario: string;
  token: string;
  usuario: string;
  constructor(private actRoute: ActivatedRoute) {
    this.actRoute.params.subscribe(params => {
      this.token = params["token"];
      this.usuario = params["username"];
    });
  }

  ngOnInit() {
    this.linkLoteriaNacional = `/compra_tus_juegos/${this.token}/loteria`;
    this.linkLotto = `/compra_tus_juegos/${this.token}/lotto`;
    this.linkPozoMillonario = `/compra_tus_juegos/${this.token}/pozo-millonario`;
  }
}
