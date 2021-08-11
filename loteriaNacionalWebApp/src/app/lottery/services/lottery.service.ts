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
  }

  obtenerSorteo(token, loteria: number) {
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
            .get(address, {
              params: {
                token
              },
              headers: headers
            })
            .subscribe((data: any) => {
              let sorteosJugados: Array<sorteo> = data;
              console.log(sorteosJugados);
              sorteosJugados.sort(this.ordenaSorteos);
              resolve(sorteosJugados);
            });
        });
        break;
      case 2:
        endpoint = `${endpoint}/lottoSorteosDisponibles`;
        console.log("Recuperando sorteos de lotto");
        var address = this.mySource;

        address = address + endpoint;
        return new Promise<Array<sorteo>>((resolve, reject) => {
          this.http
            .get(address, {
              params: {
                token
              },
              headers: headers
            })
            .subscribe((data: any) => {
              let sorteosJugados: Array<sorteo> = data;
              sorteosJugados.sort(this.ordenaSorteos);
              resolve(sorteosJugados);
            });
        });
        break;
      case 5:
        endpoint = `${endpoint}/pozoSorteosDisponibles`;
        console.log("Recuperando sorteos de pozo millonario");
        var address = this.mySource;

        address = address + endpoint;
        return new Promise<Array<sorteo>>((resolve, reject) => {
          this.http
            .get(address, {
              params: {
                token
              },
              headers: headers
            })
            .subscribe((data: any) => {
              let sorteosJugados: Array<sorteo> = data;
              console.log(sorteosJugados);
              sorteosJugados.sort(this.ordenaSorteos);
              resolve(sorteosJugados);
            });
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
    token,
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
      token,
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
        endpoint = `${endpoint}/pozoCombinacionesDisponibles`;
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

  obtenerMascota(mascota) {
    let mascotaPath;
    switch (mascota) {
      case "01":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Camaron.JPG";
        break;
      case "02":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Delfin.JPG";
        break;
      case "03":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Perro.JPG";
        break;
      case "04":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Llama.JPG";
        break;
      case "05":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Papagayo.JPG";
        break;
      case "06":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Conejo.JPG";
        break;
      case "07":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Mono.JPG";
        break;
      case "08":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Galapago.JPG";
        break;
      case "09":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Tucan.JPG";
        break;
      case "10":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Ballena.JPG";
        break;
      case "11":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Oso.JPG";
        break;
      case "12":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Foca.JPG";
        break;
      case "13":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Cangrejo.JPG";
        break;
      case "14":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Condor.JPG";
        break;
      case "15":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Iguana.JPG";
        break;
      case "16":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Caballo.JPG";
        break;
      case "17":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Rana.JPG";
        break;
      case "18":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Tiburon.JPG";
        break;
      case "19":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Caracol.JPG";
        break;
      case "20":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Oveja.JPG";
        break;
      case "21":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Gallo.JPG";
        break;
      case "22":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Abeja.JPG";
        break;
      case "23":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Mariposa.JPG";
        break;
      case "24":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Pez.JPG";
        break;
      case "25":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Pinguino.JPG";
        break;
      case "26":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Cocodrilo.JPG";
        break;
      case "27":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Vaca.JPG";
        break;
      case "28":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Chanchito.JPG";
        break;
      case "29":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Tigre.JPG";
        break;
      case "30":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Gato.JPG";
        break;

      default:
        break;
    }
    return mascotaPath;
  }

  obtenerAnimalesSelecionados() {
    this.animales = [
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Camaron.JPG",
        nombre: "Camarón",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Cangrejo.JPG",
        nombre: "Cangrejo",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Ballena.JPG",
        nombre: "Ballena",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Condor.JPG",
        nombre: "Cóndor",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Conejo.JPG",
        nombre: "Conejo",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Delfin.JPG",
        nombre: "Delfín",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Foca.JPG",
        nombre: "Foca",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Galapago.JPG",
        nombre: "Galápago",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Iguana.JPG",
        nombre: "Iguana",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Llama.JPG",
        nombre: "Llama",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Mono.JPG",
        nombre: "Mono",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Oso.JPG",
        nombre: "Oso",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Papagayo.JPG",
        nombre: "Papagayo",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Perro.JPG",
        nombre: "Perro",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tucan.JPG",
        nombre: "Tucán",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Caballo.JPG",
        nombre: "Caballo",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Rana.JPG",
        nombre: "Rana",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tiburon.JPG",
        nombre: "Tiburón",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Caracol.JPG",
        nombre: "Caracol",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Oveja.JPG",
        nombre: "Oveja",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Gallo.JPG",
        nombre: "Gallo",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Abeja.JPG",
        nombre: "Abeja",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Mariposa.JPG",
        nombre: "Mariposa",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Pez.JPG",
        nombre: "Pez",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Pinguino.JPG",
        nombre: "Pingüino",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Cocodrilo.JPG",
        nombre: "Cocodrilo",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Vaca.JPG",
        nombre: "Vaca",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Chanchito.JPG",
        nombre: "Chanchito",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tigre.JPG",
        nombre: "Tigre",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Gato.JPG",
        nombre: "Gato",
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
