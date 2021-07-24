import { Component, OnInit } from "@angular/core";
import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-lotto",
  templateUrl: "./lotto.component.html",
  styleUrls: ["./lotto.component.scss"]
})
export class LottoComponent implements OnInit {
  pageActual: number = 1;
  desaparecer_izquierdo: boolean = true;
  desaparecer_derecho: boolean = false;
  numeros: object[] = [];
  sorteo: any;
  premioPrecio: any;

  tickets: any;

  constructor(private lotteryService: LotteryService) {
    this.numeros = [
      [1, 4, 5, 7, 4],
      [8, 4, 5, 7, 4],
      [3, 4, 5, 7, 4],
      [4, 4, 5, 7, 4],
      [9, 4, 5, 7, 4],
      [5, 4, 5, 7, 4],
      [4, 4, 5, 7, 4],
      [2, 4, 5, 7, 4],
      [6, 4, 5, 7, 4],
      [6, 4, 5, 7, 4]
    ];
  }

  /* seleccionLotto: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */

  incrementar() {
    this.pageActual++;
    if (this.pageActual >= this.numeros.length / 4) {
      this.desaparecer_derecho = true;
    } else {
      this.desaparecer_derecho = false;
    }
    this.desaparecer_izquierdo = false;
  }

  decrementar() {
    this.pageActual--;
    if (this.pageActual <= 1) {
      this.pageActual = 1;
      this.desaparecer_izquierdo = true;
    } else {
      this.desaparecer_izquierdo = false;
    }
    this.desaparecer_derecho = false;
    console.log(this.pageActual);
  }

  irPage(page: number) {
    this.pageActual = page;
  }

  ngOnInit() {
    this.sorteo = this.lotteryService.obtenerSorteo(2);
    /* this.premioPrecio = this.lotteryService.obtenerPremioPrecio(2); */
    if (this.pageActual >= this.numeros.length / 4) {
      this.desaparecer_derecho = true;
    }
  }
}
