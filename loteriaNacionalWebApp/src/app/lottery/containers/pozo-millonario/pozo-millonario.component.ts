import { Component, Input, OnInit } from "@angular/core";
import { LotteryService } from "../../services/lottery.service";
import { animales, ticketsAnimales, sorteo } from '../../interfaces/lottery.interface';
import { PageEvent } from "@angular/material";


@Component({
  selector: "app-pozo-millonario",
  templateUrl: "./pozo-millonario.component.html",
  styleUrls: ["./pozo-millonario.component.scss"]
})
export class PozoMillonarioComponent implements OnInit {

  sorteo: sorteo[];

  seleccionAnimales: animales[];
  animalesTabs: animales[] = [];
  
  ticketAnimales: ticketsAnimales[];
  /* animalesSeleccionadosTicket: ticketsAnimales[] = []; */

  page_size: number = 4;
  page_number: number = 1;
  pageSizeOptions: [5, 10, 20, 100];

  constructor(private lotteryService: LotteryService) {}

  agregar(animal: string, i: number) {
    if(this.seleccionAnimales[i].status === false) {
      this.seleccionAnimales[i].status = true
      this.animalesTabs.push({nombre:animal, status:true})

    } else {
      this.seleccionAnimales[i].status = false
      this.animalesTabs = this.animalesTabs.filter( element => {
        return element.nombre !== animal
      })
    }
    localStorage.setItem("animalesSeleccionados", JSON.stringify(this.seleccionAnimales));
    localStorage.setItem("animalesTabs", JSON.stringify(this.animalesTabs));
  }

  remover(animal: string) {
    this.animalesTabs = this.animalesTabs.filter( element => {
      return element.nombre !== animal
    })

    this.seleccionAnimales.forEach( (element) => {
      if (element.nombre === animal) {
        return element.status = false
      }  
    });
    
    localStorage.setItem("animalesSeleccionados", JSON.stringify(this.seleccionAnimales));
    localStorage.setItem("animalesTabs", JSON.stringify(this.animalesTabs));
  }
  
  seleccionarTicket(animal: string, i: number) {
    if(this.ticketAnimales[i].status === false) {
      this.ticketAnimales[i].status = true
      /* this.animalesSeleccionadosTicket.push({nombre:animal, status:true}) */

    } else {
      this.ticketAnimales[i].status = false
      /* this.animalesSeleccionadosTicket = this.animalesSeleccionadosTicket.filter( element => {
        return element.nombre !== animal
      }) */
    }
    localStorage.setItem("ticketAnimales", JSON.stringify(this.ticketAnimales));
    /* localStorage.setItem("animalesSeleccionadosTicket", JSON.stringify(this.animalesSeleccionadosTicket)); */
  }

  handlerPage(e: PageEvent) {
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  ngOnInit() {
    this.seleccionAnimales = JSON.parse(localStorage.getItem("animalesSeleccionados"));
    this.animalesTabs = JSON.parse(localStorage.getItem("animalesTabs"));

    this.ticketAnimales = JSON.parse(localStorage.getItem("ticketAnimales"));
    /* this.animalesSeleccionadosTicket = JSON.parse(localStorage.getItem("animalesSeleccionadosTicket")); */

    //TODO: Preguntar como quiere que venga la variable tabs, si llena o no
    this.seleccionAnimales.forEach( element => {
      this.animalesTabs.forEach( elemento => {
        if(elemento.nombre === element.nombre) {
          element.status = elemento.status;
        }
      }) 
    })
    localStorage.setItem("animalesSeleccionados", JSON.stringify(this.seleccionAnimales));

    this.ticketAnimales = JSON.parse(localStorage.getItem("ticketAnimales"));
    this.sorteo = this.lotteryService.obtenerSorteo(5);
  }
}
