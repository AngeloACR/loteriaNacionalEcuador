import { Component, OnInit } from "@angular/core";

import { InquiryService } from "../inquiry/services/inquiry.service";
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  //link: string = "https://contenidos-prueba.loteria.com.ec/divi-slide";
  //linkNews: string = "https://contenidos-prueba.loteria.com.ec/newsletter";
  link: string = "https://contenidos.loteria.com.ec/divi-slide";
  linkNews: string = "https://contenidos.loteria.com.ec/newsletter";
  title: string = "sliderLoteria";
  infoReady: boolean = false;
  constructor(private inquiry: InquiryService) {}
  async ngOnInit() {
    await this.inquiry.recuperarUltimosResultados();
    this.infoReady = true;
    var iframe: any = document.getElementById("diviSlide");

    // Adjusting the iframe height onload event
    iframe.onload = function() {
      iframe.style.height =
        iframe.contentWindow.document.body.scrollHeight + "px";
    };
  }
}
