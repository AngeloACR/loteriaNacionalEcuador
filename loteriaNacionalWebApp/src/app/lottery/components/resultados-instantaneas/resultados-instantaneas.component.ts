import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-resultados-instantaneas',
  templateUrl: './resultados-instantaneas.component.html',
  styleUrls: ['./resultados-instantaneas.component.scss']
})
export class ResultadosInstantaneasComponent implements OnInit {
  @Input() resultados: any;
  premios: any[] = [];
  @Input() tipoLoteria: any;
  @Input() isLoteriaNacional: boolean = false;
  @Input() isLotto: boolean = false;
  @Input() isPozoMillonario: boolean = false;
  @Output() close = new EventEmitter();
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
    this.resultados.forEach(resultado => {
      let ticket = {
        tipoLoteria: parseInt(resultado.lotteryType),
        lotteryName: resultado.lotteryName,
        sorteo: resultado.drawNumber,
        drawDate: resultado.drawDate,
        combinacion: resultado.combinationC1,
        fracciones: resultado.fractions,
        prize: resultado.prize,
        prizeWithDiscount: resultado.prizeWithDiscount,
        prizeDescription: resultado.prizeDescription,
};
      this.premios.push(ticket);
    });
  }
  closeBox() {
    this.close.emit("");
  }
  
}
