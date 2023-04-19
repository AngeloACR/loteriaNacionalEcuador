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
  async getBannerLink() {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let address = '/admin';
      let endpoint = '/popup/';
      address = this.mySource + address + endpoint;
      let response: any = await this.http
        .get(address, {
          headers: headers,
        })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getPopupStatus() {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let address = '/admin';
      let endpoint = '/popup/status';
      address = this.mySource + address + endpoint;
      let response: any = await this.http
        .get(address, {
          headers: headers,
        })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async setPopupImage(image: string) {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let address = '/admin';
      let endpoint = '/popup/image';
      address = this.mySource + address + endpoint;
      let body = { image };
      let response: any = await this.http
        .put(address, body, {
          headers: headers,
        })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getPopupFiles() {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let address = '/admin';
      let endpoint = '/popup/files';
      address = this.mySource + address + endpoint;
      let response: any = await this.http
        .get(address, {
          headers: headers,
        })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }
  async deletePopupFiles(image: string) {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let address = '/admin';
      let endpoint = `/popup/file/${image}`;
      address = this.mySource + address + endpoint;
      let response: any = await this.http
        .delete(address, {
          headers: headers,
        })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }
  async setPopupStatus(status: boolean) {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let address = '/admin';
      let endpoint = '/popup/status';
      address = this.mySource + address + endpoint;
      let body = { status };
      let response: any = await this.http
        .put(address, body, {
          headers: headers,
        })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getPopupType() {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let address = '/admin';
      let endpoint = '/popup/type';
      address = this.mySource + address + endpoint;
      let response: any = await this.http
        .get(address, {
          headers: headers,
        })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async setPopupType(type: boolean) {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let address = '/admin';
      let endpoint = '/popup/type';
      address = this.mySource + address + endpoint;
      let body = { type };
      let response: any = await this.http
        .put(address, body, {
          headers: headers,
        })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async cargarImagenes(formData: any) {
    try {
      let headers = new HttpHeaders();

      let address = '/admin';
      let endpoint = '/popup';
      address = this.mySource + address + endpoint;
      let response: any = await this.http
        .post(address, formData, {
          headers: headers,
        })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }
}
