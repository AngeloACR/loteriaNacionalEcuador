import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  numeros:number[] = [1, 4, 5, 7, 4]; 
  
  mostrar:boolean = false;
  fondo:boolean = false;

  checkbox1:boolean = false;
  checkbox2:boolean = false;
  checkbox3:boolean = false;
  checkbox4:boolean = false;
  checkbox5:boolean = false;
  checkbox6:boolean = false;
  checkbox7:boolean = false;
  checkbox8:boolean = false;
  checkbox9:boolean = false;
  checkbox10:boolean = false;

  constructor() { }

  async ngOnInit() {
  }

}
