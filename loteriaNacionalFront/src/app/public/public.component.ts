import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VentasService } from '../ventas/services/ventas.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit {
  ventasLink: string = '/compra_tus_juegos';
  consultasLink: string = '/consultas/loteria';
  juegosLink: string = 'https://www.loteria.com.ec/#/juegos';
  token: string;
  puntosDeLaSuerteLink: string =
    'https://www.loteria.com.ec/#/contenido/puntos-suerte';
  constructor(private actRoute: ActivatedRoute, private ventas: VentasService) {
    this.actRoute.params.subscribe((params) => {
      this.token = params['token'];
    });
  }

  async ngOnInit() {
    console.log('here');
    if (this.token) {
      let data = await this.ventas.authUser(this.token);
    }
    this.ventasLink = `${this.ventasLink}/${this.token}`;
  }

  checkToken(e: any) {
    if (!this.token) {
      e.stopPropagation();
      e.preventDefault();
      this.authError();
      return;
    }
  }
  authError() {
    this.openError(
      'Por favor, para poder comprar tu boleto preferido, deberás iniciar sesión en tu cuenta',
      'Aviso'
    );
  }

  isError: boolean = false;
  errorMessage?: string;
  errorTitle?: string;
  openError(msg: string, title: string) {
    this.errorTitle = title.toUpperCase();
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }
}
