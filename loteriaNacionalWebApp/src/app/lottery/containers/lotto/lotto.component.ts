import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material";
import { sorteo, ticketsLotto } from "../../interfaces/lottery.interface";
import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-lotto",
  templateUrl: "./lotto.component.html",
  styleUrls: ["./lotto.component.scss"]
})
export class LottoComponent implements OnInit {
  sorteo: sorteo[];

  ticketsLotto: ticketsLotto[];

  page_size: number = 4;
  page_number: number = 1;
  pageSizeOptions: [5, 10, 20, 100];

  constructor(private lotteryService: LotteryService) {}

  seleccionarTicket(id: number) {
    this.ticketsLotto.forEach(element => {
      if (element.identificador === id) {
        element.status = !element.status;
      }
    });
    console.log(id);

    localStorage.setItem("ticketsLotto", JSON.stringify(this.ticketsLotto));
  }

  handlerPage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  async ngOnInit() {
    this.ticketsLotto = JSON.parse(localStorage.getItem("ticketsLotto"));
    this.sorteo = await this.lotteryService.obtenerSorteo(2);
  }
}
