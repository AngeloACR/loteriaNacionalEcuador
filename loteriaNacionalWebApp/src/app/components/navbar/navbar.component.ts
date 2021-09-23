import { Component, OnInit, Input} from "@angular/core";

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
    //if (!this.token) this.token = "661c0ce5ccabbeb1136a";
    if (!this.token) this.token = "4d1c0cf9cef1ee11ce8c";
    this.comprasLink = `/compra_tus_juegos?token=${this.token}`;
  }
}
