import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { InquiryService } from "../../services/inquiry.service";

@Component({
  selector: "app-lotto-boletin",
  templateUrl: "./lotto-boletin.component.html",
  styleUrls: ["./lotto-boletin.component.scss"]
})
export class LottoBoletinComponent implements OnInit {
  boletinImagen: any;
  imgNotFound: boolean = false;
  sorteo: any;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private inquiryService: InquiryService
  ) {
    this.actRoute.params.subscribe(params => {
      this.sorteo = params["sorteo"];
    });
  }

  async ngOnInit() {
    /* console.log("En la consulta de loteria"); */
    this.boletinImagen = await this.inquiryService.obtenerBoletin(
      2,
      this.sorteo
    );
  }

  handleImgError() {
    console.log("Img not found");
    this.imgNotFound = true;
  }
}
