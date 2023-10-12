import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { ConsultaService } from "../../services/consulta.service";

@Component({
  selector: 'lotto-boletin',
  templateUrl: './boletin.component.html',
  styleUrls: ['./boletin.component.scss']
})
export class BoletinComponent implements OnInit {
  boletinImagen: any;
  imgNotFound: boolean = false;
  showBox: boolean = false;
  sorteo: any;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private consulta: ConsultaService
  ) {
    this.actRoute.params.subscribe(params => {
      this.sorteo = params["sorteo"];
    });
  }

  async ngOnInit() {
    this.triggerLoader();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.boletinImagen = await this.consulta.obtenerBoletin(
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
