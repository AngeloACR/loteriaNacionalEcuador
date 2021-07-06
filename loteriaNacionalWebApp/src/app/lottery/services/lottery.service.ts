import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LotteryService {
  sorteo: object[] = [];
  premioPrecio: string[] = [];

  constructor() {}

  obtenerSorteo() {
    return (this.sorteo = [
      {
        fecha: "15/08/21",
        premio: '',
        precio: '',
        fracciones: '',
        numero: '',
      },
      {
        fecha: "16/08/21",
        premio: '',
        precio: '',
        fracciones: '',
        numero: '',
      },
      {
        fecha: "17/08/21",
        premio: '',
        precio: '',
        fracciones: '',
        numero: '',
      },
    ]);
  }

  obtenerPremioPrecio(loteria: number) {  // 1 - Loteria nacional, 2 - lotto, 3 - pozo
    switch (loteria) {
      case 1:
        return (this.premioPrecio = ["200000", "15"]);

      case 2:
        return (this.premioPrecio = ["150000","23"]);

      case 3:
        return (this.premioPrecio = ["180000", "8"]);

    }
  }
}
