import { Component, OnInit } from '@angular/core';
import { VentaService as LoteriaService } from 'src/app/juegos/loteria/services/venta.service';
import { VentaService as LottoService } from 'src/app/juegos/lotto/services/venta.service';
import { VentaService as PozoService } from 'src/app/juegos/pozo/services/venta.service';
import { VentaService as RevanchaService } from 'src/app/juegos/pozoRevancha/services/venta.service';
import { VentaService as BingazoService } from 'src/app/juegos/bingazo/services/venta.service';
import { DescuentosService } from '../../services/descuentos.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-crear-descuentos',
  templateUrl: './crear-descuentos.component.html',
  styleUrls: ['./crear-descuentos.component.scss']
})
export class CrearDescuentosComponent implements OnInit {
  today = new Date()
  descuento: any = {
    sorteos: [],
    juegos: [],
    minimum: 0,
    maximum: 0,
    initDate: new Date(),
    endDate: new Date(),
    discount: 0,
    discountType: false
  };

  isLoading?: boolean;
  loadingMessage?: string;
  sorteos: any = [];
  sorteosLoteria: any = [];
  sorteosLotto: any = [];
  sorteosPozo: any = [];
  sorteosRevancha: any = [];
  sorteosBingazo: any = [];
  juegos: any = []
  constructor(
    private loteria: LoteriaService,
    private lotto: LottoService,
    private bingazo: BingazoService,
    private pozo: PozoService,
    private revancha: RevanchaService,
    private descuentos: DescuentosService,
    private datePipe: DatePipe,
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.isLoading = true;
      let token = await this.descuentos.getToken();
      let sorteosLoteria = await this.loteria.obtenerSorteo(token)
      console.log(sorteosLoteria)
      let sorteosLotto = await this.lotto.obtenerSorteo(token)
      let sorteosBingazo = await this.bingazo.obtenerSorteo(token)
      let sorteosPozo = await this.pozo.obtenerSorteo(token)
      let sorteosRevancha = await this.revancha.obtenerSorteo(token)
      this.juegos = [{
        id: 1, nombre: "Lotería", sorteos: sorteosLoteria
      }, {
        id: 2, nombre: "Lotto", sorteos: sorteosLotto
      }, {
        id: 5, nombre: "Pozo Millonario", sorteos: sorteosPozo
      }, {
        id: 17, nombre: "Pozo Revancha", sorteos: sorteosRevancha
      }, {
        id: 12, nombre: "Bingazo", sorteos: sorteosBingazo
      },]
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      this.openError("Ha ocurrido un error iniciando la configuración")
      throw error
    }
  }

  changeSorteos() {
    this.sorteos = [];
    this.juegos.filter((juego: any) => {
      return this.descuento.juegos.includes(juego.id)
    }).map((juego: any) => juego.sorteos).forEach((sorteos: any) => {
      this.sorteos = [...this.sorteos, ...sorteos]
    });
    console.log(this.sorteos)
    this.descuento.sorteos = this.descuento.sorteos.filter((sorteo: any) => {
      let sorteos = this.sorteos.map((sorteo: any) => sorteo.sorteo)
      return sorteos.includes(sorteo)
    })
  }

  async guardarDescuento() {
    try {

      this.isLoading = true;
      this.descuento.initDate = this.datePipe.transform(this.descuento.initDate, 'dd-MM-YYYY')
      this.descuento.endDate = this.datePipe.transform(this.descuento.endDate, 'dd-MM-YYYY')
      console.log(this.descuento.initDate, this.descuento.endDate)
      let data = await this.descuentos.guardarDescuento(this.descuento);
      this.descuento = {
        sorteos: [],
        juegos: [],
        minimum: 0,
        maximum: 0,
        initDate: new Date(),
        endDate: new Date(),
        discount: 0,
        discountType: false
      };
      this.isLoading = false;
    } catch (error: any) {
      this.isLoading = false;
      this.openError(`Ha ocurrido el siguiente error: ${error.message}`)
      throw error
    }
  }

  checkIfNotCompleted() {
    let initDate = new Date(this.descuento.initDate).setHours(0, 0, 0, 0);
    let endDate = new Date(this.descuento.endDate).setHours(0, 0, 0, 0);

    return !this.descuento.sorteos.length ||
      !this.descuento.juegos.length ||
      !this.descuento.minimum ||
      !this.descuento.maximum ||
      initDate == endDate ||
      !this.descuento.discount
  }
  isError: boolean = false;
  errorMessage?: string;
  openError(msg: string) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }
}
