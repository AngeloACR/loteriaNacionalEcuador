import { Injectable } from "@angular/core";
import { animales, ticketsAnimales, sorteo } from '../interfaces/lottery.interface';

@Injectable({
  providedIn: "root"
})
export class LotteryService {
  sorteo: sorteo[];
  ticketsAnimales: ticketsAnimales[];
  animales: animales[];

  constructor() {
    this.obtenerAnimalesSelecionados()
    this.obtenerTicketsAnimales() 
  }

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
            fecha: "16/08/21",
            premio: "200000",
            precio: "15",
            fracciones: "1",
            numero: "2514"
          },
          {
            fecha: "17/08/21",
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
            fecha: "20/08/21",
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

  obtenerTicketsAnimales() {
    this.ticketsAnimales = [
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-ballena.png",
          nombre: 'ballena',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-camaron.png",
          nombre: 'camaron',
        numero: [12, 54, 32, 58, 64, 72, 44, 7, 45, 23, 67, 99],
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-foca.png",
        nombre: 'foca',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-perro.png",
        nombre: 'perro',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
          nombre: 'congrejo',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-conejo.png",
        nombre: 'conejo',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-delfin.png",
        nombre: 'delfin',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
        nombre: 'mono',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
        nombre: 'mono',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
        nombre: 'mono',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false
      }
    ];

    localStorage.setItem('ticketAnimales', JSON.stringify(this.ticketsAnimales));
  }

  obtenerAnimalesSelecionados() {
    this.animales = [
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-camaron.png",
        nombre: "Camarón",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
        nombre: "Cangrejo",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-ballena.png",
        nombre: "Ballena",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-condor.png",
        nombre: "Cóndor",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-conejo.png",
        nombre: "Conejo",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-delfin.png",
        nombre: "Delfín",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-foca.png",
        nombre: "Foca",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-galapago.png",
        nombre: "Galápago",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-iguana.png",
        nombre: "Iguana",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-llama.png",
        nombre: "Llama",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
        nombre: "Mono",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-oso.png",
        nombre: "Oso",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-papagayo.png",
        nombre: "Papagayo",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-perro.png",
        nombre: "Perro",
        status: false,
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-tucan.png",
        nombre: "Tucán",
        status: false,
      },
    ];

    localStorage.setItem('animalesSeleccionados', JSON.stringify(this.animales));

    /* console.log(this.animales) */
  }
}
