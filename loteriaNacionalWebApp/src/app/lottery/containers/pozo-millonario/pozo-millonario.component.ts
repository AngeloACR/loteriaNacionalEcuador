import { Component, Input, OnInit } from "@angular/core";
import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-pozo-millonario",
  templateUrl: "./pozo-millonario.component.html",
  styleUrls: ["./pozo-millonario.component.scss"]
})
export class PozoMillonarioComponent implements OnInit {
  tickets: any;

  arreglo_animales: string[] = [];

  pageActual: number = 1;
  desaparecer_izquierdo: boolean = true;
  desaparecer_derecho: boolean = false;

  numeros: object[] = [];
  sorteo: any;
  premioPrecio: any;

  seleccionPozo: object[] = [
    {
      animal:
        "../../../../assets/mascotas/mascotas pozo millonario-ballena.png",
      numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99]
    },
    {
      animal:
        "../../../../assets/mascotas/mascotas pozo millonario-camaron.png",
      numero: [12, 54, 32, 58, 64, 72, 44, 7, 45, 23, 67, 99]
    },
    {
      animal: "../../../../assets/mascotas/mascotas pozo millonario-foca.png",
      numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99]
    },
    {
      animal: "../../../../assets/mascotas/mascotas pozo millonario-perro.png",
      numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99]
    },
    {
      animal:
        "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
      numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99]
    },
    {
      animal: "../../../../assets/mascotas/mascotas pozo millonario-conejo.png",
      numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99]
    },
    {
      animal: "../../../../assets/mascotas/mascotas pozo millonario-delfin.png",
      numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99]
    },
    {
      animal: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
      numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99]
    },
    {
      animal: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
      numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99]
    }
  ];

  constructor(private lotteryService: LotteryService) {}

  incrementar() {
    if (this.pageActual >= this.seleccionPozo.length / 4) {
      this.desaparecer_derecho = true;
    } else {
      this.pageActual++;
    }

    if (this.pageActual === 1) {
      this.desaparecer_izquierdo = true;
    } else {
      this.desaparecer_izquierdo = false;
    }
    console.log(this.pageActual);
  }

  decrementar() {
    if (this.pageActual <= 1) {
      this.pageActual = 1;
      this.desaparecer_izquierdo = true;
    } else {
      this.pageActual--;
      this.desaparecer_derecho = false;
    }
    console.log(this.pageActual);
  }

  irPage(page: number) {
    this.pageActual = page;
  }

  remover(animal: string) {
    this.arreglo_animales = this.arreglo_animales.filter(function(i: string) {
      return i !== animal;
    });
    console.log(this.arreglo_animales);
  }

  ngOnInit() {
    this.sorteo = this.lotteryService.obtenerSorteo();
    this.premioPrecio = this.lotteryService.obtenerPremioPrecio(3);
  }
}
