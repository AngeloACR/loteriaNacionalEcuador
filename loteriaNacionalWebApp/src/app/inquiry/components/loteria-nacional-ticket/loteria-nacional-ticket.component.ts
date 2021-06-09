import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "app-loteria-nacional-ticket",
  templateUrl: "./loteria-nacional-ticket.component.html",
  styleUrls: ["./loteria-nacional-ticket.component.scss"]
})
export class LoteriaNacionalTicketComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  verUltimoBoletin() {
    let sorteo = 4565;
    this.router.navigateByUrl(`/loteria_boletin/${sorteo}`);
  }
}
