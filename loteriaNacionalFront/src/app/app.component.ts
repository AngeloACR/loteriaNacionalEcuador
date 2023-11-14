import { Component, HostListener, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import { VentasService } from './ventas/services/ventas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'loteriaNacionalWeb';
  token: string = '';
  isDetail: boolean = false;
  showPromo: boolean = false;
  showHeader: boolean = true;

  @HostListener('window:message', ['$event'])
  handleScroll(e: any) {
    if (e.data && e.data.message == 'scrolling') {
      localStorage.setItem('top', e.data.top);
      localStorage.setItem('screen', e.data.screen);
    }
  }
  constructor(private router: Router, private ventas: VentasService) {
    this.isDetail = false;
    this.router.events.subscribe(async (event: Event) => {
      if (event instanceof NavigationStart) {
        let data = decodeURIComponent(event.url);

        if (data.includes('inicio')) {
          this.showHeader = false;
          this.showPromo = false;
        }
        if (
          data.includes('compra_tus_juegos?token') ||
          data.includes('inicio?token')
        ) {
          let url = data.split('?token=')[0];
          this.token = data.split('?token=')[1];
          await this.ventas.authUser(this.token);
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
    localStorage.setItem('top', '0');
    localStorage.setItem('screen', '0');
  }
  closePromo() {
    this.showPromo = false;
  }
}
