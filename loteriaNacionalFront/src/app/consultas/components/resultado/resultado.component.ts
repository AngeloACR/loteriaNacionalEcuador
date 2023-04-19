import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "consultas-resultado",
  templateUrl: "./resultado.component.html",
  styleUrls: ["./resultado.component.scss"]
})
export class ResultadoComponent implements OnInit {
  @Input() ticket: any;
  @Input() tipoLoteria: any;
  @Input() validacion: boolean = false;
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
  formatNumber(number: number){
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
  
    });
    
    return formatter.format(number);
  }
}
