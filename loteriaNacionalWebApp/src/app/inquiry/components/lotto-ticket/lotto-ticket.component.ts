import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "app-lotto-ticket",
  templateUrl: "./lotto-ticket.component.html",
  styleUrls: ["./lotto-ticket.component.scss"]
})
export class LottoTicketComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  verUltimoBoletin() {
    let sorteo = 4565;
    this.router.navigateByUrl(`/lotto_boletin/${sorteo}`);
  }
}
