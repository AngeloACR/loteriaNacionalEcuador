import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {VentaService as PozoService} from '../../../juegos/pozo/services/venta.service'
import {VentaService as LottoService} from '../../../juegos/lotto/services/venta.service'

@Component({
  selector: 'app-descripcion-de-venta',
  templateUrl: './descripcion-de-venta.component.html',
  styleUrls: ['./descripcion-de-venta.component.scss']
})
export class DescripcionDeVentaComponent implements OnInit {
  @Input() compra: any;
  @Input() user: any;
  @Input() resumen: boolean = true;
  @Input() ticketId: any;
  @Input() codigosPromocionales: any;

  constructor(private pozo: PozoService,private lotto: LottoService) { }

  ngOnInit() {
  }

  nombreMascota(mascota: any){
    let mascotaData = this.pozo.obtenerCaracteristicasDeMascota(mascota);
    return mascotaData!.nombre;
  }  
  nombreAntojito(antojito: any){
    let antojitoData = this.lotto.obtenerCaracteristicasDeAntojito(antojito);
    return antojitoData!.nombre;
  }
  formatNumber(number: any){
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    
    });
    
    return formatter.format(number);
  }
}
