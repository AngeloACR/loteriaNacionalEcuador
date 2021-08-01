import { Component, Input, OnInit } from '@angular/core';
import { ticketsAnimales } from '../../interfaces/lottery.interface';

@Component({
  selector: 'app-seleccion-pozo',
  templateUrl: './seleccion-pozo.component.html',
  styleUrls: ['./seleccion-pozo.component.scss']
})
export class SeleccionPozoComponent implements OnInit {

  @Input() tickets: ticketsAnimales[];

  constructor() { 
    
  }

  ngOnInit() {
  }

}
