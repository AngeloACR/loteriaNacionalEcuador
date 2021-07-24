import { Component, Input, OnInit } from '@angular/core';
import { sorteo } from '../../interfaces/lottery.interface';
import { LotteryService } from '../../services/lottery.service';

@Component({
  selector: 'app-info-loteria',
  templateUrl: './info-loteria.component.html',
  styleUrls: ['./info-loteria.component.scss']
})
export class InfoLoteriaComponent implements OnInit {

  @Input() titulo: string;
  @Input() color: string;
  @Input() loteria: number;

  fondoLoteria: boolean = true;
  fondoLotto: boolean = false;
  fondoPozo: boolean = false;

  sorteo: sorteo[];
  seleccionado: any;

  constructor(private lotteryService: LotteryService) { }

  getClassColor( loteria: number ) {
    switch(loteria) {
      case 1: 
        return this.fondoLoteria = true;
      
      case 2: 
        return this.fondoLotto = true;

      case 5: 
        return this.fondoPozo = true;
      
    }
  }

  ngOnInit() {
    this.sorteo = this.lotteryService.obtenerSorteo( this.loteria );
    this.getClassColor( this.loteria );
  }

}
