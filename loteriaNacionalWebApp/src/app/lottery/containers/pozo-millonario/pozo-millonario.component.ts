import { Component, Input, OnInit } from "@angular/core";
import { LotteryService } from "../../services/lottery.service";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import {
  animales,
  ticketsAnimales,
  sorteo
} from "../../interfaces/lottery.interface";
import { PageEvent } from "@angular/material";
import { ReturnStatement } from "@angular/compiler";

@Component({
  selector: "app-pozo-millonario",
  templateUrl: "./pozo-millonario.component.html",
  styleUrls: ["./pozo-millonario.component.scss"]
})
export class PozoMillonarioComponent implements OnInit {
  sorteo: sorteo[];
  combinacionDeLaSuerte: string[] = ["", "", "", ""];

  seleccionAnimales: animales[];
  animalesTabs: animales[] = [];

  ticketAnimales: ticketsAnimales[];

  page_size: number = 6;
  page_number: number = 1;
  pageSizeOptions: [5, 10, 20, 100];
  showNumeros: boolean = false;
  token: string;
  usuario: string;
  constructor(
    private lotteryService: LotteryService,
    private actRoute: ActivatedRoute
  ) {
    this.actRoute.params.subscribe(params => {
      this.token = params["token"];
      console.log(this.token);
    });
  }

  agregar(animal: animales, i: number) {
    console.log(animal);
    if (this.seleccionAnimales[i].status === false) {
      this.seleccionAnimales[i].status = true;
      this.animalesTabs.push(this.seleccionAnimales[i]);
    } else {
      this.seleccionAnimales[i].status = false;
      this.animalesTabs = this.animalesTabs.filter(element => {
        return element.nombre !== animal.nombre;
      });
    }
    localStorage.setItem(
      "animalesSeleccionados",
      JSON.stringify(this.seleccionAnimales)
    );
    localStorage.setItem("animalesTabs", JSON.stringify(this.animalesTabs));
  }

  remover(animal: string) {
    this.animalesTabs = this.animalesTabs.filter(element => {
      return element.nombre !== animal;
    });

    this.seleccionAnimales.forEach(element => {
      if (element.nombre === animal) {
        return (element.status = false);
      }
    });

    localStorage.setItem(
      "animalesSeleccionados",
      JSON.stringify(this.seleccionAnimales)
    );
    localStorage.setItem("animalesTabs", JSON.stringify(this.animalesTabs));
  }

  seleccionarTicket(id: number) {
    this.ticketAnimales.forEach(element => {
      if (element.identificador === id) {
        element.status = !element.status;
      }
    });

    localStorage.setItem("ticketAnimales", JSON.stringify(this.ticketAnimales));
  }

  handlerPage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  obtenerMascota(mascota) {
    return this.lotteryService.obtenerMascota(mascota);
  }

  ordenaCombinacion(a, b) {
    return a - b;
  }
  async buscarNumero() {
    try {
      this.loadingMessage = "Buscando combinaciones disponibles";
      this.isLoading = true;
      if (this.sorteoSeleccionado.nombre != "default") {
        /*this.ticketsNacional = JSON.parse(
        localStorage.getItem("ticketsNacional")
        );*/
        this.showNumeros = false;
        let isHigher = false;
        this.combinacionDeLaSuerte.forEach(number => {
          let aux = parseInt(number);
          if (aux > 25) {
            isHigher = true;
          }
        });
        let combinacion = this.combinacionDeLaSuerte.map(number => {
          let numero = number;
          if (numero.length < 2) {
            numero = `0${numero}`;
          } else if (numero.length > 2) {
            let length = numero.length;
            numero = `${numero[length - 2]}${numero[length - 1]}`;
          }
          console.log(numero);
          if (numero == "0" || numero == "00") {
            return "";
          }
          return numero;
        });
        let combinacionFigura = this.animalesTabs.map(animal => {
          return animal.identificador;
        });
        combinacion.sort(this.ordenaCombinacion);
        combinacionFigura.sort(this.ordenaCombinacion);
        console.log(combinacion);
        console.log(combinacionFigura);
        if (isHigher) {
          alert(
            "Las números no pueden ser mayores a 25. Por favor, revise el formulario e intente de nuevo."
          );
          return;
        } else{

          this.ticketAnimales = await this.lotteryService.obtenerTickets(
            this.token,
            5,
            this.sorteoSeleccionado.sorteo,
            combinacion.join(""),
            combinacionFigura.join("")
            );
          }

        this.showNumeros = true;
      } else {
        alert("Por favor seleccione un sorteo");
        this.showNumeros = false;
      }
      this.isLoading = false;
    } catch (e) {
      alert(
        "Parece que ha habido un problema, revise el formulario e intente de nuevo"
        );
      this.isLoading = false;
      console.log(e);
    }
  }
  sorteoSeleccionado: sorteo;
  procesaEmitir(sorteo) {
    this.sorteoSeleccionado = sorteo;
    this.ticketAnimales = JSON.parse(localStorage.getItem("ticketsAnimales"));
  }
  isLoading: boolean;
  showComponents: boolean = false;
  loadingMessage: string;
  
  obtenerAnimal(mascota) {
    return this.lotteryService.obtenerMascota(mascota);
  }
  async ngOnInit() {
    this.isLoading = true;
    this.loadingMessage = "Cargando los sorteos disponibles";
    this.seleccionAnimales = JSON.parse(
      localStorage.getItem("animalesSeleccionados")
    );
    this.animalesTabs = JSON.parse(localStorage.getItem("animalesTabs"));

    //TODO: Preguntar como quiere que venga la variable tabs, si llena o no
    this.seleccionAnimales.forEach(element => {
      this.animalesTabs.forEach(elemento => {
        if (elemento.nombre === element.nombre) {
          element.status = elemento.status;
        }
      });
    });
    localStorage.setItem(
      "animalesSeleccionados",
      JSON.stringify(this.seleccionAnimales)
    );

    this.sorteo = await this.lotteryService.obtenerSorteo(this.token, 5);
    this.isLoading = false;
    this.showComponents = true;
  }
}
