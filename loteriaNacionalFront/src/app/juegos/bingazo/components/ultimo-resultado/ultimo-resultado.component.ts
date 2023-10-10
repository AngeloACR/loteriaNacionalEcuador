import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaService } from '../../services/consulta.service';
@Component({
  selector: 'bingazo-ultimo-resultado',
  templateUrl: './ultimo-resultado.component.html',
  styleUrls: ['./ultimo-resultado.component.scss'],
})
export class UltimoResultadoComponent implements OnInit {
  ticketGanador?: any;
  ticketNumbers?: String[];
  isError: boolean = false;
  ultimoResultado: string = '';
  constructor(private router: Router) { }
  ngOnInit() {
    try {
      this.ultimoResultado =
        localStorage.getItem('bingazoUltimoResultado')!
    } catch (e) {
      this.isError = true;
    }
  }

  verUltimoBoletin() {
    let sorteosJugados = JSON.parse(localStorage.getItem('bingazoSorteos')!);
    this.router.navigateByUrl(`/consultas/bingazo/boletin/${sorteosJugados[0]}`);
  }
  verResultados() {

    this.router.navigateByUrl(`/consultas/bingazo`);
  }
}
