import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-consulta-lotto",
  templateUrl: "./consulta-lotto.component.html",
  styleUrls: ["./consulta-lotto.component.scss"]
})
export class ConsultaLottoComponent implements OnInit {
  showResultados: boolean = false;
  resultados: any;
  constructor() {}

  ngOnInit() {}

  toggleResultados(resultados) {
    this.resultados = resultados;
    console.log(this.resultados);
    this.showResultados = true;
  }
  closeBox() {
    this.showResultados = false;
  }
}
