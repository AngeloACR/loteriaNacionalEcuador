import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DescuentosService {

  mySource = environment.source;
  constructor(private http: HttpClient) { }

  async getToken(): Promise<string> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/auth';

    let endpoint = '/token';


    address = this.mySource + address + endpoint;
    let token = await this.http.get(address, { headers: headers }).toPromise() as string
    return token
  }
  async guardarDescuento(descuento: any): Promise<Object> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/descuentos';

    let endpoint = '/';


    address = this.mySource + address + endpoint;
    let response = await this.http.post(address, descuento, { headers: headers }).toPromise() as string
    return response
  }
  async changeActive(id: any): Promise<Object> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/descuentos';

    let endpoint = `/active/${id}`;


    address = this.mySource + address + endpoint;
    let response = await this.http.put(address, { headers: headers }).toPromise() as string
    return response
  }
  async getDescuentos(): Promise<Object> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/descuentos';

    let endpoint = '/all';


    address = this.mySource + address + endpoint;
    let response = await this.http.get(address, { headers: headers }).toPromise() as string
    return response
  }
}
