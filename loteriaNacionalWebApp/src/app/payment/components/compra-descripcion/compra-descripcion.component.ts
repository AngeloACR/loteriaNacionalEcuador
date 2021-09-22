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

}
