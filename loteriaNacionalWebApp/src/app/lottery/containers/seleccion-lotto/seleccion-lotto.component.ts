import { Component, Input, OnInit } from '@angular/core';
import { ticketsLotto } from '../../interfaces/lottery.interface';

@Component({
  selector: 'app-seleccion-lotto',
  templateUrl: './seleccion-lotto.component.html',
  styleUrls: ['./seleccion-lotto.component.scss']
})
export class SeleccionLottoComponent implements OnInit {

  @Input() tickets: ticketsLotto[];

  ticketsLotto: ticketsLotto[];

  constructor() { }

  seleccionarTicket(id: number) {
    this.ticketsLotto.forEach( element => {
      if(element.identificador === id) {
        element.status = !element.status
      }
    })
    console.log(id)
    
    localStorage.setItem("ticketsLotto", JSON.stringify(this.ticketsLotto));
  }

  ngOnInit() {
    this.ticketsLotto = JSON.parse(localStorage.getItem("ticketsLotto"));
  }

}
