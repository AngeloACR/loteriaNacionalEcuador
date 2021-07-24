import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material";

import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-loteria",
  templateUrl: "./loteria.component.html",
  styleUrls: ["./loteria.component.scss"]
})
export class LoteriaComponent implements OnInit {
  tickets: any;
  numeros: object[] = [];
  sorteo: any;
  premioPrecio: any;

  page_size: number = 9;
  page_number: number = 1;
  pageSizeOptions: [5, 10, 20, 100];

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

  handlerPage(e: PageEvent) {
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }


  loteriaTickets: number[];

  ngOnInit() {
    this.sorteo = this.lotteryService.obtenerSorteo(1);
    /* this.premioPrecio = this.lotteryService.obtenerPremioPrecio(1); */

  }
}
