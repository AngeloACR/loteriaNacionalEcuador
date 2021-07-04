import { Component, OnInit } from "@angular/core";
import { InquiryService } from "./services/inquiry.service";

@Component({
  selector: "app-inquiry",
  templateUrl: "./inquiry.component.html",
  styleUrls: ["./inquiry.component.scss"]
})
export class InquiryComponent implements OnInit {
  constructor(private inquiry: InquiryService) {}
  infoReady = false;
  async ngOnInit() {
    await this.inquiry.recuperarUltimosResultados();
    this.infoReady = true;
  }
}
