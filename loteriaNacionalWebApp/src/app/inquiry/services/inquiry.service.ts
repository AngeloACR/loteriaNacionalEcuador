import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class InquiryService {
  today = new Date();
  localSource = "http://localhost:5480";
  testSource = "https://ventas-api-prueba.loteria.com.ec";
  productionSource = "https://ventas-api.loteria.com.ec";

  //mySource = this.localSource;
  mySource = this.testSource;
  //mySource = this.productionSource;

  constructor(private http: HttpClient) {}

  recuperarSorteosJugados(tipoLoteria) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //let endpoint = "/inquiry";
    let endpoint = "/cache";
    switch (tipoLoteria) {
      case 1:
        endpoint = `${endpoint}/loteriaSorteosJugados`;
        console.log("Recuperando sorteos de loteria");
        break;
      case 2:
        endpoint = `${endpoint}/lottoSorteosJugados`;
        console.log("Recuperando sorteos de lotto");
        break;
      case 5:
        endpoint = `${endpoint}/pozoSorteosJugados`;
        console.log("Recuperando sorteos de pozo millonario");

        break;

      default:
        break;
    }
    var address = this.mySource;

    address = address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.get(address, { headers: headers }).subscribe((data: any) => {
        let sorteosJugados = data.values;
        console.log(sorteosJugados);
        sorteosJugados.sort(this.ordenaSorteos);
        resolve(sorteosJugados);
      });
    });
  }

  ordenaSorteos(a, b) {
    let a1 = a["sorteo"];
    let b1 = b["sorteo"];
    return b1 - a1;
  }

  recuperarBoletoGanador(tipoLoteria, sorteo, combinaciones) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/inquiry";
    switch (tipoLoteria) {
      case 1:
        endpoint = `${endpoint}/ganadorLoteria`;
        console.log("Recuperando boleto ganador de loteria");
        break;
      case 2:
        endpoint = `${endpoint}/ganadorLotto`;
        console.log("Recuperando boleto ganador de lotto");
        break;
      case 5:
        endpoint = `${endpoint}/ganadorPozo`;
        console.log("Recuperando boleto ganador de pozo millonario");

        break;

      default:
        break;
    }
    var address = this.mySource;
    console.log(endpoint);
    address = address + endpoint;
    let body = {
      sorteo,
      combinaciones
    };
    console.log(body);
    return new Promise((resolve, reject) => {
      this.http
        .post(address, body, { headers: headers })
        .subscribe((data: any[]) => {
          let boletoGanador = data;
          console.log(boletoGanador);
          resolve(boletoGanador);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        });
    });
  }

  recuperarBoletoGanadorPorPlancha(boletoInicial, boletoFinal, sorteo) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/inquiry/pozoPlancha";
    var address = this.mySource;

    address = address + endpoint;
    let body = {
      sorteo,
      boletoInicial,
      boletoFinal
    };
    console.log(body)
    return new Promise((resolve, reject) => {
      this.http
        .post(address, body, { headers: headers })
        .subscribe((data: any[]) => {
          let boletoGanador = data;
          console.log(boletoGanador);
          resolve(boletoGanador);
        });
    });
  }

  recuperarUltimosResultados() {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //let endpoint = "/inquiry/ultimosResultados";
    let endpoint = "/cache/ultimosResultados";
    var address = this.mySource;
    address = address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.get(address, { headers: headers }).subscribe((data: any) => {
        let loteriaNacional = data.loteriaNacional;
        let lotto = data.lotto;
        let pozoMillonario = data.pozoMillonario;
        localStorage.setItem(
          "loteriaNacionalUltimoResultado",
          JSON.stringify(loteriaNacional)
        );
        localStorage.setItem("lottoUltimoResultado", JSON.stringify(lotto));
        localStorage.setItem(
          "pozoMillonarioUltimoResultado",
          JSON.stringify(pozoMillonario)
        );
        console.log(pozoMillonario)
        resolve(data);
      });
    });
  }

  obtenerBoletin(tipoLoteria, sorteo) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let endpoint = "/inquiry";
    switch (tipoLoteria) {
      case 1:
        endpoint = `${endpoint}/loteriaBoletin`;
        console.log("Recuperando boletin de loteria");
        break;
      case 2:
        endpoint = `${endpoint}/lottoBoletin`;
        console.log("Recuperando boletin de lotto");
        break;
      case 5:
        endpoint = `${endpoint}/pozoBoletin`;
        console.log("Recuperando boletin de pozo millonario");

        break;

      default:
        break;
    }
    var address = this.mySource;

    address = address + endpoint;
    let body = {
      sorteo
    };

    return new Promise((resolve, reject) => {
      this.http
        .post(address, body, { headers: headers })
        .subscribe((data: any) => {
          let boletin = data;
          console.log(boletin);
          resolve(boletin);
        });
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
}
