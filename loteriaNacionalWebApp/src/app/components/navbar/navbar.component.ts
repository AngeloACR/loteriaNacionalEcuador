import { Component, OnInit, Input} from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  ganadoresLink: String = "https://www.loteria.com.ec/ganadores";
  token: string;
  comprasLink: string = "https://www.loteria.com.ec//compra-tus-boletos"
  constructor() {}

  ngOnInit() {
  }
}
