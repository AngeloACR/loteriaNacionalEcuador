import { Component, OnInit } from '@angular/core';
import { ConsultasService } from './services/consultas.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  constructor(private consultas: ConsultasService) {}
  infoReady = false;
  async ngOnInit() {
    await this.consultas.recuperarUltimosResultados();
    this.infoReady = true;
  }
}
