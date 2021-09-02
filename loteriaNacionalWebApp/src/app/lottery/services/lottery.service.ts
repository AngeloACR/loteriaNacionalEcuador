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
  animalesTabs: animales[];

  constructor(private http: HttpClient) {
    this.obtenerAnimalesSelecionados();
    this.obtenerAnimalesTabs();
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
            .subscribe(
              (data: any) => {
                let sorteosJugados: Array<sorteo> = data;
                console.log(sorteosJugados);
                sorteosJugados.sort(this.ordenaSorteos);
                resolve(sorteosJugados);
              },
              (error: any) => {
                reject(error);
              }
            );
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
            .subscribe(
              (data: any) => {
                let sorteosJugados: Array<sorteo> = data;
                console.log(sorteosJugados);
                sorteosJugados.sort(this.ordenaSorteos);
                resolve(sorteosJugados);
              },
              (error: any) => {
                reject(error);
              }
            );
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
            .subscribe(
              (data: any) => {
                let sorteosJugados: Array<sorteo> = data;
                sorteosJugados.sort(this.ordenaSorteos);
                resolve(sorteosJugados);
              },
              (error: any) => {
                reject(error);
              }
            );
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
          this.http.post(address, body, { headers: headers }).subscribe(
            (data: any) => {
              let combinacionesDisponibles: Array<ticketsNacional> =
                data.combinaciones;
              console.log(combinacionesDisponibles);
              resolve(combinacionesDisponibles);
            },
            (error: any) => {
              reject(error);
            }
          );
        });
        break;
      case 2:
        endpoint = `${endpoint}/lottoCombinacionesDisponibles`;
        console.log("Recuperando combinaciones de lotto");
        var address = this.mySource;

        address = address + endpoint;
        return new Promise<Array<ticketsLotto>>((resolve, reject) => {
          this.http.post(address, body, { headers: headers }).subscribe(
            (data: any) => {
              let combinacionesDisponibles: Array<ticketsLotto> =
                data.combinaciones;
              console.log(combinacionesDisponibles);
              resolve(combinacionesDisponibles);
            },
            (error: any) => {
              reject(error);
            }
          );
        });
        break;
      case 5:
        endpoint = `${endpoint}/pozoCombinacionesDisponibles`;
        console.log("Recuperando combinaciones de pozo millonario");
        var address = this.mySource;

        address = address + endpoint;
        return new Promise<Array<ticketsAnimales>>((resolve, reject) => {
          this.http.post(address, body, { headers: headers }).subscribe(
            (data: any) => {
              let combinacionesDisponibles: Array<ticketsAnimales> =
                data.combinaciones;
              console.log(combinacionesDisponibles);
              resolve(combinacionesDisponibles);
            },
            (error: any) => {
              reject(error);
            }
          );
        });

        break;
    }
  }

  authUser(token): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //let endpoint = "/inquiry";
    let endpoint = "/lottery";
    let body = {
      token
    };
    endpoint = `${endpoint}/auth`;
    var address = this.mySource;

    address = address + endpoint;
    return new Promise<Array<any>>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          console.log(data);
          localStorage.setItem("userData", data);
          resolve(data);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }
  obtenerMascota(mascota) {
    let mascotaPath;
    switch (mascota) {
      case "01":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Camaron.png";
        break;
      case "02":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Delfin.png";
        break;
      case "03":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Perro.png";
        break;
      case "04":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Llama.png";
        break;
      case "05":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Papagayo.png";
        break;
      case "06":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Conejo.png";
        break;
      case "07":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Mono.png";
        break;
      case "08":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Galapago.png";
        break;
      case "09":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Tucan.png";
        break;
      case "10":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Ballena.png";
        break;
      case "11":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Oso.png";
        break;
      case "12":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Foca.png";
        break;
      case "13":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Cangrejo.png";
        break;
      case "14":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Condor.png";
        break;
      case "15":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Iguana.png";
        break;
      case "16":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Caballo.png";
        break;
      case "17":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Rana.png";
        break;
      case "18":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Tiburon.png";
        break;
      case "19":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Caracol.png";
        break;
      case "20":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Oveja.png";
        break;
      case "21":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Gallo.png";
        break;
      case "22":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Abeja.png";
        break;
      case "23":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Mariposa.png";
        break;
      case "24":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Pez.png";
        break;
      case "25":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Pinguino.png";
        break;
      case "26":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Cocodrilo.png";
        break;
      case "27":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Vaca.png";
        break;
      case "28":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Chanchito.png";
        break;
      case "29":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Tigre.png";
        break;
      case "30":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-Gato.png";
        break;

      default:
        break;
    }
    return mascotaPath;
  }

  obtenerAnimalesSelecionados() {
    this.animales = [
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Camaron.png",
        identificador: "01",
        nombre: "Camarón",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Cangrejo.png",
        identificador: "13",
        nombre: "Cangrejo",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Ballena.png",
        identificador: "10",
        nombre: "Ballena",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Condor.png",
        identificador: "14",
        nombre: "Cóndor",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Conejo.png",
        identificador: "06",
        nombre: "Conejo",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Delfin.png",
        identificador: "02",
        nombre: "Delfín",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Foca.png",
        identificador: "12",
        nombre: "Foca",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Galapago.png",
        identificador: "08",
        nombre: "Galápago",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Iguana.png",
        identificador: "15",
        nombre: "Iguana",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Llama.png",
        identificador: "04",
        nombre: "Llama",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Mono.png",
        identificador: "07",
        nombre: "Mono",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Oso.png",
        identificador: "11",
        nombre: "Oso",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Papagayo.png",
        identificador: "05",
        nombre: "Papagayo",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Perro.png",
        identificador: "03",
        nombre: "Perro",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tucan.png",
        identificador: "09",
        nombre: "Tucán",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Caballo.png",
        identificador: "16",
        nombre: "Caballo",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Rana.png",
        identificador: "17",
        nombre: "Rana",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tiburon.png",
        identificador: "18",
        nombre: "Tiburón",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Caracol.png",
        identificador: "19",
        nombre: "Caracol",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Oveja.png",
        identificador: "20",
        nombre: "Oveja",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Gallo.png",
        identificador: "21",
        nombre: "Gallo",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Abeja.png",
        identificador: "22",
        nombre: "Abeja",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Mariposa.png",
        identificador: "23",
        nombre: "Mariposa",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Pez.png",
        identificador: "24",
        nombre: "Pez",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Pinguino.png",
        identificador: "25",
        nombre: "Pingüino",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Cocodrilo.png",
        identificador: "26",
        nombre: "Cocodrilo",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Vaca.png",
        identificador: "27",
        nombre: "Vaca",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Chanchito.png",
        identificador: "28",
        nombre: "Chanchito",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tigre.png",
        identificador: "29",
        nombre: "Tigre",
        status: false
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Gato.png",
        identificador: "30",
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

  obtenerAnimalesTabs() {
    this.animalesTabs = [];

    localStorage.setItem("animalesTabs", JSON.stringify(this.animalesTabs));
  }

  reservarBoletos(token, boleto, tipoLoteria) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/lottery";
    endpoint = `${endpoint}/reservarBoletos`;
    console.log("Reservando boletos de loteria");
    var address = this.mySource;

    address = address + endpoint;

    let body = {
      token
    };
    let aux;
    switch (tipoLoteria) {
      case 1:
        aux = [
          {
            combinacion: boleto.ticket.combinacion,
            fraccion:
              boleto.ticket.seleccionados[
                boleto.ticket.seleccionados.length - 1
              ],
            sorteo: boleto.sorteo
          }
        ];
        body["loteria"] = aux;
        break;
      case 2:
        aux = [
          {
            combinacion: boleto.ticket.combinacion1,
            sorteo: boleto.sorteo
          }
        ];
        body["lotto"] = aux;
        break;

      default:
        aux = [
          {
            combinacion: boleto.ticket.combinacion1,
            sorteo: boleto.sorteo
          }
        ];
        body["pozo"] = aux;
        break;
    }
    return new Promise<any>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let response: any = data;
          console.log(response);
          resolve(response);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  eliminarBoletosDeReserva(token, boleto, fraccion, tipoLoteria) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/lottery";
    endpoint = `${endpoint}/eliminarBoletosDeReserva`;
    console.log("Reservando boletos de loteria");
    var address = this.mySource;

    address = address + endpoint;

    let body = {
      token
    };
    let aux;
    switch (tipoLoteria) {
      case 1:
        aux = {
          combinacion: boleto.ticket.combinacion,
          fraccion,
          sorteo: boleto.sorteo
        };
        body["loteria"] = aux;
        break;
      case 2:
        aux = {
          combinacion: boleto.ticket.combinacion1,
          sorteo: boleto.sorteo
        };
        body["lotto"] = aux;
        break;

      default:
        aux = {
          combinacion: boleto.ticket.combinacion1,
          sorteo: boleto.sorteo
        };
        body["pozo"] = aux;
        break;
    }
    return new Promise<any>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let response: any = data;
          console.log(response);
          resolve(response);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  getCarritoLoteria() {}
  getCarritoLotto() {}
  getCarritoPozo() {}
  borrarCarrito() {
    localStorage.setItem("seleccionadosLoteria", JSON.stringify([]));
    localStorage.setItem("seleccionadosLotto", JSON.stringify([]));
    localStorage.setItem("seleccionadosPozo", JSON.stringify([]));
  }
}
