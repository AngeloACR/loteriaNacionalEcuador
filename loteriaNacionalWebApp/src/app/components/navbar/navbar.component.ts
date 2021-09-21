import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  ganadoresLink: String = "https://www.loteria.com.ec/ganadores";
  token: string;
  comprasLink: string;
  constructor() {}

  ngOnInit() {
    this.token = localStorage.getItem("exaToken");
    if (!this.token) this.token = "661c0ce5ccabbeb1136a";
    this.comprasLink = `/compra_tus_juegos?token=${this.token}`;
  }
}
