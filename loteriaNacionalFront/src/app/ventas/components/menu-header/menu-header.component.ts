import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  AfterContentChecked,
} from '@angular/core';
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
  linkBingazo: string = '';
  token?: string;
  usuario?: string;
  linkJuegosOnline?: string;

  selectedClass = [
    {
      selected: false,
    },
    {
      selected: false,
    },
    {
      selected: false,
    },
    {
      selected: false,
    },
  ];
  constructor(
    private actRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.actRoute.url.subscribe((url: any) => {
      this.setSelected(url[0].path);
    });

    this.actRoute.params.subscribe((params) => {
      this.token = params['token'];
    });
  }

  ngOnInit() {
    this.cdr.detectChanges();
    this.linkLoteriaNacional = `/compra_tus_juegos/loteria/${this.token}`;
    this.linkLotto = `/compra_tus_juegos/lotto/${this.token}`;
    this.linkPozoMillonario = `/compra_tus_juegos/pozo/${this.token}`;
    this.linkBingazo = `/compra_tus_juegos/bingazo/${this.token}`;
    this.cdr.markForCheck();
  }


  setSelected(url: string) {
    let index = ['loteria', 'lotto', 'pozo', 'bingazo'].indexOf(url);
    if (index != -1) this.selectedClass[index].selected = true;
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
