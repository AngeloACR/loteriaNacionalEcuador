import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-resultado",
  templateUrl: "./resultado.component.html",
  styleUrls: ["./resultado.component.scss"]
})
export class ResultadoComponent implements OnInit {
  @Input() ticket: any;
  @Input() tipoLoteria: any;
  @Input() isLoteriaNacional: boolean = false;

  description: String;
  nombrePremio: String;
  descripcionDescuento: String;
  sorteo: Number;
  valorPremio: Number;
  valorFraccion: Number;
  constructor() {}

  ngOnInit() {
    this.sorteo = this.ticket.sorteo;
    let resultado = this.ticket.resultado;
    console.log(resultado);
    if (resultado.status) {
      this.description = `Boleto ganador`;
      this.valorPremio = resultado.data.premio.valorPremio;
      this.descripcionDescuento = resultado.data.premio.descripcionDescuento;
      if (this.isLoteriaNacional) {
        this.valorFraccion = resultado.data.premio.valorFraccion;
      }
      this.nombrePremio = resultado.data.premio.nombre;
    } else {
      this.description = "Boleto perdedor";
    }
  }
}
