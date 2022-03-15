import { Component, OnInit } from "@angular/core";

import { InquiryService } from "../inquiry/services/inquiry.service";
import { LotteryService } from "../lottery/services/lottery.service";
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  //link: string = "https://contenidos-prueba.loteria.com.ec/divi-slide";
  //linkNews: string = "https://contenidos-prueba.loteria.com.ec/newsletter";
  link: string = "https://contenidos.loteria.com.ec/divi-slide";
  link593: string = "https://contenidos.loteria.com.ec/bet593";
  linkNews: string = "https://contenidos.loteria.com.ec/newsletter";
  title: string = "sliderLoteria";
  infoReady: boolean = false;
  constructor(private inquiry: InquiryService, private lottery: LotteryService) {}
  async ngOnInit() {
    await this.inquiry.recuperarUltimosResultados();
    this.infoReady = true;
  }
}
