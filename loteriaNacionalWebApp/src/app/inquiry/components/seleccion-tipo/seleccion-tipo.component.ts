import { Component, OnInit } from '@angular/core';
import { LotteryService } from 'src/app/lottery/services/lottery.service';

@Component({
  selector: 'app-seleccion-tipo',
  templateUrl: './seleccion-tipo.component.html',
  styleUrls: ['./seleccion-tipo.component.scss']
})
export class SeleccionTipoComponent implements OnInit {

  constructor(private lottery: LotteryService) { }

  ngOnInit() {
  }

}
