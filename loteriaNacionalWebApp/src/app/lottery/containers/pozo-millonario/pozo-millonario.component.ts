import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-pozo-millonario",
  templateUrl: "./pozo-millonario.component.html",
  styleUrls: ["./pozo-millonario.component.scss"]
})
export class PozoMillonarioComponent implements OnInit {
  tickets: any;

  arreglo_animales: string[] = [];

  seleccionPozo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];
  pageActual: number = 1;

  incrementar() {
    if (this.pageActual >= this.seleccionPozo.length / 4) {
      this.pageActual - 1;
    } else {
      this.pageActual++;
    }
  }

  decrementar() {
    this.pageActual--;
    if (this.pageActual <= 1) {
      this.pageActual = 1;
    }
  }

  remover(animal: string) {
    this.arreglo_animales = this.arreglo_animales.filter(function(i: string) {
      return i !== animal;
    });
    console.log(this.arreglo_animales);
  }

  constructor() {}

  ngOnInit() {}
}
