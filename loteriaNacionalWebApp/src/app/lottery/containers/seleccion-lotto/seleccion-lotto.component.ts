import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion-lotto',
  templateUrl: './seleccion-lotto.component.html',
  styleUrls: ['./seleccion-lotto.component.scss']
})
export class SeleccionLottoComponent implements OnInit {

  @Input() numeros: any;

  constructor() { }

  ngOnInit() {
  }

}
