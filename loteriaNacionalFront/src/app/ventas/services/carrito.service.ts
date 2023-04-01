import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  total: any = 0;
  totalConDesc: any = 0;
  ticketsLoteria: any = {};
  ticketsLotto: any = {};
  ticketsPozo: any = {};
  ticketsMillonaria: any = {};
  ticketsPozoRevancha: any = {};
  ticketsCarrito: any = [];
  reservaId: any = 0;

  mySource = environment.source;

  constructor(private http: HttpClient) {}

  async eliminarDescuento(element: any, tipoLoteria: any) {
    try {
      let sorteo = element.sorteo;
      switch (tipoLoteria) {
        case 1:
          let loteria = this.getLoteriaLocal();
          for (let id in loteria) {
            if (loteria[id].sorteo.sorteo == sorteo) {
              loteria[id].tieneDescuento = false;
              loteria[id].subtotalConDesc = 0;
            }
          }
          this.setLoteriaLocal(loteria);
          break;
        case 2:
          let lotto = this.getLottoLocal();
          for (let id in lotto) {
            if (lotto[id].sorteo.sorteo == sorteo) {
              lotto[id].tieneDescuento = false;
              lotto[id].subtotalConDesc = 0;
            }
          }
          this.setLottoLocal(lotto);
          break;

        case 5:
          let pozo = this.getPozoLocal();
          for (let id in pozo) {
            if (pozo[id].sorteo.sorteo == sorteo) {
              pozo[id].tieneDescuento = false;
              pozo[id].subtotalConDesc = 0;
            }
          }
          this.setPozoLocal(pozo);
          break;
        case 14:
          let millonaria = this.getMillonariaLocal();
          for (let id in millonaria) {
            if (millonaria[id].sorteo.sorteo == sorteo) {
              millonaria[id].tieneDescuento = false;
              millonaria[id].subtotalConDesc = 0;
            }
          }
          this.setMillonariaLocal(millonaria);
          break;
      }
      await this.actualizarCarrito();
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }

  async calcularDescuento(descuento: any) {
    return;
    let precioConDescuento = descuento.valorConDescuento;
    let sorteo = descuento.sorteo;
    switch (descuento.tipoLoteria) {
      case '1':
        let loteria = this.getLoteriaLocal();
        for (let id in loteria) {
          if (loteria[id].sorteo.sorteo == sorteo) {
            loteria[id].tieneDescuento = true;
            loteria[id].subtotalConDesc =
              loteria[id].ticket.seleccionados.length *
              parseFloat(precioConDescuento);
          }
        }
        this.setLoteriaLocal(loteria);
        break;
      case '2':
        let lotto = this.getLottoLocal();
        for (let id in lotto) {
          if (lotto[id].sorteo.sorteo == sorteo) {
            lotto[id].tieneDescuento = true;
            lotto[id].subtotalConDesc = parseFloat(precioConDescuento);
          }
        }
        this.setLottoLocal(lotto);
        break;

      case '5':
        let pozo = this.getPozoLocal();
        for (let id in pozo) {
          if (pozo[id].sorteo.sorteo == sorteo) {
            pozo[id].tieneDescuento = true;
            pozo[id].subtotalConDesc = parseFloat(precioConDescuento);
          }
        }
        this.setPozoLocal(pozo);
        break;
      case '14':
        let millonaria = this.getMillonariaLocal();
        for (let id in millonaria) {
          if (millonaria[id].sorteo.sorteo == sorteo) {
            millonaria[id].tieneDescuento = true;
            millonaria[id].subtotalConDesc = parseFloat(precioConDescuento);
          }
        }
        this.setMillonariaLocal(millonaria);
        break;
    }
    await this.actualizarCarrito();
  }

  contarBoletos(sorteo: any, tipoLoteria: any) {
    let aux = this.getCarritoLocal();
    let boletos = aux.filter(
      (item: any) =>
        item.sorteo.sorteo == sorteo && item.tipoLoteria == tipoLoteria
    );
    let conteo;
    switch (tipoLoteria) {
      case 1:
        conteo = boletos.reduce((total: any, value: any) => {
          return total + value.ticket.seleccionados.length;
        }, 0);
        break;
      case 14:
        conteo = boletos.reduce((total: any, value: any) => {
          return total + value.ticket.seleccionados.length;
        }, 0);
        break;

      default:
        conteo = boletos.length;
        break;
    }
    return conteo;
  }

  async removeFromCart(ticket: any, tipoLoteria: any) {
    try {
      let carrito = await this.getCarrito();
      let deletedIndex = carrito.findIndex(
        (x: any) =>
          x.identificador === ticket.identificador &&
          x.tipoLoteria == tipoLoteria
      );
      carrito.splice(deletedIndex, 1);
      this.ticketsCarrito = carrito;
      localStorage.setItem('seleccionadosCarrito', JSON.stringify(carrito));
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }

  getReservaId() {
    let reservaId = JSON.parse(localStorage.getItem('reservaId')!);
    if (reservaId && reservaId != '') {
      return reservaId;
    } else {
      return 0;
    }
  }

  setReservaId(id: any) {
    localStorage.setItem('reservaId', JSON.stringify(id));
  }
  async getCount() {
    try {
      let carrito = await this.getCarrito();
      let count = 0;
      if (carrito && carrito.length) {
        carrito.forEach((item: any) => {
          if (item.tipoLoteria == 1) {
            count += item.ticket.seleccionados.length;
          } else {
            count += 1;
          }
        });
      }
      return count;
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }

  async setCarrito(ticket: any, tipoLoteria: any) {
    try {
      let carrito: any = this.getCarritoLocal();
      if (!carrito) carrito = [];
      ticket['identificador'] = ticket.ticket.identificador;
      ticket['tipoLoteria'] = tipoLoteria;
      let addIndex = carrito.findIndex(
        (x: any) => x.identificador === ticket.identificador
      );
      if ((tipoLoteria == 1 || tipoLoteria == 14) && addIndex != -1) {
        carrito[addIndex] = ticket;
      } else {
        carrito.push(ticket);
      }
      this.ticketsCarrito = carrito;
      localStorage.setItem('seleccionadosCarrito', JSON.stringify(carrito));
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }

  async actualizarCarrito() {
    try {
      let headers = this.getHeaders();
      let address = this.buildAddress('actualizarCarrito');
      let user = JSON.parse(localStorage.getItem('userData')!).playerDocument;

      let body = {
        loteria: this.getLoteriaLocal(),
        lotto: this.getLottoLocal(),
        pozo: this.getPozoLocal(),
        pozoRevancha: this.getPozoRevanchaLocal(),
        millonaria: this.getMillonariaLocal(),
        carrito: this.getCarritoLocal(),
        total: this.getTotal(),
        reservaId: this.getReservaId(),
        user,
      };
      return await this.http
        .post(address, body, { headers: headers })
        .toPromise();
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }

  async setCarritoLoteria(tickets: any) {
    try {
      this.setLoteriaLocal(tickets);
      await this.setTotal();
      await this.actualizarCarrito();
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }
  async setCarritoMillonaria(tickets: any) {
    try {
      this.setMillonariaLocal(tickets);
      await this.setTotal();
      await this.actualizarCarrito();
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }

  async setCarritoLotto(tickets: any) {
    try {
      this.setLottoLocal(tickets);
      await this.setTotal();
      await this.actualizarCarrito();
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }

  async setCarritoPozo(tickets: any) {
    try {
      this.setPozoLocal(tickets);
      //this.ticketsPozo = tickets;
      await this.setTotal();
      await this.actualizarCarrito();
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }

  async setCarritoPozoRevancha(tickets: any) {
    try {
      this.setPozoRevanchaLocal(tickets);
      await this.setTotal();
      await this.actualizarCarrito();
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }

  setCarritoLocal(data: any) {
    localStorage.setItem('seleccionadosCarrito', JSON.stringify(data));
  }
  setLoteriaLocal(data: any) {
    localStorage.setItem('seleccionadosLoteria', JSON.stringify(data));
  }
  setMillonariaLocal(data: any) {
    localStorage.setItem('seleccionadosMillonaria', JSON.stringify(data));
  }
  setLottoLocal(data: any) {
    localStorage.setItem('seleccionadosLotto', JSON.stringify(data));
  }
  setPozoLocal(data: any) {
    localStorage.setItem('seleccionadosPozo', JSON.stringify(data));
  }
  setPozoRevanchaLocal(data: any) {
    localStorage.setItem('seleccionadosPozoRevancha', JSON.stringify(data));
  }

  getCarritoLocal() {
    let carrito = JSON.parse(localStorage.getItem('seleccionadosCarrito')!);
    if (carrito && carrito.length) {
      return carrito;
    } else {
      return [];
    }
  }
  getLoteriaLocal() {
    return JSON.parse(localStorage.getItem('seleccionadosLoteria')!);
  }
  getMillonariaLocal() {
    return JSON.parse(localStorage.getItem('seleccionadosMillonaria')!);
  }
  getLottoLocal() {
    return JSON.parse(localStorage.getItem('seleccionadosLotto')!);
  }
  getPozoLocal() {
    return JSON.parse(localStorage.getItem('seleccionadosPozo')!);
  }

  getPozoRevanchaLocal() {
    return JSON.parse(localStorage.getItem('seleccionadosPozoRevancha')!);
  }

  async buscarCarrito() {
    let headers = this.getHeaders();
    let address = this.buildAddress('getCarrito');
    let user = JSON.parse(localStorage.getItem('userData')!).playerDocument;

    let body = {
      user,
    };
    let data: any = await this.http
      .post(address, body, { headers })
      .toPromise();
    if (data.carrito.length == 0) {
      await this.borrarCarrito();
      data.carrito = [];
      data.loteria = {};
      data.lotto = {};
      data.pozo = {};
      data.pozoRevancha = {};
      data.millonaria = {};
    }
    this.setCarritoLocal(data.carrito);
    this.setLoteriaLocal(data.loteria);
    this.setLottoLocal(data.lotto);
    this.setMillonariaLocal(data.millonaria);
    this.setPozoLocal(data.pozo);
    this.setPozoRevanchaLocal(data.pozoRevancha);
    await this.setTotal();
    return data;
  }

  private buildAddress(action: string): string {
    const addressBase = '/reservas';
    const endpoint = `/cache/${action}`;
    return this.mySource + addressBase + endpoint;
  }
  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    return headers;
  }
  async validarCarrito(reservaId: any) {
    const address = this.buildAddress('validar');
    const headers = this.getHeaders();
    const userData = JSON.parse(localStorage.getItem('userData')!);
    const user = userData.playerDocument;
    const token = userData.lotteryToken;

    const body = {
      user,
      token,
      reservaId,
    };

    try {
      const data: any = await this.http
        .post(address, body, { headers })
        .toPromise();
      return data;
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }

  async getCarrito() {
    try {
      let carritoDB = await this.buscarCarrito();
      return carritoDB.carrito;
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }
  async getCarritoLoteria() {
    try {
      let carritoDB = await this.buscarCarrito();
      return carritoDB.loteria;
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }
  async getCarritoLotto() {
    try {
      let carritoDB = await this.buscarCarrito();
      return carritoDB.lotto;
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }
  async getCarritoPozo() {
    try {
      let carritoDB = await this.buscarCarrito();
      return carritoDB.pozo;
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }
  async getCarritoMillonaria() {
    try {
      let carritoDB = await this.buscarCarrito();
      return carritoDB.millonaria;
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }
  async getCarritoPozoRevancha() {
    try {
      let carritoDB = await this.buscarCarrito();
      return carritoDB.pozoRevancha;
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }
  async borrarCarrito() {
    try {
      this.ticketsCarrito = [];
      this.ticketsLoteria = {};
      this.ticketsLotto = {};
      this.ticketsPozo = {};
      this.ticketsMillonaria = {};
      this.ticketsPozoRevancha = {};
      this.reservaId = 0;
      this.total = 0;
      localStorage.removeItem('seleccionadosLoteria');
      localStorage.removeItem('seleccionadosLotto');
      localStorage.removeItem('seleccionadosPozo');
      localStorage.removeItem('seleccionadosCarrito');
      localStorage.removeItem('seleccionadosMillonaria');
      localStorage.removeItem('seleccionadosPozoRevancha');
      localStorage.removeItem('reservaId');
      localStorage.removeItem('total');
      localStorage.removeItem('totalConDesc');
      let headers = this.getHeaders();
      let address = this.buildAddress('borrarCarrito');
      let user = JSON.parse(localStorage.getItem('userData')!).playerDocument;

      let body = {
        user,
      };
      let data = await this.http.post(address, body, { headers }).toPromise();
      return data;
    } catch (error: any) {
      throw new Error(error.error.message);
    }
  }
  async setTotalConDesc() {
    return new Promise<any>(async (resolve, reject) => {
      //await this.buscarCarrito();
      let loteriaAux = this.getLoteriaLocal();
      let lottoAux = this.getLottoLocal();
      let pozoAux = this.getPozoLocal();
      let millonariaAux = this.getMillonariaLocal();
      let loteriaConDesc = 0;
      for (let id in loteriaAux) {
        if (loteriaAux[id].tieneDescuento) {
          loteriaConDesc += parseFloat(loteriaAux[id].subtotalConDesc);
        } else {
          loteriaConDesc += parseFloat(loteriaAux[id].subtotal);
        }
      }
      let lottoConDesc = 0;
      for (let id in lottoAux) {
        if (lottoAux[id].tieneDescuento) {
          lottoConDesc += parseFloat(lottoAux[id].subtotalConDesc);
        } else {
          lottoConDesc += parseFloat(lottoAux[id].subtotal);
        }
      }
      let pozoConDesc = 0;
      for (let id in pozoAux) {
        if (pozoAux[id].tieneDescuento) {
          pozoConDesc += parseFloat(pozoAux[id].subtotalConDesc);
        } else {
          pozoConDesc += parseFloat(pozoAux[id].subtotal);
        }
      }
      let millonariaConDesc = 0;
      for (let id in millonariaAux) {
        if (millonariaAux[id].tieneDescuento) {
          millonariaConDesc += parseFloat(millonariaAux[id].subtotalConDesc);
        } else {
          millonariaConDesc += parseFloat(millonariaAux[id].subtotal);
        }
      }
      let auxConDesc =
        loteriaConDesc + lottoConDesc + pozoConDesc + millonariaConDesc;

      this.totalConDesc = auxConDesc;
      localStorage.setItem('totalConDesc', JSON.stringify(auxConDesc));
      resolve('Done');
    });
  }

  async setTotal() {
    return new Promise<any>(async (resolve, reject) => {
      //await this.buscarCarrito();
      let loteriaAux = this.getLoteriaLocal();
      let lottoAux = this.getLottoLocal();
      let pozoAux = this.getPozoLocal();
      let revanchaAux = this.getPozoRevanchaLocal();
      let millonariaAux = this.getMillonariaLocal();
      let loteria = 0;
      for (let id in loteriaAux) {
        loteria += parseFloat(loteriaAux[id].subtotal);
      }
      let lotto = 0;
      for (let id in lottoAux) {
        lotto += parseFloat(lottoAux[id].subtotal);
      }
      let pozo = 0;
      for (let id in pozoAux) {
        pozo += parseFloat(pozoAux[id].subtotal);
      }
      let revancha = 0;
      for (let id in revanchaAux) {
        revancha += parseFloat(revanchaAux[id].subtotal);
      }
      let millonaria = 0;
      for (let id in millonariaAux) {
        millonaria += parseFloat(millonariaAux[id].subtotal);
      }
      let aux = loteria + lotto + pozo + revancha + millonaria;

      this.total = aux;
      localStorage.setItem('total', JSON.stringify(aux));
      resolve('Done');
    });
  }
  getTotal() {
    //return this.total;
    let total = JSON.parse(localStorage.getItem('total')!);
    if (total) {
      return total;
    } else {
      return 0;
    }
  }
  getTotalConDesc() {
    //return this.total;
    let total = JSON.parse(localStorage.getItem('totalConDesc')!);
    if (total) {
      return total;
    } else {
      return 0;
    }
  }
}
