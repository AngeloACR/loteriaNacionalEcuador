import { Component, OnInit } from "@angular/core";

import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-loteria",
  templateUrl: "./loteria.component.html",
  styleUrls: ["./loteria.component.scss"],
})
export class LoteriaComponent implements OnInit {
  tickets: any;
  numeros: object[] = [];
  pageActual: number = 1;
  desaparecer_izquierdo: boolean = true;
  desaparecer_derecho: boolean = false;
  sorteo: any;
  premioPrecio: any;

  constructor( private lotteryService: LotteryService) {

    this.numeros = [
      [ 1, 4, 5, 7, 4 ],
      [ 8, 4, 5, 7, 4 ],
      [ 3, 4, 5, 7, 4 ],
      [ 4, 4, 5, 7, 4 ],
      [ 9, 4, 5, 7, 4 ],
      [ 5, 4, 5, 7, 4 ],
      [ 4, 4, 5, 7, 4 ],
      [ 2, 4, 5, 7, 4 ],
      [ 6, 4, 5, 7, 4 ],
      [ 6, 4, 5, 7, 4 ],
    ];
  }

  incrementar() {
    if (this.pageActual >= this.numeros.length / 9) {
      this.desaparecer_derecho = true;
    } else {
      this.pageActual++;
    }

    if ( this.pageActual === 1) {
      this.desaparecer_izquierdo = true;
    } else {
      this.desaparecer_izquierdo = false;
    }
    console.log( this.pageActual );
  }

  decrementar() {
    if (this.pageActual <= 1) {
      this.pageActual = 1;
      this.desaparecer_izquierdo = true;
    } else {
      this.pageActual--;
      this.desaparecer_derecho = false;
    }
    console.log( this.pageActual );

  }

  irPage( page: number) {
    this.pageActual = page;
  }

  loteriaTickets: number[];

  

  ngOnInit() {
    this.sorteo = this.lotteryService.obtenerSorteo();
    this.premioPrecio = this.lotteryService.obtenerPremioPrecio( 1 );
  }
}
