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
export class CodigosPromocionalesService {
  mySource = environment.source;

  constructor(private http: HttpClient) {}

  async obtenerCodigos() {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let address = '/codigosPromocionales';
      let endpoint = '/getCodCsv';
      address = this.mySource + address + endpoint;
      let response = await this.http
        .get(address, {
          headers: headers,
        })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

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
