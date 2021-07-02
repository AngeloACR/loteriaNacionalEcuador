import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion-pozo',
  templateUrl: './seleccion-pozo.component.html',
  styleUrls: ['./seleccion-pozo.component.scss']
})
export class SeleccionPozoComponent implements OnInit {

  @Input() tickets: any;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
