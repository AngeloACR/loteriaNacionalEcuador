import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdministracionService {
  mySource = environment.source;

  constructor(private http: HttpClient) {}
  getBannerLink() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";

    let address = '/administracion';
    let endpoint = '/files';
    address = this.mySource + address + endpoint;
    return new Promise<any>((resolve, reject) => {
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

  obtenerCodigos() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";

    let address = '/codigosPromocionales';
    let endpoint = '/getCodeCsv';
    address = this.mySource + address + endpoint;
    return new Promise<any>((resolve, reject) => {
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

  getStatus() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";

    let address = '/codigosPromocionales';
    let endpoint = '/status';
    address = this.mySource + address + endpoint;
    return new Promise<any>((resolve, reject) => {
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

  setStatus(showPromo: boolean) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";

    let address = '/codigosPromocionales';
    let endpoint = '/status';
    address = this.mySource + address + endpoint;
    return new Promise<any>((resolve, reject) => {
      let body = { showPromo };
      this.http
        .post(address, body, {
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

  cargarImagenes(formData: any) {
    let headers = new HttpHeaders();

    let address = '/codigosPromocionales';
    let endpoint = '/files';
    address = this.mySource + address + endpoint;
    return new Promise<any>((resolve, reject) => {
      this.http
        .post(address, formData, {
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
    return new Promise<any>((resolve, reject) => {
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

  obtenerTxt(): Observable<HttpResponse<Blob>> {
    let address = '/codigosPromocionales';
    let endpoint = '/getTxt';
    address = this.mySource + address + endpoint;
    return this.http.get<Blob>(address, {
      observe: 'response',
      responseType: 'blob' as 'json',
    });
  }
}
