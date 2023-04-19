import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit {
  ventasLink: string = 'https://www.loteria.com.ec/#/loteria/compra_tus_juegos';
  consultasLink: string = 'https://ventas.loteria.com.ec/consultas/loteria';
  token: string;
  juegosLink: string = 'https://www.loteria.com.ec/#/juegos';
  puntosDeLaSuerteLink: string =
    'https://www.loteria.com.ec/#/contenido/puntos-suerte';
  constructor(private actRoute: ActivatedRoute) {
    this.actRoute.params.subscribe((params) => {
      this.token = params['token'];
    });
  }

  ngOnInit(): void {}
  authError() {
    this.openError(
      'Por favor, para poder comprar tu boleto preferido, deberás iniciar sesión en tu cuenta',
      'Aviso'
    );
  }

  checkToken(e: any) {
    if (!this.token) {
      e.stopPropagation();
      e.preventDefault();
      this.authError();
      return;
    }
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
