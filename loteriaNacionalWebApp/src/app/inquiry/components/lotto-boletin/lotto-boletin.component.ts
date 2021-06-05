import { Component, OnInit } from '@angular/core';

import { InquiryService } from "../../services/inquiry.service";

@Component({
  selector: 'app-lotto-boletin',
  templateUrl: './lotto-boletin.component.html',
  styleUrls: ['./lotto-boletin.component.scss']
})
export class LottoBoletinComponent implements OnInit {
  boletinImagen: any;

  constructor(private inquiryService: InquiryService) {}

  async ngOnInit() {
    /* console.log("En la consulta de loteria"); */
    this.boletinImagen = await this.inquiryService.obtenerBoletin(2,0);
  }
}
