import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import { ConsultasService } from './consultas/services/consultas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'loteriaNacionalWeb';
  token: string = '';
  isDetail: boolean = false;
  constructor(private router: Router, private consultas: ConsultasService) {
    this.isDetail = false;
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        let data = decodeURIComponent(event.url);
        if (data.includes('compra_tus_juegos?token') || data.includes('inicio?token')) {
          let url = data.split('?token=')[0];
          this.token = data.split('?token=')[1];
          this.router.navigateByUrl(`${url}/${this.token}`);
        }
        
        if (data.includes('compra_tus_juegos/detalle')) {
          this.isDetail = true;
          let url;
          let ticketId;
          if (data.includes('?ticketId')) {
            url = data.split('?ticketId=')[0];
            ticketId = data.split('?ticketId=')[1];
            this.router.navigateByUrl(`${url}/${ticketId}`);
          }
        }
      }
      if (event instanceof NavigationEnd) {
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
  async ngOnInit() {
    await this.consultas.recuperarUltimosResultados();
  }
}
