import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CodigosPromocionalesService {
  mySource = environment.source

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
  /*   obtenerTxt() {
    let address = "";
    let endpoint = "/getTxt";
    address = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http
        .get<Blob>(address, {
          observe: "response",
          responseType: "blob" as "json",
        })
        .subscribe(
          (data: HttpResponse<Blob>) => {
            let contentDisposition = data.headers.get("content-disposition");
            resolve(data.body);
          },
          (error: any) => {
            reject(new Error(error.error.message));
          }
        );
    });
  } */

  obtenerTxt(): Observable<HttpResponse<Blob>>  {
    let address = "/codigosPromocionales";
    let endpoint = "/getTxt";
    address = this.mySource + address + endpoint;
    return this.http.get<Blob>(address, {
      observe: "response",
      responseType: "blob" as "json",
    });
  }
}
