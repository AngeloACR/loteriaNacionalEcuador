import { Component, OnInit } from "@angular/core";
import { InquiryService } from "../../services/inquiry.service";

@Component({
  selector: "app-loteria-nacional-boletin",
  templateUrl: "./loteria-nacional-boletin.component.html",
  styleUrls: ["./loteria-nacional-boletin.component.scss"],
})
export class LoteriaNacionalBoletinComponent implements OnInit {
  boletinImagen: any;

  constructor(private inquiryService: InquiryService) {}

  async ngOnInit() {
    /* console.log("En la consulta de loteria"); */
    this.boletinImagen = await this.inquiryService.obtenerBoletin(1,0);
  }
}
