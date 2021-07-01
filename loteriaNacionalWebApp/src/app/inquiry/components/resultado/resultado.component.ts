import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-resultado",
  templateUrl: "./resultado.component.html",
  styleUrls: ["./resultado.component.scss"]
})
export class ResultadoComponent implements OnInit {
  @Input() ticket: any;
  @Input() isLoteriaNacional: boolean = false;

  description: String;
  nombrePremio: String;
  ticketNumbers: Number[];
  sorteo: Number;
  valorPremio: Number;
  constructor() {}

  ngOnInit() {
    this.ticketNumbers = this.ticket.ticketNumbers;
    this.sorteo = this.ticket.sorteo;
    let resultado = this.ticket.resultado;
    if (resultado.status) {
      this.description = `Boleto ganador`;
      this.valorPremio = this.ticket.resultado.data.premio.valorPremioConDescuento;
      if (this.isLoteriaNacional) {
        this.valorPremio = this.ticket.resultado.data.premio.valorFraccionConDescuento;
      }
      this.nombrePremio = this.ticket.resultado.data.premio.nombre;
    } else {
      this.description = "Boleto perdedor";
    }
  }
}
