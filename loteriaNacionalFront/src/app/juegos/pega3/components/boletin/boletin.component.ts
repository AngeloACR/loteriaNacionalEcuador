import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'pega3-boletin',
  templateUrl: './boletin.component.html',
  styleUrls: ['./boletin.component.scss'],
})
export class BoletinComponent implements OnInit {
  boletin: any;
  boletines: any;
  sorteosJugados: any;
  sorteoGanador: any;
  imgNotFound: boolean = false;
  showBox: boolean = false;
  sorteo: any;
  constructor(
  ) {}

  async ngOnInit() {
    this.triggerLoader();
    this.sorteosJugados = JSON.parse(localStorage.get('pega3Sorteos'));
    this.boletines = JSON.parse(localStorage.get('pega3Boletines'));
    this.boletin = this.boletines[0].ruta;
    this.showBox = true;
    this.dismissLoader();
  }

  changeBoletin() {
    let i = this.boletines.findIndex(
      (o: any) => o.sorteo == this.sorteoGanador
    );
    this.boletin = this.boletines[i].ruta;
  }

  handleImgError() {
    console.log('Img not found');
    this.imgNotFound = true;
  }

  isLoading: boolean = false;
  loadingMessage: String = 'Buscando el boletin';

  triggerLoader() {
    this.isLoading = true;
  }

  dismissLoader() {
    this.isLoading = false;
  }
}
