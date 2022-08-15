import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'ventas-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent implements OnInit {
  @Input() home: boolean = false;
  linkLotto: string = '';
  linkLoteriaNacional: string = '';
  linkPozoMillonario: string = '';
  linkLaMillonaria: string = '';
  token?: string;
  usuario?: string;
  linkJuegosOnline?: string;
  homeClass = {
    home: this.home,
  };
  constructor(private actRoute: ActivatedRoute) {
    this.actRoute.params.subscribe((params) => {
      this.token = params['token'];
    });
  }

  ngOnInit() {
    this.homeClass = {
      home: this.home,
    };
    this.linkLoteriaNacional = `/compra_tus_juegos/loteria/${this.token}`;
    this.linkLotto = `/compra_tus_juegos/lotto/${this.token}`;
    this.linkPozoMillonario = `/compra_tus_juegos/pozo/${this.token}`;
    this.linkLaMillonaria = `/compra_tus_juegos/millonaria/${this.token}`;
    this.linkJuegosOnline = `http://loteria.mongibello.tech:83/#/juegos`;
  }
  getLink(link: string) {
    if (!this.token) {
      return '/inicio';
    }
    return link;
  }
  checkToken(e: any) {
    if (!this.token) {
      e.stopPropagation();
      e.preventDefault();
      this.authError();
    }
    return;
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
