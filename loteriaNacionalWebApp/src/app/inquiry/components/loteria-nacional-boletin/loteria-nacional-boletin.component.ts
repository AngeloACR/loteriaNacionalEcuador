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
  showBox: boolean = false;
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
      1,
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
