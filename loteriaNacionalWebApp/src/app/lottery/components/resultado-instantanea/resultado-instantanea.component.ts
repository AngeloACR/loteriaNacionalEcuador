import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'app-resultado-instantanea',
  templateUrl: './resultado-instantanea.component.html',
  styleUrls: ['./resultado-instantanea.component.scss']
})
export class ResultadoInstantaneaComponent implements OnInit {
  @Input() ticket: any;
  @Input() tipoLoteria: any;
  @Input() isLoteriaNacional: boolean = false;

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
    this.sorteo = this.ticket.sorteo;
      this.valorPremio = this.ticket.prizeWithDiscount;
      this.nombrePremio = this.ticket.prizeDescription;
  }
}