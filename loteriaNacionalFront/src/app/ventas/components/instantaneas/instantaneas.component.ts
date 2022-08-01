import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-instantaneas",
  templateUrl: "./instantaneas.component.html",
  styleUrls: ["./instantaneas.component.scss"],
})
export class InstantaneasComponent implements OnInit {
  @Input() resultados: any;
  premios: any[] = [];
  @Input() tipoLoteria?: string;
  @Input() isLoteriaNacional: boolean = false;
  @Input() isLotto: boolean = false;
  @Input() isPozoMillonario: boolean = false;
  @Input() isLaMillonaria: boolean = false;
  @Output() close = new EventEmitter();
  loteriaBackground: any;
  loteriaBackgroundButton: any;
  constructor() {}

  ngOnInit() {
    switch (parseInt(this.tipoLoteria!)) {
      case 1:
        this.loteriaBackground = {
          backgroundLoteriaNacional: true,
        };
        this.loteriaBackgroundButton = {
          backgroundLoteriaNacionalButton: true,
        };
        break;
      case 2:
        this.loteriaBackground = {
          backgroundLotto: true,
        };
        this.loteriaBackgroundButton = {
          backgroundLottoButton: true,
        };

        break;
      case 14:
        this.loteriaBackground = {
          backgroundMillonaria: true,
        };
        this.loteriaBackgroundButton = {
          backgroundMillonariaButton: true,
        };

        break;

      default:
        this.loteriaBackground = {
          backgroundPozoMillonario: true,
        };
        this.loteriaBackgroundButton = {
          backgroundPozoMillonarioButton: true,
        };

        break;
    }
    this.resultados.forEach((resultado: any) => {
      let ticket = {
        tipoLoteria: parseInt(resultado.tipoLoteria),
        sorteo: resultado.numeroSorteo,
        drawDate: resultado.fechaCaducidad,
        combinacion: resultado.combinacion1,
        combinacion2: resultado.combinacion2,
        fracciones: resultado.fraccion,
        prize: resultado.valorPremio,
        prizeWithDiscount: resultado.valorPremioDescuento,
        prizeDescription: resultado.descripcionPremio,
      };
      this.premios.push(ticket);
    });
  }
  closeBox() {
    this.close.emit("");
  }
}
