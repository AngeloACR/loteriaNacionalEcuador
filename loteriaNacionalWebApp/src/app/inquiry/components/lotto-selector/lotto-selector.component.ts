import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-lotto-selector",
  templateUrl: "./lotto-selector.component.html",
  styleUrls: ["./lotto-selector.component.scss"]
})
export class LottoSelectorComponent implements OnInit {
  ticketGanador: any;
  ticketNumbers: String[];
  ticketNumbers2: String[];
  ticketNumbers3: String[];
  ticketLottoPlus: String;
  ticketNosVemosJefe: String;
  ticketAntojito: String;
  ticketLottito: Array<String>;

  constructor(private router: Router) {}
  ngOnInit() {
    let data = JSON.parse(localStorage.getItem("lottoUltimoResultado"));
    this.ticketNumbers = data.ultimoResultadoLotto.combinacion1.split("");
    this.ticketNumbers2 = data.ultimoResultadoLotto.combinacion2.split("");
    this.ticketNumbers3 = data.ultimoResultadoLotto.combinacion3.split("");
    this.ticketLottoPlus = data.resultadoLottoPlus.combinacion2; //.split("");
    this.ticketNosVemosJefe = data.resultadoNosVemosJefe.combinacion4; //.split("");
    if(data.resultadoAntojito && data.resultadoAntojito.combinacion5){

      this.ticketAntojito = data.resultadoAntojito.combinacion5; //.split("");
    }
    this.ticketLottito = data.resultadosLottito.map(resultado => {
      return resultado.combinacion3; //.split("");
    });
    this.ticketGanador = {
      ticketIndex: data.ultimoResultadoLotto.codigo,
      description: "Boleto Ganador",
      ticketNumbers: this.ticketNumbers,
      ticketNumbers2: this.ticketNumbers2,
      ticketNumbers3: this.ticketNumbers3,
      ticketLottoPlus: this.ticketLottoPlus,
      ticketLottito: this.ticketLottito,
      numeroSorteo: data.numeroSorteo,
      sorteo: data.sorteo
    };
  }
  verUltimoBoletin() {
    let sorteo = this.ticketGanador.numeroSorteo;
    this.router.navigateByUrl(`/resultados/lotto_boletin/${sorteo}`);
  }
  verResultados() {
    this.router.navigateByUrl(`/resultados/lotto_consulta`);
  }
}
