import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { InquiryService } from "../../services/inquiry.service";

@Component({
  selector: "app-loteria-nacional-boletin",
  templateUrl: "./loteria-nacional-boletin.component.html",
  styleUrls: ["./loteria-nacional-boletin.component.scss"]
})
export class LoteriaNacionalBoletinComponent implements OnInit {
  boletinImagen: any;
  sorteo: any;
  imgNotFound: boolean = false;
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
      1,
      this.sorteo
    );
  }

  handleImgError() {
    console.log("Img not found");
    this.imgNotFound = true;
  }
}
