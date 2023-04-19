import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  today = new Date();
  mySource = environment.source;

  constructor(private http: HttpClient) {}

  async recuperarSorteosJugados() {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let endpoint = '/cache';
      var address = '/lotto';
      endpoint = `${endpoint}/sorteosJugados`;
      address = this.mySource + address + endpoint;

      let data: any = await this.http
        .get(address, { headers: headers })
        .toPromise();
      let sorteosJugados = data.values;

      sorteosJugados.sort(this.ordenaSorteos);
      sorteosJugados = this.limpiaSorteosDeMasDe3Meses(sorteosJugados);
      return sorteosJugados;
    } catch (error) {
      throw error;
    }
  }
  limpiaSorteosDeMasDe3Meses(sorteos: any) {
    var today = new Date();
    var minDate = new Date(new Date().setDate(today.getDate() - 90));
    return sorteos.filter((sorteo: any) => {
      let fechaSorteo = new Date(
        sorteo.fecha.split(' ')[0].split('/').reverse().join('-')
      );
      console.log(minDate.getTime(), fechaSorteo.getTime());
      return fechaSorteo.getTime() >= minDate.getTime();
    });
  }
  ordenaSorteos(a: any, b: any) {
    let a1 = a['sorteo'];
    let b1 = b['sorteo'];
    return b1 - a1;
  }

  async recuperarBoletoGanador(sorteo: any, combinaciones: any) {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let endpoint = '';
      let address = '/lotto';
      endpoint = `${endpoint}/ganador`;
      address = this.mySource + address + endpoint;
      let body = {
        sorteo,
        combinaciones,
      };
      let data = await this.http
        .post(address, body, { headers: headers })
        .toPromise();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async validarSorteo(sorteo: any) {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let endpoint = '';
      let address = '/lotto';
      endpoint = `${endpoint}/validar`;
      address = this.mySource + address + endpoint;
      let body = {
        sorteo,
      };
      let data: any = await this.http
        .post(address, body, { headers: headers })
        .toPromise();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async getUltimoResultado() {
    try {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let address = '/lotto';
      let endpoint = '/cache/ultimoResultado';
      let auxAddress = this.mySource + address + endpoint;

      let data = this.http.get(auxAddress, { headers: headers }).toPromise();
      let response;
      let lotto = data;
      localStorage.setItem('lottoUltimoResultado', JSON.stringify(lotto));
      response = { tipo: 'lotto', data: lotto };
      return response;
    } catch (error) {
      throw error;
    }
  }

  async obtenerBoletin(sorteo: string) {
    let sourceBoletines = `${this.mySource}/uploads/boletines/`;
    let boletinAddress = `${sourceBoletines}T2${sorteo}.jpg`;
    return boletinAddress;
  }
}
