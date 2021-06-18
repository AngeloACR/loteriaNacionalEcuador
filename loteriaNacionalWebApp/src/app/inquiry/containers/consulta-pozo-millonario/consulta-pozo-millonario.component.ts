import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-consulta-pozo-millonario",
  templateUrl: "./consulta-pozo-millonario.component.html",
  styleUrls: ["./consulta-pozo-millonario.component.scss"]
})
export class ConsultaPozoMillonarioComponent implements OnInit {
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
