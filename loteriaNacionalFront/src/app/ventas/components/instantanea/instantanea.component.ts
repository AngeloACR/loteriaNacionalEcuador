import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instantanea',
  templateUrl: './instantanea.component.html',
  styleUrls: ['./instantanea.component.scss'],
})
export class InstantaneaComponent implements OnInit {
  @Input() premio: any;
  @Input() tipoLoteria?: number;

  description?: String;
  nombrePremio?: String;
  descripcionDescuento?: String;
  sorteo?: Number;
  valorPremio?: string;
  constructor() {}

  ngOnInit() {
    this.sorteo = this.premio.sorteo;
    this.valorPremio = this.formatNumber(
      parseFloat(this.premio.prizeWithDiscount)
    );
    this.nombrePremio = this.premio.prizeDescription;
  }

  formatNumber(number: number) {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(number);
  }
}
