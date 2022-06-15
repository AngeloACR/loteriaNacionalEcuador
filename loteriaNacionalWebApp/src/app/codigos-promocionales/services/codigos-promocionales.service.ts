import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CodigosPromocionalesService {
  localSource = "http://localhost:100";
  testSource = "https://ventas-api-prueba.loteria.com.ec";
  productionSource = "https://ventas-api.loteria.com.ec";

  //mySource = this.localSource;
  //mySource = this.testSource;
  mySource = this.productionSource;

  constructor(private http: HttpClient) {}
  obtenerCodigos() {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //let endpoint = "/inquiry";

    let address = "/codigosPromocionales";
    let endpoint = "/getCodCsv";
    address = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http
        .get(address, {
          headers: headers,
        })
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error: any) => {
            reject(new Error(error.error.message));
          }
        );
    });
  }
  obtenerTxt() {
    let address = "/codigosPromocionales";
    let endpoint = "/getTxt";
    address = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http
        .get(address, {
          observe: "response",
          responseType: "blob" as "json",
        })
        .subscribe(
          (data: HttpResponse<Blob>) => {
            let contentDisposition = data.headers.get("Content-Disposition");
            resolve(data.body);
          },
          (error: any) => {
            reject(new Error(error.error.message));
          }
        );
    });
  }
}
