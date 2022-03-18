import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { InquiryService } from "../../services/inquiry.service";

@Component({
  selector: 'app-la-millonaria-boletin',
  templateUrl: './la-millonaria-boletin.component.html',
  styleUrls: ['./la-millonaria-boletin.component.scss']
})
export class LaMillonariaBoletinComponent implements OnInit {
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
      14,
      this.sorteo
    );
    this.showBox = true;
    this.dismissLoader();
  }

  handleImgError() {
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
