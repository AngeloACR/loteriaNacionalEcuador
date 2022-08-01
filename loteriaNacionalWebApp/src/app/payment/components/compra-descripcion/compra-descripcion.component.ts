import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {LotteryService} from '../../../lottery/services/lottery.service'

@Component({
  selector: 'app-compra-descripcion',
  templateUrl: './compra-descripcion.component.html',
  styleUrls: ['./compra-descripcion.component.scss']
})
export class CompraDescripcionComponent implements OnInit {
  @Input() compra: any;
  @Input() user: any;
  @Input() ticketId: any;

  constructor(private lotteryService: LotteryService) { }

  ngOnInit() {
  }

  nombreMascota(mascota){
    let mascotaData = this.lotteryService.obtenerCaracteristicasDeMascota(mascota);
    return mascotaData.nombre;
  }  
  nombreAntojito(antojito){
    let antojitoData = this.lotteryService.obtenerCaracteristicasDeAntojito(antojito);
    return antojitoData.nombre;
  }
  formatNumber(number){// Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    
    return formatter.format(number);
  }
}
