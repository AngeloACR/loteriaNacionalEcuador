import { Component, OnInit, Input } from "@angular/core";
import { sorteo, ticketsNacional } from "../../interfaces/lottery.interface";
import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-tooltip",
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.scss"],
})
export class TooltipComponent implements OnInit {

  @Input() ticket: ticketsNacional[];
  @Input() fracciones: number = 0;

  mostrar: boolean = false;
  fondo: boolean = false;
  /* fracciones: sorteo[]; */

  /* contador = []; */

  constructor( private lotteryService: LotteryService) {}


  /* checkbox1: boolean = false;
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
    { numero: 10, variable: this.checkbox10 }
  ]; */

  activar() {
    /* this.contador.length = this.fracciones; */
    this.fondo = !this.fondo
  }

  seleccionarTicket(id: number) {
    this.ticket.forEach( element => {
      if(element.identificador === id) {
        element.status = !element.status
      }
    })
    console.log(id)
    
    localStorage.setItem("ticketsNacional", JSON.stringify(this.ticket));
  }

  seleccionarFraccion() {
    
  }

  ngOnInit() {
    
  }
}
