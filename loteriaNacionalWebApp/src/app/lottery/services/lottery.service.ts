import { Injectable } from "@angular/core";
import {
  animales,
  ticketsAnimales,
  sorteo,
  ticketsLotto,
  ticketsNacional
} from "../interfaces/lottery.interface";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class LotteryService {
  localSource = "http://localhost:5480";
  testSource = "https://ventas-api-prueba.loteria.com.ec";
  productionSource = "https://ventas-api.loteria.com.ec";

  //mySource = this.localSource;
  mySource = this.testSource;
  //mySource = this.productionSource;

  sorteo: Array<sorteo>;

  ticketsNacional: ticketsNacional[];
  ticketsLotto: ticketsLotto[];
  ticketsAnimales: ticketsAnimales[];
  animales: animales[];

  constructor(private http: HttpClient) {
    this.obtenerAnimalesSelecionados();
    /*  this.obtenerTicketsNacional();
    this.obtenerTickets();
    this.obtenerTicketsAnimales();
   */
  }

  obtenerSorteo(loteria: number) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //let endpoint = "/inquiry";
    let endpoint = "/lottery";
    switch (loteria) {
      case 1:
        endpoint = `${endpoint}/loteriaSorteosDisponibles`;
        console.log("Recuperando sorteos de loteria");
        var address = this.mySource;

        address = address + endpoint;
        return new Promise<Array<sorteo>>((resolve, reject) => {
          this.http
            .get(address, { headers: headers })
            .subscribe((data: any) => {
              let sorteosJugados: Array<sorteo> = data;
              console.log(sorteosJugados);
              sorteosJugados.sort(this.ordenaSorteos);
              resolve(sorteosJugados);
            });
          this.sorteo = [
            {
              fecha: "15/08/21",
              valorPremioPrincipal: "1500",
              precio: "12",
              cantidadDeFracciones: 40,
              sorteo: "6528",
              nombre: "Sorteo 6558"
            },
            {
              fecha: "16/08/21",
              valorPremioPrincipal: "1800",
              precio: "18",
              cantidadDeFracciones: 30,
              sorteo: "6527",
              nombre: "Sorteo 6558"
            },
            {
              fecha: "17/08/21",
              valorPremioPrincipal: "1305",
              precio: "150",
              cantidadDeFracciones: 20,
              sorteo: "6529",
              nombre: "Sorteo 6558"
            }
          ];
        });
        break;
      case 2:
        endpoint = `${endpoint}/lottoSorteosDisponibles`;
        console.log("Recuperando sorteos de lotto");
        var address = this.mySource;

        address = address + endpoint;
        return new Promise<Array<sorteo>>((resolve, reject) => {
          this.http
            .get(address, { headers: headers })
            .subscribe((data: any) => {
              let sorteosJugados: Array<sorteo> = data;
              console.log(sorteosJugados);
              sorteosJugados.sort(this.ordenaSorteos);
              resolve(sorteosJugados);
            });
          this.sorteo = [
            {
              fecha: "15/08/21",
              valorPremioPrincipal: "1500",
              precio: "12",
              cantidadDeFracciones: 40,
              sorteo: "6528",
              nombre: "Sorteo 6558"
            },
            {
              fecha: "16/08/21",
              valorPremioPrincipal: "1800",
              precio: "18",
              cantidadDeFracciones: 30,
              sorteo: "6527",
              nombre: "Sorteo 6558"
            },
            {
              fecha: "17/08/21",
              valorPremioPrincipal: "1305",
              precio: "150",
              cantidadDeFracciones: 20,
              sorteo: "6529",
              nombre: "Sorteo 6558"
            }
          ];
        });
        break;
      case 5:
        endpoint = `${endpoint}/pozoSorteosDisponibles`;
        console.log("Recuperando sorteos de pozo millonario");
        var address = this.mySource;

        address = address + endpoint;
        return new Promise<Array<sorteo>>((resolve, reject) => {
          this.http
            .get(address, { headers: headers })
            .subscribe((data: any) => {
              let sorteosJugados: Array<sorteo> = data;
              console.log(sorteosJugados);
              sorteosJugados.sort(this.ordenaSorteos);
              resolve(sorteosJugados);
            });
          this.sorteo = [
            {
              fecha: "15/08/21",
              valorPremioPrincipal: "1500",
              precio: "12",
              cantidadDeFracciones: 40,
              sorteo: "6528",
              nombre: "Sorteo 6558"
            },
            {
              fecha: "16/08/21",
              valorPremioPrincipal: "1800",
              precio: "18",
              cantidadDeFracciones: 30,
              sorteo: "6527",
              nombre: "Sorteo 6558"
            },
            {
              fecha: "17/08/21",
              valorPremioPrincipal: "1305",
              precio: "150",
              cantidadDeFracciones: 20,
              sorteo: "6529",
              nombre: "Sorteo 6558"
            }
          ];
        });

        break;
    }
  }

  ordenaSorteos(a, b) {
    let a1 = a["sorteo"];
    let b1 = b["sorteo"];
    return b1 - a1;
  }

  obtenerTickets(
    loteria,
    sorteo,
    combinacion,
    combinacionFigura
  ): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //let endpoint = "/inquiry";
    let endpoint = "/lottery";
    let body = {
      sorteo,
      combinacion,
      combinacionFigura
    };
    switch (loteria) {
      case 1:
        endpoint = `${endpoint}/loteriaCombinacionesDisponibles`;
        console.log("Recuperando combinaciones de loteria");
        var address = this.mySource;

        address = address + endpoint;
        return new Promise<Array<ticketsNacional>>((resolve, reject) => {
          this.http
            .post(address, body, { headers: headers })
            .subscribe((data: any) => {
              let combinacionesDisponibles: Array<ticketsNacional> =
                data.combinaciones;
              console.log(combinacionesDisponibles);
              resolve(combinacionesDisponibles);
            });
        });
        break;
      case 2:
        endpoint = `${endpoint}/lottoCombinacionesDisponibles`;
        console.log("Recuperando combinaciones de lotto");
        var address = this.mySource;

        address = address + endpoint;
        return new Promise<Array<ticketsLotto>>((resolve, reject) => {
          this.http
            .post(address, body, { headers: headers })
            .subscribe((data: any) => {
              let combinacionesDisponibles: Array<ticketsLotto> =
                data.combinaciones;
              console.log(combinacionesDisponibles);
              resolve(combinacionesDisponibles);
            });
        });
        break;
      case 5:
        endpoint = `${endpoint}/pozoCombinacionessDisponibles`;
        console.log("Recuperando combinaciones de pozo millonario");
        var address = this.mySource;

        address = address + endpoint;
        return new Promise<Array<ticketsAnimales>>((resolve, reject) => {
          this.http
            .post(address, body, { headers: headers })
            .subscribe((data: any) => {
              let combinacionesDisponibles: Array<ticketsAnimales> =
                data.combinaciones;
              console.log(combinacionesDisponibles);
              resolve(combinacionesDisponibles);
            });
        });

        break;
    }
  }

  obtenerTicketsAnimales() {
    this.ticketsAnimales = [
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-ballena.png",
        nombre: "ballena",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-camaron.png",
        nombre: "camaron",
        numero: [12, 54, 32, 58, 64, 72, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-foca.png",
        nombre: "foca",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-perro.png",
        nombre: "perro",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
        nombre: "congrejo",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-conejo.png",
        nombre: "conejo",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-delfin.png",
        nombre: "delfin",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
        nombre: "mono",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
        nombre: "mono",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
        nombre: "mono",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
        nombre: "congrejo",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
        nombre: "congrejo",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
        nombre: "congrejo",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
        nombre: "congrejo",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
        nombre: "congrejo",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
        nombre: "congrejo",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
        nombre: "congrejo",
        numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
        status: false,
        identificador: Math.random()
      }
    ];

    localStorage.setItem(
      "ticketAnimales",
      JSON.stringify(this.ticketsAnimales)
    );
  }

  obtenerAnimalesSelecionados() {
    this.animales = [
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-camaron.png",
        nombre: "Camarón",
        status: false
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
        nombre: "Cangrejo",
        status: false
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-ballena.png",
        nombre: "Ballena",
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-condor.png",
        nombre: "Cóndor",
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-conejo.png",
        nombre: "Conejo",
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-delfin.png",
        nombre: "Delfín",
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-foca.png",
        nombre: "Foca",
        status: false
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-galapago.png",
        nombre: "Galápago",
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-iguana.png",
        nombre: "Iguana",
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-llama.png",
        nombre: "Llama",
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
        nombre: "Mono",
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-oso.png",
        nombre: "Oso",
        status: false
      },
      {
        ruta:
          "../../../../assets/mascotas/mascotas pozo millonario-papagayo.png",
        nombre: "Papagayo",
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-perro.png",
        nombre: "Perro",
        status: false
      },
      {
        ruta: "../../../../assets/mascotas/mascotas pozo millonario-tucan.png",
        nombre: "Tucán",
        status: false
      }
    ];

    localStorage.setItem(
      "animalesSeleccionados",
      JSON.stringify(this.animales)
    );

    /* console.log(this.animales) */
  }
}
