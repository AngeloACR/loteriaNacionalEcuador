import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  link: string = "https://contenidos-prueba.loteria.com.ec/divi-slide";
  title: string = "sliderLoteria";
  constructor() {}

  ngOnInit() {}
}
