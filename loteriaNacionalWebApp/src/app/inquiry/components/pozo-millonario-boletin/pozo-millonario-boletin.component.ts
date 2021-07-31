import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

import { InquiryService } from "../../services/inquiry.service";

@Component({
  selector: "app-pozo-millonario-boletin",
  templateUrl: "./pozo-millonario-boletin.component.html",
  styleUrls: ["./pozo-millonario-boletin.component.scss"]
})
export class PozoMillonarioBoletinComponent implements OnInit {
  boletinImagen: any;
  imgNotFound: boolean = false;
  showBox: boolean = false;
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
    this.triggerLoader();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.boletinImagen = await this.inquiryService.obtenerBoletin(
      5,
      this.sorteo
    );
    this.showBox = true;
    this.dismissLoader();
  }

  handleImgError() {
    console.log("Img not found");
    this.imgNotFound = true;
  }

  isLoading: boolean = false;
  loadingMessage: String = "Buscando el boletin";

  triggerLoader() {
    this.isLoading = true;
  }

  dismissLoader() {
    this.isLoading = false;
  }
}
