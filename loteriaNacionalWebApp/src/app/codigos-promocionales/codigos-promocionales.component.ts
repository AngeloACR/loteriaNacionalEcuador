import { Component, OnInit } from '@angular/core';
import { CodigosPromocionalesService } from './services/codigos-promocionales.service';

@Component({
  selector: 'app-codigos-promocionales',
  templateUrl: './codigos-promocionales.component.html',
  styleUrls: ['./codigos-promocionales.component.scss']
})
export class CodigosPromocionalesComponent implements OnInit {
  codigos: any = [];
  constructor(private codigosService: CodigosPromocionalesService) { }

  async ngOnInit() {
    //this.codigos = (await this.codigosService.obtenerCodigos() as any).values
  }

  async generarTxt(){
    this.codigos = await this.codigosService.obtenerTxt()

  }


}
