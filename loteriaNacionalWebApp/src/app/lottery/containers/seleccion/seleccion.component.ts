import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-seleccion",
  templateUrl: "./seleccion.component.html",
  styleUrls: ["./seleccion.component.scss"]
})
export class SeleccionComponent implements OnInit {
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
    this.linkLoteriaNacional = `/compra_boletos/${this.token}/${this.usuario}/loteria`;
    this.linkLotto = `/compra_boletos/${this.token}/${this.usuario}/lotto`;
    this.linkPozoMillonario = `/compra_boletos/${this.token}/${this.usuario}/pozo-millonario`;
  }
}
