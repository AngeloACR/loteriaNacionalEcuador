import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'lotto-ultimo-resultado',
  templateUrl: './ultimo-resultado.component.html',
  styleUrls: ['./ultimo-resultado.component.scss'],
})
export class UltimoResultadoComponent implements OnInit {
  ticketGanador?: any;
  ticketNumbers?: String[];
  premiosEspeciales?: any;
  
  constructor(private router: Router) {}
  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('lottoUltimoResultado')!);
    this.ticketNumbers = data.ultimoResultadoLotto.combinacion1.split('');
    this.ticketGanador = {
      ticketIndex: data.ultimoResultadoLotto.codigo,
      description: 'Boleto Ganador',
      ticketNumbers: this.ticketNumbers,
      premiosEspeciales: this.premiosEspeciales,
      numeroSorteo: data.numeroSorteo,
      sorteo: data.sorteo,
    };
  }
  verUltimoBoletin() {
    let sorteo = this.ticketGanador.numeroSorteo;
    this.router.navigateByUrl(`/consultas/lotto/boletin/${sorteo}`);
  }
  verResultados() {
    this.router.navigateByUrl(`/consultas/lotto`);
  }
}
