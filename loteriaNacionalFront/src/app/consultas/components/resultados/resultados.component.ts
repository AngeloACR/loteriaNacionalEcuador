import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "consultas-resultados",
  templateUrl: "./resultados.component.html",
  styleUrls: ["./resultados.component.scss"],
})
export class ResultadosComponent implements OnInit {
  @Input() resultados: any;
  @Input() tipoLoteria: any;
  @Input() isLoteriaNacional: boolean = false;
  @Input() isLotto: boolean = false;
  @Input() isPozoMillonario: boolean = false;
  tickets: any[] = [];
  @Output() close = new EventEmitter();
  loteriaBackground: any;
  constructor() {}

  ngOnInit() {
    switch (this.tipoLoteria) {
      case "1":
        this.loteriaBackground = {
          backgroundLoteriaNacional: true,
        };
        break;
      case "2":
        this.loteriaBackground = {
          backgroundLotto: true,
        };

        break;

      case "5":
        this.loteriaBackground = {
          backgroundPozoMillonario: true,
        };

        break;
      case "14":
        this.loteriaBackground = {
          backgroundLotto: true,
        };

        break;
    }
    this.resultados.forEach((resultado: any) => {
      let description;
      let ticket: any = {
        sorteo: resultado.sorteo,
        description,
        combinacion: resultado.combinacion,
        resultado,
      };
      if(this.tipoLoteria == "14"){
        ticket['serie'] = resultado.serie
      }
      this.tickets.push(ticket);
    });
  }

  closeBox() {
    this.close.emit("");
  }
}
