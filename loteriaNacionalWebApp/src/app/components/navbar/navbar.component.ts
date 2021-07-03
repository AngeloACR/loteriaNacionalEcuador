import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  ganadoresLink: String = "https://www4.loteria.com.ec/ganadores";
  constructor() {}

  ngOnInit() {}
}
