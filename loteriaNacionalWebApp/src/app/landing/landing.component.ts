import { Component, OnInit } from "@angular/core";

import { InquiryService } from "../inquiry/services/inquiry.service";
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  link: string = "https://contenidos-prueba.loteria.com.ec/divi-slide";
  linkNews: string = "https://contenidos-prueba.loteria.com.ec/newsletter";
  title: string = "sliderLoteria";
  constructor(private inquiry: InquiryService) {}
  async ngOnInit() {
    await this.inquiry.recuperarUltimosResultados();
  }
}
