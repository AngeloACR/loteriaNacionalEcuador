import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'app-resultado-instantanea',
  templateUrl: './resultado-instantanea.component.html',
  styleUrls: ['./resultado-instantanea.component.scss']
})
export class ResultadoInstantaneaComponent implements OnInit {
  @Input() premio: any;
  @Input() tipoLoteria: any;

  description: String;
  nombrePremio: String;
  descripcionDescuento: String;
  sorteo: Number;
  valorPremio: Number;
  valorFraccion: Number;
  loteriaBackground: any;
  constructor() {}

  ngOnInit() {
    switch (this.tipoLoteria) {
      case "1":
        this.loteriaBackground = {
          backgroundLoteriaNacional: true
        };
        break;
      case "2":
        this.loteriaBackground = {
          backgroundLotto: true
        };

        break;

      default:
        this.loteriaBackground = {
          backgroundPozoMillonario: true
        };

        break;
    }
    this.sorteo = this.premio.sorteo;
      this.valorPremio = this.premio.prizeWithDiscount;
      this.nombrePremio = this.premio.prizeDescription;
  }
}