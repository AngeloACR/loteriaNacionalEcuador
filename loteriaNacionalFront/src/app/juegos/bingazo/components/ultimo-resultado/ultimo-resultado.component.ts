import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaService } from '../../services/consulta.service';
@Component({
  selector: 'bingazo-ultimo-resultado',
  templateUrl: './ultimo-resultado.component.html',
  styleUrls: ['./ultimo-resultado.component.scss'],
})
export class UltimoResultadoComponent implements OnInit {
  ticketGanador: any;
  ticketNumbers?: String[];
  mascota: string = '01';
  mascotaPath?: String;
  isError: boolean = false;
  constructor(private router: Router, private consulta: ConsultaService) { }
  ngOnInit() {
    try {
      let data = JSON.parse(
        localStorage.getItem('bingazoUltimoResultado')!
      );
      this.ticketNumbers =
        data.ultimoResultadoBingazo.combinacion1.split('');

      this.ticketGanador = {
        ticketIndex: data.ultimoResultadoBingazo.codigo,
        description: 'Boleto Ganador',
        ticketNumbers: this.ticketNumbers,
        numeroSorteo: data.numeroSorteo,
        codigo: data.ultimoResultadoBingazo.codigo,
        sorteo: data.sorteo,
        valorPremio: data.premioPrincipal.valorPremio,
      };
      console.log(this.ticketGanador)
    } catch (e) {
      this.isError = true;
    }
  }
  verUltimoBoletin() {
    let sorteo = this.ticketGanador.numeroSorteo;
    this.router.navigateByUrl(`/consultas/bingazo/boletin/${sorteo}`);
  }
  verResultados() {
    this.router.navigateByUrl(`/consultas/bingazo`);
  }
}
