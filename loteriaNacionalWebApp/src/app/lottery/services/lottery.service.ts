import { Injectable } from "@angular/core";
import {
  animales,
  ticketsAnimales,
  sorteo,
  ticketsLotto,
  ticketsNacional,
  ticketsMillonaria,
} from "../interfaces/lottery.interface";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class LotteryService {
  localSource = "http://localhost:200";
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

  formatNumber(number) {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(number);
  }

  getAuthData() {
    let data = JSON.parse(localStorage.getItem("userData"));
    let response = {
      user: "",
      lotteryToken: "",
    };
    if (data) {
      let lotteryToken = data.lotteryToken;
      let user = data.playerDocument;
      if (data.user_ == "italtronicprep") user = data.user_;
      response = {
        lotteryToken,
        user,
      };
    }
    return response;
  }
  obtenerDescuentos() {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //let endpoint = "/inquiry";

    let address = "/ventas";
    let endpoint = "/getDescuentos";
    let authData = this.getAuthData();

    address = this.mySource + address + endpoint;
    return new Promise<Array<sorteo>>((resolve, reject) => {
      this.http
        .get(address, {
          params: {
            lotteryToken: authData.lotteryToken,
            user: authData.user,
          },
          headers: headers,
        })
        .subscribe(
          (data: any) => {
            let descuentos: Array<any> = data;
            resolve(descuentos);
          },
          (error: any) => {
            reject(new Error(error.error.message));
          }
        );
    });
  }
  obtenerSorteo(token, loteria: number) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //let endpoint = "/inquiry";
    let address = "";
    let endpoint = `/cache/sorteosDisponibles`;
    let authData = this.getAuthData();
    switch (loteria) {
      case 1:
        address = "/loteria";

        break;
      case 2:
        address = "/lotto";
        break;
      case 5:
        address = "/pozo";
        break;
      case 14:
        address = "/millonaria";
        break;
    }
    address = this.mySource + address + endpoint;
    return new Promise<Array<sorteo>>((resolve, reject) => {
      this.http
        .get(address, {
          params: {
            lotteryToken: authData.lotteryToken,
            user: authData.user,
          },
          headers: headers,
        })
        .subscribe(
          (data: any) => {
            let sorteosDisponibles: Array<sorteo> = data;
            sorteosDisponibles.sort(this.ordenaSorteos);
            resolve(sorteosDisponibles);
          },
          (error: any) => {
            reject(new Error(error.error.message));
          }
        );
    });
  }
  obtenerSeries(sorteo) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let address = "/millonaria";
    let endpoint = "/getSeries";
    let authData = this.getAuthData();
    address = this.mySource + address + endpoint;
    return new Promise<Array<any>>((resolve, reject) => {
      this.http
        .get(address, {
          params: {
            lotteryToken: authData.lotteryToken,
            user: authData.user,
            sorteo,
          },
          headers: headers,
        })
        .subscribe(
          (data: any) => {
            let aux = data.map((element) => {
              return {
                serie: element,
                status: false,
              };
            });
            resolve(aux);
          },
          (error: any) => {
            reject(new Error(error.error.message));
          }
        );
    });
  }

  ordenaSorteos(a, b) {
    let a1 = a["sorteo"];
    let b1 = b["sorteo"];
    return a1 - b1;
  }

  obtenerTickets(
    token,
    loteria,
    sorteo,
    combinacion,
    combinacionFigura,
    tipoSeleccion
  ): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let address = "";
    let endpoint = "";
    let authData = this.getAuthData();
    let body = {
      sorteo,
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      combinacion,
      combinacionFigura,
      tipoSeleccion,
    };
    endpoint = `${endpoint}/combinacionesDisponibles`;
    switch (loteria) {
      case 1:
        address = "/loteria";

        address = this.mySource + address + endpoint;
        return new Promise<Array<ticketsNacional>>((resolve, reject) => {
          this.http.post(address, body, { headers: headers }).subscribe(
            (data: any) => {
              let combinacionesDisponibles: Array<ticketsNacional> =
                data.combinaciones;
              resolve(combinacionesDisponibles);
            },
            (error: any) => {
              reject(new Error(error.error.message));
            }
          );
        });
        break;
      case 2:
        address = "/lotto";

        address = this.mySource + address + endpoint;
        return new Promise<Array<ticketsLotto>>((resolve, reject) => {
          this.http.post(address, body, { headers: headers }).subscribe(
            (data: any) => {
              let combinacionesDisponibles: Array<ticketsLotto> =
                data.combinaciones;
              resolve(combinacionesDisponibles);
            },
            (error: any) => {
              reject(new Error(error.error.message));
            }
          );
        });
        break;
      case 5:
        address = "/pozo";
        endpoint = `${endpoint}/combinacionesDisponibles`;

        address = this.mySource + address + endpoint;
        return new Promise<Array<ticketsAnimales>>((resolve, reject) => {
          this.http.post(address, body, { headers: headers }).subscribe(
            (data: any) => {
              let combinacionesDisponibles: Array<ticketsAnimales> =
                data.combinaciones;
              resolve(combinacionesDisponibles);
            },
            (error: any) => {
              reject(new Error(error.error.message));
            }
          );
        });

        break;
      case 14:
        address = "/millonaria";
        endpoint = `${endpoint}/combinacionesDisponibles`;

        address = this.mySource + address + endpoint;
        return new Promise<Array<ticketsMillonaria>>((resolve, reject) => {
          this.http.post(address, body, { headers: headers }).subscribe(
            (data: any) => {
              let combinacionesDisponibles: Array<ticketsMillonaria> =
                data.combinaciones;
              resolve(combinacionesDisponibles);
            },
            (error: any) => {
              reject(new Error(error.error.message));
            }
          );
        });

        break;
    }
  }

  obtenerImagenBoleto(tipoLoteria, sorteo) {
    let sourceBoletos = `${this.mySource}/uploads/boletos/`;
    return new Promise<string>((resolve, reject) => {
      let boletoAddress = `${sourceBoletos}B${tipoLoteria}${sorteo}.png`;
      resolve(boletoAddress);
    });
  }

  authUser(token): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let address = "/auth";

    let endpoint = "/";
    let body = {
      token,
    };

    address = this.mySource +  address + endpoint;
    return new Promise<Array<any>>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          localStorage.setItem("userData", JSON.stringify(data));
          resolve(data);
        },
        (error: any) => {
          reject(new Error(error.error.message));
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
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Cangrejo.png",
        identificador: "13",
        nombre: "Cangrejo",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Ballena.png",
        identificador: "10",
        nombre: "Ballena",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Condor.png",
        identificador: "14",
        nombre: "Cóndor",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Conejo.png",
        identificador: "06",
        nombre: "Conejo",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Delfin.png",
        identificador: "02",
        nombre: "Delfín",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Foca.png",
        identificador: "12",
        nombre: "Foca",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Galapago.png",
        identificador: "08",
        nombre: "Galápago",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Iguana.png",
        identificador: "15",
        nombre: "Iguana",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Llama.png",
        identificador: "04",
        nombre: "Llama",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Mono.png",
        identificador: "07",
        nombre: "Mono",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Oso.png",
        identificador: "11",
        nombre: "Oso",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Papagayo.png",
        identificador: "05",
        nombre: "Papagayo",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Perro.png",
        identificador: "03",
        nombre: "Perro",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tucan.png",
        identificador: "09",
        nombre: "Tucán",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Caballo.png",
        identificador: "16",
        nombre: "Caballo",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Rana.png",
        identificador: "17",
        nombre: "Rana",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tiburon.png",
        identificador: "18",
        nombre: "Tiburón",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Caracol.png",
        identificador: "19",
        nombre: "Caracol",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Oveja.png",
        identificador: "20",
        nombre: "Oveja",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Gallo.png",
        identificador: "21",
        nombre: "Gallo",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Abeja.png",
        identificador: "22",
        nombre: "Abeja",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Mariposa.png",
        identificador: "23",
        nombre: "Mariposa",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Pez.png",
        identificador: "24",
        nombre: "Pez",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Pinguino.png",
        identificador: "25",
        nombre: "Pingüino",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Cocodrilo.png",
        identificador: "26",
        nombre: "Cocodrilo",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Vaca.png",
        identificador: "27",
        nombre: "Vaca",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Chanchito.png",
        identificador: "28",
        nombre: "Chanchito",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tigre.png",
        identificador: "29",
        nombre: "Tigre",
        status: false,
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Gato.png",
        identificador: "30",
        nombre: "Gato",
        status: false,
      },
    ];

    localStorage.setItem(
      "animalesSeleccionados",
      JSON.stringify(this.animales)
    );
  }

  obtenerCaracteristicasDeMascota(mascota) {
    let animales = [
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Camaron.png",
        identificador: "01",
        nombre: "Camarón",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Cangrejo.png",
        identificador: "13",
        nombre: "Cangrejo",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Ballena.png",
        identificador: "10",
        nombre: "Ballena",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Condor.png",
        identificador: "14",
        nombre: "Cóndor",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Conejo.png",
        identificador: "06",
        nombre: "Conejo",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Delfin.png",
        identificador: "02",
        nombre: "Delfín",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Foca.png",
        identificador: "12",
        nombre: "Foca",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Galapago.png",
        identificador: "08",
        nombre: "Galápago",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Iguana.png",
        identificador: "15",
        nombre: "Iguana",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Llama.png",
        identificador: "04",
        nombre: "Llama",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Mono.png",
        identificador: "07",
        nombre: "Mono",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Oso.png",
        identificador: "11",
        nombre: "Oso",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Papagayo.png",
        identificador: "05",
        nombre: "Papagayo",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Perro.png",
        identificador: "03",
        nombre: "Perro",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tucan.png",
        identificador: "09",
        nombre: "Tucán",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Caballo.png",
        identificador: "16",
        nombre: "Caballo",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Rana.png",
        identificador: "17",
        nombre: "Rana",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tiburon.png",
        identificador: "18",
        nombre: "Tiburón",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Caracol.png",
        identificador: "19",
        nombre: "Caracol",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Oveja.png",
        identificador: "20",
        nombre: "Oveja",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Gallo.png",
        identificador: "21",
        nombre: "Gallo",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Abeja.png",
        identificador: "22",
        nombre: "Abeja",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Mariposa.png",
        identificador: "23",
        nombre: "Mariposa",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Pez.png",
        identificador: "24",
        nombre: "Pez",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Pinguino.png",
        identificador: "25",
        nombre: "Pingüino",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Cocodrilo.png",
        identificador: "26",
        nombre: "Cocodrilo",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Vaca.png",
        identificador: "27",
        nombre: "Vaca",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Chanchito.png",
        identificador: "28",
        nombre: "Chanchito",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Tigre.png",
        identificador: "29",
        nombre: "Tigre",
      },
      {
        ruta: "assets/mascotas/mascotas pozo millonario-Gato.png",
        identificador: "30",
        nombre: "Gato",
      },
    ];
    let aux = animales.find((x) => x.identificador === mascota);
    return aux;
  }
  obtenerCaracteristicasDeAntojito(antojito) {
    let animales = [
      {
        ruta: "assets/antojitos/1.jpg",
        identificador: "01",
        nombre: "Choclo con queso",
      },
      {
        ruta: "assets/antojitos/13.jpg",
        identificador: "13",
        nombre: "Cangrejo criollo",
      },
      {
        ruta: "assets/antojitos/10.jpg",
        identificador: "10",
        nombre: "Quimbolitos",
      },
      {
        ruta: "assets/antojitos/14.jpg",
        identificador: "14",
        nombre: "Carne en palito",
      },
      {
        ruta: "assets/antojitos/6.jpg",
        identificador: "06",
        nombre: "Caldo de bola",
      },
      {
        ruta: "assets/antojitos/2.jpg",
        identificador: "02",
        nombre: "Muchín con miel",
      },
      {
        ruta: "assets/antojitos/12.jpg",
        identificador: "12",
        nombre: "Higos con queso",
      },
      {
        ruta: "assets/antojitos/8.jpg",
        identificador: "08",
        nombre: "Patacones con queso",
      },
      {
        ruta: "assets/antojitos/15.jpg",
        identificador: "15",
        nombre: "Hayaca",
      },
      {
        ruta: "assets/antojitos/4.jpg",
        identificador: "04",
        nombre: "Pescado frito",
      },
      {
        ruta: "assets/antojitos/7.jpg",
        identificador: "07",
        nombre: "Llapingacho",
      },
      {
        ruta: "assets/antojitos/11.jpg",
        identificador: "11",
        nombre: "Coco helado",
      },
      {
        ruta: "assets/antojitos/5.jpg",
        identificador: "05",
        nombre: "Cuy",
      },
      {
        ruta: "assets/antojitos/3.jpg",
        identificador: "03",
        nombre: "Humitas",
      },
      {
        ruta: "assets/antojitos/9.jpg",
        identificador: "09",
        nombre: "Melcocha",
      },
      {
        ruta: "assets/antojitos/16.jpg",
        identificador: "16",
        nombre: "Empanadas de morocho",
      },
    ];
    let aux = animales.find(
      (x) => parseInt(x.identificador) === parseInt(antojito)
    );
    return aux;
  }
  obtenerAnimalesTabs() {
    this.animalesTabs = [];

    localStorage.setItem("animalesTabs", JSON.stringify(this.animalesTabs));
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
    let address = "/reservas";
    let endpoint = "/reservarBoletos";

    address = this.mySource + address + endpoint;
    let authData = this.getAuthData();
    let body = {
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      reservaId,
    };
    let aux;
    switch (tipoLoteria) {
      case 1:
        aux = [
          {
            combinacion: boleto.ticket.combinacion,
            fracciones: boleto.fracciones,
            sorteo: boleto.sorteo,
          },
        ];
        body["loteria"] = aux;
        break;
      case 2:
        aux = [
          {
            combinacion: boleto.ticket.combinacion1,
            sorteo: boleto.sorteo,
          },
        ];
        body["lotto"] = aux;
        break;

      case 5:
        aux = [
          {
            combinacion: boleto.ticket.combinacion1,
            sorteo: boleto.sorteo,
          },
        ];
        body["pozo"] = aux;
        break;
      case 14:
        aux = [
          {
            combinacion: boleto.ticket.combinacion1,
            combinacion2: boleto.ticket.combinacion2,
            fracciones: boleto.fracciones,
            sorteo: boleto.sorteo,
          },
        ];
        body["millonaria"] = aux;
        break;
    }
    return new Promise<any>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let response: any = data;
          resolve(response);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }

  eliminarBoletosDeReserva(
    token,
    boleto,
    sorteo,
    fracciones,
    tipoLoteria,
    reservaId
  ) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let address = "/reservas";
    let endpoint = "/eliminarBoletosDeReserva";

    address = this.mySource + address + endpoint;

    let authData = this.getAuthData();
    let body = {
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      reservaId,
    };
    let aux;
    switch (tipoLoteria) {
      case 1:
        aux = [
          {
            combinacion: boleto.combinacion,
            fracciones,
            sorteo: sorteo,
          },
        ];
        body["loteria"] = aux;
        break;
      case 2:
        aux = [
          {
            combinacion: boleto.combinacion1,
            sorteo: sorteo,
          },
        ];
        body["lotto"] = aux;
        break;

      case 5:
        aux = [
          {
            combinacion: boleto.combinacion1,
            sorteo: sorteo,
          },
        ];
        body["pozo"] = aux;
        break;
      case 14:
        aux = [
          {
            combinacion: boleto.combinacion1,
            combinacion2: boleto.combinacion2,
            fracciones,
            sorteo: sorteo,
          },
        ];
        body["millonaria"] = aux;
        break;
    }
    return new Promise<any>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let response: any = data;
          resolve(response);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }
  eliminarTodosLosBoletosDeReserva(
    token,
    boletosLoteria,
    boletosLotto,
    boletosPozo,
    boletosMillonaria,
    reservaId
  ) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let address = "/reservas";
    let endpoint = "/eliminarBoletosDeReserva";

    address = this.mySource + address + endpoint;

    let authData = this.getAuthData();
    let body = {
      lotteryToken: authData.lotteryToken,
      user: authData.user,
      reservaId,
    };
    let auxLoteria = [];
    let auxLotto = [];
    let auxPozo = [];
    let auxMillonaria = [];
    boletosLoteria.forEach((boleto) => {
      auxLoteria.push({
        combinacion: boleto.ticket.combinacion,
        fracciones: boleto.ticket.seleccionados,
        sorteo: boleto.sorteo,
      });
      body["loteria"] = auxLoteria;
    });
    boletosLotto.forEach((boleto) => {
      auxLotto.push({
        combinacion: boleto.ticket.combinacion1,
        sorteo: boleto.sorteo,
      });
      body["lotto"] = auxLotto;
    });
    boletosPozo.forEach((boleto) => {
      auxPozo.push({
        combinacion: boleto.ticket.combinacion1,
        sorteo: boleto.sorteo,
      });
      body["pozo"] = auxPozo;
    });
    boletosMillonaria.forEach((boleto) => {
      auxMillonaria.push({
        combinacion: boleto.ticket.combinacion1,
        sorteo: boleto.sorteo,
      });
      body["millonaria"] = auxMillonaria;
    });

    return new Promise<any>((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          let response: any = data;
          resolve(response);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }
}
