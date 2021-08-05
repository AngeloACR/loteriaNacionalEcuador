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
        endpoint = `${endpoint}/loteriaGanador`;
        console.log("Recuperando boleto ganador de loteria");
        break;
      case 2:
        endpoint = `${endpoint}/lottoGanador`;
        console.log("Recuperando boleto ganador de lotto");
        break;
      case 5:
        endpoint = `${endpoint}/pozoGanador`;
        console.log("Recuperando boleto ganador de pozo millonario");

        break;

      default:
        break;
    }
    var address = this.mySource;

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
}
