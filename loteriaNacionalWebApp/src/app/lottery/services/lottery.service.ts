import { Injectable } from "@angular/core";
import { animales, ticketsAnimales, sorteo, ticketsLotto, ticketsNacional } from '../interfaces/lottery.interface';

@Injectable({
  providedIn: "root"
})
export class LotteryService {
  sorteo: sorteo[];

  ticketsNacional: ticketsNacional[];
  ticketsLotto: ticketsLotto[];
  ticketsAnimales: ticketsAnimales[];
  animales: animales[];
  animalesTabs: animales[];

  constructor() {
    this.obtenerAnimalesSelecionados()
    this.obtenerTicketsNacional()
    this.obtenerTicketsLotto()
    this.obtenerTicketsAnimales() 
    this.obtenerAnimalesTabs()
  }

  obtenerSorteo(loteria: number) {
    switch (loteria) {
      case 1:
        return (this.sorteo = [
          {
            fecha: "15/08/21",
            premio: "1500",
            precio: "12",
            fracciones: 40,
            numero: "6528"
          },
          {
            fecha: "16/08/21",
            premio: "1800",
            precio: "18",
            fracciones: 30,
            numero: "6527"
          },
          {
            fecha: "17/08/21",
            premio: "1305",
            precio: "150",
            fracciones: 20,
            numero: "6529"
          }
        ]);

      case 2:
        return (this.sorteo = [
          {
            fecha: "16/08/21",
            premio: "250000",
            precio: "18",
            fracciones: 1,
            numero: "2514"
          },
          {
            fecha: "17/08/21",
            premio: "200000",
            precio: "23",
            fracciones: 1,
            numero: "2531"
          },
          {
            fecha: "18/08/21",
            premio: "180000",
            precio: "100",
            fracciones: 1,
            numero: "2536"
          }
        ]);

      case 5:
        return (this.sorteo = [
          {
            fecha: "20/08/21",
            premio: "200500",
            precio: "15",
            fracciones: 1,
            numero: "930"
          },
          {
            fecha: "16/08/21",
            premio: "180000",
            precio: "23",
            fracciones: 1,
            numero: "931"
          },
          {
            fecha: "17/08/21",
            premio: "30000",
            precio: "18",
            fracciones: 1,
            numero: "932"
          },
          {
            fecha: "12/08/21",
            premio: "80000",
            precio: "13",
            fracciones: 1,
            numero: "972"
          }
        ]);
    }
  }

  obtenerTicketsNacional() {
    this.ticketsNacional = [
      {
        numeros: [1, 4, 5, 7, 4],
        seleccionados: [],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [8, 4, 5, 7, 4],
        seleccionados: [],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [3, 4, 5, 7, 4],
        seleccionados: [],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [4, 4, 5, 7, 4],
        seleccionados: [],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [9, 4, 5, 7, 4],
        seleccionados: [],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [5, 4, 5, 7, 4],
        seleccionados: [],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [2, 4, 5, 7, 4],
        seleccionados: [],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [6, 4, 5, 7, 4],
        seleccionados: [],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [4, 4, 5, 7, 4],
        seleccionados: [],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [6, 4, 5, 7, 4],
        seleccionados: [],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [4, 4, 5, 7, 4],
        seleccionados: [],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [5, 5, 5, 8, 4],
        seleccionados: [],
        status: false,
        identificador: Math.random()
      }
    ];

    localStorage.setItem('ticketsNacional', JSON.stringify(this.ticketsNacional));
  }

  obtenerTicketsLotto() {
    this.ticketsLotto = [
      {
        numeros: [1, 4, 5, 7, 4],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [8, 4, 5, 7, 4],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [3, 4, 5, 7, 4],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [4, 4, 5, 7, 4],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [9, 4, 5, 7, 4],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [5, 4, 5, 7, 4],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [2, 4, 5, 7, 4],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [6, 4, 5, 7, 4],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [4, 4, 5, 7, 4],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [6, 4, 5, 7, 4],
        status: false,
        identificador: Math.random()
      },
      {
        numeros: [4, 4, 5, 7, 4],
        status: false,
        identificador: Math.random()
      }
    ];

    localStorage.setItem('ticketsLotto', JSON.stringify(this.ticketsLotto));
  }

  obtenerTicketsAnimales() {
    this.ticketsAnimales = [
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-ballena.png",
          nombre: 'ballena',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-camaron.png",
          nombre: 'camaron',
        numero: [12, 54, 32, 58, 64, 72, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-foca.png",
        nombre: 'foca',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-perro.png",
        nombre: 'perro',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
          nombre: 'congrejo',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-conejo.png",
        nombre: 'conejo',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-delfin.png",
        nombre: 'delfin',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
        nombre: 'mono',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
        nombre: 'mono',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
        nombre: 'mono',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
          nombre: 'congrejo',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
          nombre: 'congrejo',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
          nombre: 'congrejo',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
          nombre: 'congrejo',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
          nombre: 'congrejo',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
          nombre: 'congrejo',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
          nombre: 'congrejo',
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
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

  obtenerAnimalesTabs() {
    this.animalesTabs = [];

    localStorage.setItem('animalesTabs', JSON.stringify(this.animalesTabs));

  }
}
