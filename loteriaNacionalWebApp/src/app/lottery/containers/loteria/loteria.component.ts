import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loteria",
  templateUrl: "./loteria.component.html",
  styleUrls: ["./loteria.component.scss"],
})
export class LoteriaComponent implements OnInit {
  tickets: any;

  numeros:any = [
    {numero1: 1, numero2: 4, numero3: 5, numero4: 7, numero5: 4},
    {numero1: 8, numero2: 4, numero3: 5, numero4: 7, numero5: 4},
    {numero1: 3, numero2: 4, numero3: 5, numero4: 7, numero5: 4},
    {numero1: 4, numero2: 4, numero3: 5, numero4: 7, numero5: 4},
    {numero1: 9, numero2: 4, numero3: 5, numero4: 7, numero5: 4},
    {numero1: 5, numero2: 4, numero3: 5, numero4: 7, numero5: 4},
    {numero1: 4, numero2: 4, numero3: 5, numero4: 7, numero5: 4},
    {numero1: 2, numero2: 4, numero3: 5, numero4: 7, numero5: 4},
    {numero1: 6, numero2: 4, numero3: 5, numero4: 7, numero5: 4},
    {numero1: 7, numero2: 4, numero3: 5, numero4: 7, numero5: 4},
    {numero1: 5, numero2: 4, numero3: 5, numero4: 7, numero5: 4},
    {numero1: 2, numero2: 4, numero3: 5, numero4: 7, numero5: 4},
  ];
  pageActual: number = 0;

  incrementar() {
    if (this.pageActual >= this.numeros.length / 9) {
      this.pageActual - 1;
    } else {
      this.pageActual++;
    }
  }

  decrementar() {
    if (this.pageActual <= 0) {
      this.pageActual = 1;
    }
    this.pageActual--;
  }
  
  loteriaTickets:number[];

  constructor() {}

  async ngOnInit() {
   /*  this.tickets = localStorage.setItem('loteriaTickets', JSON.stringify('loteriaTickets')); */

    /* this.tickets = JSON.parse(localStorage.getItem('loteriaTickets')); */
  }
}
