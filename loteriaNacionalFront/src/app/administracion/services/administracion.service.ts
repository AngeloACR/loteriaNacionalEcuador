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

    let address = '/admin';
    let endpoint = '/popup/image';
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

  getPopupStatus() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";

    let address = '/admin';
    let endpoint = '/popup/status';
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

  setPopupImage(image: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";

    let address = '/admin';
    let endpoint = '/popup/image';
    address = this.mySource + address + endpoint;
    return new Promise<any>((resolve, reject) => {
      let body = { image };
      this.http
        .put(address, body, {
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
  setPopupStatus(status: boolean) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";

    let address = '/admin';
    let endpoint = '/popup/status';
    address = this.mySource + address + endpoint;
    return new Promise<any>((resolve, reject) => {
      let body = { status };
      this.http
        .put(address, body, {
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
  getPopupType() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";

    let address = '/admin';
    let endpoint = '/popup/type';
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

  setPopupType(type: boolean) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";

    let address = '/admin';
    let endpoint = '/popup/type';
    address = this.mySource + address + endpoint;
    return new Promise<any>((resolve, reject) => {
      let body = { type };
      this.http
        .put(address, body, {
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

    let address = '/admin';
    let endpoint = '/popup';
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
}
