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
    console.log("Buscando ultimos resultados");
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
        console.log(loteriaNacional);
        localStorage.setItem("lottoUltimoResultado", JSON.stringify(lotto));
        console.log(lotto);
        localStorage.setItem(
          "pozoMillonarioUltimoResultado",
          JSON.stringify(pozoMillonario)
        );
        console.log(pozoMillonario);
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
        mascotaPath = "assets/mascotas/mascotas pozo millonario-camaron.png";
        break;
      case "02":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-delfin.png";
        break;
      case "03":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-perro.png";
        break;
      case "04":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-llama.png";
        break;
      case "05":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-papagayo.png";
        break;
      case "06":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-conejo.png";
        break;
      case "07":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-mono.png";
        break;
      case "08":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-galapago.png";
        break;
      case "09":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-tucan.png";
        break;
      case "10":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-ballena.png";
        break;
      case "11":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-oso.png";
        break;
      case "12":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-foca.png";
        break;
      case "13":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-cangrejo.png";
        break;
      case "14":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-condor.png";
        break;
      case "15":
        mascotaPath = "assets/mascotas/mascotas pozo millonario-iguana.png";
        break;

      default:
        break;
    }
    return mascotaPath;
  }
}
