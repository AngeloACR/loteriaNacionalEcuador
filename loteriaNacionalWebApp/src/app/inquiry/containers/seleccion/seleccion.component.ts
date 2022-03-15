import { Component, OnInit } from '@angular/core';
import { LotteryService } from 'src/app/lottery/services/lottery.service';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.scss']
})
export class SeleccionComponent implements OnInit {

  constructor(private lottery: LotteryService) { }

  ngOnInit() {
  }

}
