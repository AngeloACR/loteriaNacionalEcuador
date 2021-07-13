import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LotteryService {
  sorteo: object[] = [];
  premioPrecio: string[] = [];

  constructor() {}

  obtenerSorteo(loteria: number) {
    switch (loteria) {
      case 1:
        return (this.sorteo = [
          {
            fecha: "15/08/21",
            premio: "200000",
            precio: "15",
            fracciones: "40",
            numero: "6526"
          },
          {
            fecha: "16/08/21",
            premio: "200000",
            precio: "15",
            fracciones: "30",
            numero: "6526"
          },
          {
            fecha: "17/08/21",
            premio: "200000",
            precio: "15",
            fracciones: "20",
            numero: "6526"
          }
        ]);

      case 2:
        return (this.sorteo = [
          {
            fecha: "15/08/21",
            premio: "200000",
            precio: "15",
            fracciones: "1",
            numero: "2514"
          },
          {
            fecha: "16/08/21",
            premio: "200000",
            precio: "15",
            fracciones: "1",
            numero: "2531"
          },
          {
            fecha: "17/08/21",
            premio: "200000",
            precio: "15",
            fracciones: "1",
            numero: "2536"
          }
        ]);

      case 5:
        return (this.sorteo = [
          {
            fecha: "15/08/21",
            premio: "200000",
            precio: "15",
            fracciones: "1",
            numero: "930"
          },
          {
            fecha: "16/08/21",
            premio: "200000",
            precio: "15",
            fracciones: "1",
            numero: "931"
          },
          {
            fecha: "17/08/21",
            premio: "200000",
            precio: "15",
            fracciones: "1",
            numero: "932"
          }
        ]);
    }
  }

  obtenerPremioPrecio(loteria: number) {
    // 1 - Loteria nacional, 2 - lotto, 3 - pozo
    switch (loteria) {
      case 1:
        return (this.premioPrecio = ["200000", "15"]);

      case 2:
        return (this.premioPrecio = ["150000", "23"]);

      case 5:
        return (this.premioPrecio = ["180000", "8"]);
    }
  }
}
