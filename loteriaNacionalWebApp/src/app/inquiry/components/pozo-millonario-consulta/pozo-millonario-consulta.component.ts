import { Component, OnInit } from "@angular/core";
import { InquiryService } from "../../services/inquiry.service";

@Component({
  selector: "app-pozo-millonario-consulta",
  templateUrl: "./pozo-millonario-consulta.component.html",
  styleUrls: ["./pozo-millonario-consulta.component.scss"]
})
export class PozoMillonarioConsultaComponent implements OnInit {
  sorteosJugados: any;

  constructor(private inquiryService: InquiryService) {}

  async ngOnInit() {
    console.log("En la consulta de loteria");

    this.sorteosJugados = await this.inquiryService.recuperarSorteosJugados(5);
  }
}
