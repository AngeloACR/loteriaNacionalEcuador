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
      5,
      this.sorteo
    );
  }
}
