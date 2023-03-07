import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaService } from '../../services/consulta.service';
@Component({
  selector: 'revancha-ultimo-resultado',
  templateUrl: './ultimo-resultado.component.html',
  styleUrls: ['./ultimo-resultado.component.scss'],
})
export class UltimoResultadoComponent implements OnInit {
  ticketGanador: any;
  ticketNumbers?: String[];
  mascota: string = '01';
  mascotaPath?: String;
  isError: boolean = false;
  constructor(private router: Router, private consulta: ConsultaService) {}
  ngOnInit() {
    try {
      let data = JSON.parse(
        localStorage.getItem('pozoRevanchaUltimoResultado')!
      );
      this.ticketNumbers =
        data.ultimoResultadoPozo.combinacion2.match(/.{1,2}/g);
      this.mascota = data.mascota;
      this.mascotaPath = this.consulta.obtenerMascota(this.mascota);

      this.ticketGanador = {
        ticketIndex: data.ultimoResultadoPozo.codigo,
        description: 'Boleto Ganador',
        ticketNumbers: this.ticketNumbers,
        mascota: this.mascota,
        numeroSorteo: data.numeroSorteo,
        codigo: data.ultimoResultadoPozo.codigo,
        sorteo: data.sorteo,
        valorPremio: data.premioPrincipal.valorPremio,
      };
    } catch (e) {
      this.isError = true;
    }
  }
  verUltimoBoletin() {
    let sorteo = this.ticketGanador.numeroSorteo;
    this.router.navigateByUrl(`/consultas/revancha/boletin/${sorteo}`);
  }
  verResultados() {
    this.router.navigateByUrl(`/consultas/revancha`);
  }
}
