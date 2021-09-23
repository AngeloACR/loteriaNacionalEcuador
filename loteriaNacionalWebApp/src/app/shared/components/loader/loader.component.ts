import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
})
export class LoaderComponent implements OnInit {
  @Input() message: string;
  @Input() loader: string;
  loaderPath: string;
  constructor() {}

  animator: {};
  animatorStatus: boolean = true;
  interval: any;
  ngOnInit() {
    switch (this.loader) {
      case "lotto":
        this.loaderPath = "assets/img/lotto-sombra-2.png";
        //this.loaderPath = "assets/lottoLoader.gif";
        break;
      case "pozo":
        this.loaderPath = "assets/img/pozo-sombra.png";
        //this.loaderPath = "assets/pozoLoader.gif";
        break;
      default:
        this.loaderPath = "assets/img/loteria-sombra.png";
        //this.loaderPath = "assets/loteriaLoader.gif";
        break;
    }

    setTimeout(() => {
      this.animator = {
        logoAnimado: this.animatorStatus,
      };
    }, 100);

    this.interval = setInterval(() => {
      this.animatorStatus = !this.animatorStatus;
      this.animator = {
        logoAnimado: this.animatorStatus,
      };
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
