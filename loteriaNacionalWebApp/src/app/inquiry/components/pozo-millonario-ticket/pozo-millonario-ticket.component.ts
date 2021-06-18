import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pozo-millonario-ticket",
  templateUrl: "./pozo-millonario-ticket.component.html",
  styleUrls: ["./pozo-millonario-ticket.component.scss"]
})
export class PozoMillonarioTicketComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  verUltimoBoletin() {
    let sorteo = 4565;
    this.router.navigateByUrl(`/loteria_boletin/${sorteo}`);
  }
}
