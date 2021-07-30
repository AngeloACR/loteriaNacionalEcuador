import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
  @Input() message: string;
  @Input() loader: string;
  loaderPath: string;
  constructor() {}

  ngOnInit() {
    switch (this.loader) {
      case "lotto":
        this.loaderPath = "assets/lottoLoader.gif";
        break;
      case "pozo":
        this.loaderPath = "assets/pozoLoader.gif";
        break;
      default:
        this.loaderPath = "assets/loteriaLoader.gif";
        break;
    }
  }
}
