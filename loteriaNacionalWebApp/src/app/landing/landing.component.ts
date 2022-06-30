import { Component, OnInit } from "@angular/core";

import { InquiryService } from "../inquiry/services/inquiry.service";
import { LotteryService } from "../lottery/services/lottery.service";
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  link: string = "https://blog.loteria.com.ec/contenido/slide-new";
  link593: string = "https://blog.loteria.com.ec/contenido/bet593";
  linkNews: string = "https://blog.loteria.com.ec/contenido/newsletter";
  title: string = "sliderLoteria";
  infoReady: boolean = false;
  constructor(private inquiry: InquiryService, private lottery: LotteryService) {}
  async ngOnInit() {
    await this.inquiry.recuperarUltimosResultados();
    this.infoReady = true;
  }
}
