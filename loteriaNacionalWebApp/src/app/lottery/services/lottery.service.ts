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

  mySource = this.localSource;
  //mySource = this.testSource;
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

  getAuthData() {
    let data = JSON.parse(localStorage.getItem("userData"));
    let lotteryToken = data.lotteryToken;
    let user = data.user_;
    let response = {
      lotteryToken,
      user
    };
    return response;
  }

  obtenerSorteo(token, loteria: number) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //let endpoint = "/inquiry";
    let endpoint = "/lottery";
    let authData = this.getAuthData();
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
                lotteryToken: authData.lotteryToken,
                user: authData.user
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
                lotteryToken: authData.lotteryToken,
                user: authData.user
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
                lotteryToken: authData.lotteryToken,
                user: authData.user
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
    let authData = this.getAuthData();
    let body = {
      sorteo,
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      combinacion,
      combinacionFigura
    };
    switch (loteria) {
      case 1:
        endpoint = `${endpoint}/loteriaCombinacionesDisponibles`;
        console.log("Recuperando combinaciones de loteria");
        var address = this.mySource;

        address = address + endpoint;
        console.log(body);
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
    console.log(body)
    return new Promise<Array<any>>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          console.log(data);
          localStorage.setItem("userData", JSON.stringify(data));
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

  obtenerCaracteristicasDeMascota(mascota) {
    let animales = [
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Camaron.png",
        identificador: "01",
        nombre: "Camarón"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Cangrejo.png",
        identificador: "13",
        nombre: "Cangrejo"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Ballena.png",
        identificador: "10",
        nombre: "Ballena"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Condor.png",
        identificador: "14",
        nombre: "Cóndor"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Conejo.png",
        identificador: "06",
        nombre: "Conejo"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Delfin.png",
        identificador: "02",
        nombre: "Delfín"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Foca.png",
        identificador: "12",
        nombre: "Foca"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Galapago.png",
        identificador: "08",
        nombre: "Galápago"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Iguana.png",
        identificador: "15",
        nombre: "Iguana"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Llama.png",
        identificador: "04",
        nombre: "Llama"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Mono.png",
        identificador: "07",
        nombre: "Mono"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Oso.png",
        identificador: "11",
        nombre: "Oso"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Papagayo.png",
        identificador: "05",
        nombre: "Papagayo"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Perro.png",
        identificador: "03",
        nombre: "Perro"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tucan.png",
        identificador: "09",
        nombre: "Tucán"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Caballo.png",
        identificador: "16",
        nombre: "Caballo"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Rana.png",
        identificador: "17",
        nombre: "Rana"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tiburon.png",
        identificador: "18",
        nombre: "Tiburón"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Caracol.png",
        identificador: "19",
        nombre: "Caracol"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Oveja.png",
        identificador: "20",
        nombre: "Oveja"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Gallo.png",
        identificador: "21",
        nombre: "Gallo"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Abeja.png",
        identificador: "22",
        nombre: "Abeja"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Mariposa.png",
        identificador: "23",
        nombre: "Mariposa"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Pez.png",
        identificador: "24",
        nombre: "Pez"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Pinguino.png",
        identificador: "25",
        nombre: "Pingüino"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Cocodrilo.png",
        identificador: "26",
        nombre: "Cocodrilo"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Vaca.png",
        identificador: "27",
        nombre: "Vaca"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Chanchito.png",
        identificador: "28",
        nombre: "Chanchito"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tigre.png",
        identificador: "29",
        nombre: "Tigre"
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Gato.png",
        identificador: "30",
        nombre: "Gato"
      }
    ];
    let aux = animales.find(x => x.identificador === mascota);
    return aux;
    /* console.log(this.animales) */
  }
  obtenerAnimalesTabs() {
    this.animalesTabs = [];

    localStorage.setItem("animalesTabs", JSON.stringify(this.animalesTabs));
  }

  comprarBoletos(token, boletos, tipoLoteria) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/lottery";
    endpoint = `${endpoint}/reservarBoletos`;
    console.log("Reservando boletos de loteria");
    var address = this.mySource;

    address = address + endpoint;
    let authData = this.getAuthData();
    let body = {
      lotteryToken: authData.lotteryToken,
      user: authData.user
    };
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

  getReservaId() {
    if (
      JSON.parse(localStorage.getItem("reservaId")) &&
      JSON.parse(localStorage.getItem("reservaId")) != ""
    ) {
      return JSON.parse(localStorage.getItem("reservaId"));
    } else {
      return 0;
    }
  }

  setReservaId(id) {
    localStorage.setItem("reservaId", JSON.stringify(id));
  }

  reservarBoletos(token, boleto, tipoLoteria, reservaId) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/lottery";
    endpoint = `${endpoint}/reservarBoletos`;
    console.log("Reservando boletos de loteria");
    var address = this.mySource;

    address = address + endpoint;
    let authData = this.getAuthData();
    let body = {
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      reservaId
    };
    let aux;
    switch (tipoLoteria) {
      case 1:
        aux = [
          {
            combinacion: boleto.ticket.combinacion,
            fracciones:
              boleto.fracciones,
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

  eliminarBoletosDeReserva(token, boleto, fracciones, tipoLoteria, reservaId) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/lottery";
    endpoint = `${endpoint}/eliminarBoletosDeReserva`;
    var address = this.mySource;

    address = address + endpoint;

    let authData = this.getAuthData();
    let body = {
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      reservaId
    };
    let aux;
    switch (tipoLoteria) {
      case 1:
        aux = [
          {
            combinacion: boleto.ticket.combinacion,
            fracciones,
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
    console.log(body);
    return new Promise<any>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let response: any = data;
          console.log(response);
          resolve(response);
        },
        (error: any) => {
          console.log(error)
          reject(error);
        }
      );
    });
  }

  setCarritoLoteria(tickets) {
    console.log(tickets);
    localStorage.setItem("seleccionadosLoteria", JSON.stringify(tickets));
  }

  setCarritoLotto(tickets) {
    localStorage.setItem("seleccionadosLotto", JSON.stringify(tickets));
  }

  setCarritoPozo(tickets) {
    localStorage.setItem("seleccionadosPozo", JSON.stringify(tickets));
  }

  getCarritoLoteria() {
    return JSON.parse(localStorage.getItem("seleccionadosLoteria"));
  }
  getCarritoLotto() {
    return JSON.parse(localStorage.getItem("seleccionadosLotto"));
  }
  getCarritoPozo() {
    JSON.parse(localStorage.getItem("seleccionadosPozo"));
  }
  borrarCarrito() {
    localStorage.setItem("seleccionadosLoteria", JSON.stringify([]));
    localStorage.setItem("seleccionadosLotto", JSON.stringify([]));
    localStorage.setItem("seleccionadosPozo", JSON.stringify([]));
  }
}
