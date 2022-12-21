import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "consultas-resultado",
  templateUrl: "./resultado.component.html",
  styleUrls: ["./resultado.component.scss"]
})
export class ResultadoComponent implements OnInit {
  @Input() ticket: any;
  @Input() tipoLoteria: any;
  @Input() isLoteriaNacional: boolean = false;

  description?: String;
  nombrePremio?: String;
  descripcionDescuento?: String;
  sorteo?: Number;
  valorPremio?: string;
  valorFraccion?: string;
  constructor() {}

  ngOnInit() {
    this.sorteo = this.ticket.sorteo;
    let resultado = this.ticket.resultado;
    if (resultado.status) {
      this.description = `Boleto ganador`;
      this.valorPremio = this.formatNumber(resultado.data.premio.valorPremio);
      this.descripcionDescuento = resultado.data.premio.descripcionDescuento;
      if (this.isLoteriaNacional) {
        this.valorFraccion = this.formatNumber(resultado.data.premio.valorFraccion);
      }
      this.nombrePremio = resultado.data.premio.nombre;
    } else {
      this.description = "Boleto perdedor";
    }
  }
  formatNumber(number: number){// Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    
    return formatter.format(number);
  }
}
