import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tooltip",
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.scss"],
})
export class TooltipComponent implements OnInit {

  @Input() numeros:any;
  @Input() ticket:any;

  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;
  checkbox4: boolean = false;
  checkbox5: boolean = false;
  checkbox6: boolean = false;
  checkbox7: boolean = false;
  checkbox8: boolean = false;
  checkbox9: boolean = false;
  checkbox10: boolean = false;
  
  cheks: any = [
    { numero: 1, variable: this.checkbox1 },
    { numero: 2, variable: this.checkbox2 },
    { numero: 3, variable: this.checkbox3 },
    { numero: 4, variable: this.checkbox4 },
    { numero: 5, variable: this.checkbox5 },
    { numero: 6, variable: this.checkbox6 },
    { numero: 7, variable: this.checkbox7 },
    { numero: 8, variable: this.checkbox8 },
    { numero: 9, variable: this.checkbox9 },
    { numero: 10, variable: this.checkbox10 },
  ];

  mostrar: boolean = false;
  fondo: boolean = false;

  valor: boolean = false;
  loteriaTickets: any = [];

  /* agregarTicket(numeroTicket, estado, ticket) {
    this.loteriaTickets.push({ticket: ticket, numeroTicket: numeroTicket, estado: estado});

    if(estado == true){
      localStorage.setItem('loteriaTickets' , JSON.stringify(this.loteriaTickets));
      localStorage.setItem('loterianumero' + ticket, JSON.stringify(numeroTicket));
    } else { 
      localStorage.removeItem('loterianumero' +  ticket);
      localStorage.removeItem('loteriaTickets');
    }
  } */

  constructor() {}

  async ngOnInit() {}
}
