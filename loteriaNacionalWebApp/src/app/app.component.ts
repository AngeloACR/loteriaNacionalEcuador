import { Component, OnInit } from "@angular/core";
import { InquiryService } from "./inquiry/services/inquiry.service";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "loteriaNacionalWeb";
  faCoffee = faCoffee;
  constructor(private inquiry: InquiryService) {}
  async ngOnInit() {
  }
}
