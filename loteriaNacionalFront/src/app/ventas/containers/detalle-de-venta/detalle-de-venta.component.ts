import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { PagosService } from '../../services/pagos.service';
import { VentasService } from '../../services/ventas.service';

@Component({
  selector: 'app-detalle-de-venta',
  templateUrl: './detalle-de-venta.component.html',
  styleUrls: ['./detalle-de-venta.component.scss'],
})
export class DetalleDeVentaComponent implements OnInit {
  compra: any;
  codigosPromocionales: any = [];
  ganador: any;
  compraReady: boolean = false;

  ticketId?: string;
  accountId?: string;
  user?: string;
  isLoading?: boolean;
  loadingMessage?: string;
  
  constructor(
    private actRoute: ActivatedRoute,
    private pagos: PagosService,
    private ventas: VentasService
  ) {
    this.actRoute.params.subscribe((params) => {
      let aux = params['id'];
      this.accountId = aux.split('-')[0];
      this.ticketId = aux.split('-')[1];
    });
  }

  async ngOnInit() {
    try {
      this.loadingMessage = 'Consultando el detalle de tu compra';
      this.isLoading = true;
      this.compra = await this.pagos.getCompra(this.ticketId, this.accountId);
      /* this.codigosPromocionales = await this.pagos.getCodigosPromocionales(
        this.ticketId
      ); */
      this.user = this.compra.user
        ? this.compra.user
        : this.ventas.getAuthData().user;
      this.ganador = await this.pagos.getGanador(this.ticketId);
      if (this.ganador.status) {
        let resultadosGanadores = this.ganador.values;
        this.compra.loteria.forEach((element: any) => {
          element['detalleGanador'] = [];
        });
        this.compra.lotto.forEach((element: any) => {
          element['detalleGanador'] = [];
        });
        this.compra.pozo.forEach((element: any) => {
          element['detalleGanador'] = [];
        });
        this.compra.millonaria.forEach((element: any) => {
          element['detalleGanador'] = [];
        });
        for (let i = 0; i < resultadosGanadores.length; i++) {
          const ganador = resultadosGanadores[i];
          let ganadorIndex;
          switch (ganador.tipoLoteria) {
            case 1:
              ganadorIndex = this.compra.loteria.findIndex(
                (x: any) =>
                  x.combinacion1 == ganador.combinacion1 &&
                  x.sorteo == ganador.numeroSorteo
              );
              if (ganadorIndex != -1) {
                this.compra.loteria[ganadorIndex]['hasGanador'] = true;
                this.compra.loteria[ganadorIndex]['detalleGanador'].push(
                  ganador
                );
              }
              break;
            case 2:
              ganadorIndex = this.compra.lotto.findIndex(
                (x: any) =>
                  x.combinacion1 == ganador.combinacion1 &&
                  x.sorteo == ganador.numeroSorteo
              );
              if (ganadorIndex != -1) {
                this.compra.lotto[ganadorIndex]['hasGanador'] = true;
                this.compra.lotto[ganadorIndex]['detalleGanador'].push(ganador);
              }
              break;

            case 5:
              ganadorIndex = this.compra.pozo.findIndex(
                (x: any) =>
                  x.combinacion1 == ganador.combinacion1 &&
                  x.sorteo == ganador.numeroSorteo
              );
              if (ganadorIndex != -1) {
                this.compra.pozo[ganadorIndex]['hasGanador'] = true;
                this.compra.pozo[ganadorIndex]['detalleGanador'].push(ganador);
              }
              break;
            case 14:
              ganadorIndex = this.compra.millonaria.findIndex(
                (x: any) =>
                  x.combinacion1 == ganador.combinacion1 &&
                  x.sorteo == ganador.numeroSorteo
              );
              if (ganadorIndex != -1) {
                this.compra.millonaria[ganadorIndex]['hasGanador'] = true;
                this.compra.millonaria[ganadorIndex]['detalleGanador'].push(
                  ganador
                );
              }
              break;
          }
        }
      }
      this.compraReady = true;
      this.isLoading = false;
    } catch (e: any) {
      console.log(e.message);
      this.isLoading = false;
      this.openError(e.message);
    }
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
