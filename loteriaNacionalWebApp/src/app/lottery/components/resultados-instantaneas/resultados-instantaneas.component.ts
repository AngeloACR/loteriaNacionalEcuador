import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-resultados-instantaneas',
  templateUrl: './resultados-instantaneas.component.html',
  styleUrls: ['./resultados-instantaneas.component.scss']
})
export class ResultadosInstantaneasComponent implements OnInit {
  @Input() resultados: any;
  premios: any[] = [];
  constructor() {}

  ngOnInit() {

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
}
