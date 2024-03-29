import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'app-resultado-instantanea',
  templateUrl: './resultado-instantanea.component.html',
  styleUrls: ['./resultado-instantanea.component.scss']
})
export class ResultadoInstantaneaComponent implements OnInit {
  @Input() premio: any;
  @Input() tipoLoteria: number;

  description: String;
  nombrePremio: String;
  descripcionDescuento: String;
  sorteo: Number;
  valorPremio: string;
  constructor() {}

  ngOnInit() {
    this.sorteo = this.premio.sorteo;
      this.valorPremio = this.formatNumber(parseFloat(this.premio.prizeWithDiscount));
      this.nombrePremio = this.premio.prizeDescription;
  }

  formatNumber(number){// Create our number formatter.
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