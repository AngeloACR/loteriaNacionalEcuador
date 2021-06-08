import { Component, OnInit } from '@angular/core';

import { InquiryService } from "../../services/inquiry.service";

@Component({
  selector: 'app-pozo-millonario-boletin',
  templateUrl: './pozo-millonario-boletin.component.html',
  styleUrls: ['./pozo-millonario-boletin.component.scss']
})
export class PozoMillonarioBoletinComponent implements OnInit {
  boletinImagen: any;
  
  constructor(private inquiryService: InquiryService) {}

  async ngOnInit() {
    /* console.log("En la consulta de loteria"); */
    this.boletinImagen = await this.inquiryService.obtenerBoletin(3,0);
  }
}
