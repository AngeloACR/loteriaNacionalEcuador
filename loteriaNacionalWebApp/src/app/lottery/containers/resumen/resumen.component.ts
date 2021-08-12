import { Component, OnInit } from "@angular/core";

import {
  ticketsNacional,
  ticketsLotto,
  ticketsAnimales
} from "../../interfaces/lottery.interface";
@Component({
  selector: "app-resumen",
  templateUrl: "./resumen.component.html",
  styleUrls: ["./resumen.component.scss"]
})
export class ResumenComponent implements OnInit {
  ticketsNacional: ticketsNacional;
  ticketsLotto: ticketsLotto;
  ticketsPozo: ticketsAnimales;
  constructor() {}

  ngOnInit() {}
}
