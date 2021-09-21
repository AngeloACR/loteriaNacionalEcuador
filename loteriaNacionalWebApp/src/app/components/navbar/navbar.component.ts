import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  ganadoresLink: String = "https://www.loteria.com.ec/ganadores";
  token: string;
  comprasLink: string;
  constructor(
    private actRoute: ActivatedRoute,

  ) {
    this.actRoute.params.subscribe((params) => {
      this.token = params["token"];
      if(!this.token) this.token ="661c0ce5ccabbeb1136a";
    });
  }

  ngOnInit() {
    this.comprasLink = `/compra_tus_juegos?token=${this.token}`
      }
}
