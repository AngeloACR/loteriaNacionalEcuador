import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../services/consultas.service';

@Component({
  selector: 'consultas-ultimos-resultados',
  templateUrl: './ultimos-resultados.component.html',
  styleUrls: ['./ultimos-resultados.component.scss']
})
export class UltimosResultadosComponent implements OnInit {
  dataReady: boolean = false;
  constructor(private consultas: ConsultasService) { }

  async ngOnInit() {
    await this.consultas.recuperarUltimosResultados();
    this.dataReady = true;
  }

}
