import { Component, OnInit } from '@angular/core';
import { ConsultasService } from './services/consultas.service';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss'],
})
export class ConsultasComponent implements OnInit {
  constructor(private router: Router, private consultas: ConsultasService) {}
  infoReady = false;
  notHome = false;
  async ngOnInit() {
    await this.consultas.recuperarUltimosResultados();
    this.infoReady = true;
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        let data = decodeURIComponent(event.url);

        if (data.includes('consultas') && data.split("/")[1].length) {
          this.notHome = true;
        }
      }
      if (event instanceof NavigationEnd) {
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
}
