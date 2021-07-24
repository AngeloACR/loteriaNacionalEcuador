import { Component, Input, OnInit } from '@angular/core';
import { LotteryService } from '../../services/lottery.service';

@Component({
  selector: 'app-info-loteria',
  templateUrl: './info-loteria.component.html',
  styleUrls: ['./info-loteria.component.scss']
})
export class InfoLoteriaComponent implements OnInit {

  sorteo: any;
  @Input() titulo: string;
  @Input() color: string;
  @Input() loteria: number;

  fondoLoteria: boolean = true;
  fondoLotto: boolean = false;
  fondoPozo: boolean = false;

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
