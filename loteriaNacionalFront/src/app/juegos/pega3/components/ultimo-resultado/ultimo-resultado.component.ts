import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'pega3-ultimo-resultado',
  templateUrl: './ultimo-resultado.component.html',
  styleUrls: ['./ultimo-resultado.component.scss'],
})
export class UltimoResultadoComponent implements OnInit {
  ticketGanador?: any;
  ticketNumbers?: String[];
  isError: boolean = false;
  ultimoResultado: string = '';
  constructor(private router: Router) {}
  ngOnInit() {
    try {
      this.ultimoResultado = 
        localStorage.getItem('pega3UltimoResultado')!

    } catch (e) {
      this.isError = true;
    }
  }

  verUltimoBoletin() {
    //let sorteo = this.ticketGanador.numeroSorteo;
    this.router.navigateByUrl(`/consultas/pega3/boletin`);
  }
  verResultados() {
    this.router.navigateByUrl(`/consultas/pega3`);
  }
}
