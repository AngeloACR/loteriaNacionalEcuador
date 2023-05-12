import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() message: String = '';
  @Input() loader: String = '';
  loaderPath: string = 'assets/loader.gif';
  logoPath: string = '';
  constructor() {}

  interval: any;
  ngOnInit() {
    switch (this.loader) {
      case 'lotto':
        this.logoPath = 'assets/img/lotto-sombra-2.png';
        //this.logoPath = "assets/lottoLoader.gif";
        break;
      case 'facilotto':
        this.logoPath = 'assets/img/facilotto-sombra.png';
        //this.logoPath = "assets/lottoLoader.gif";
        break;
      case 'pozo':
        this.logoPath = 'assets/img/pozo-sombra.png';
        //this.logoPath = "assets/pozoLoader.gif";
        break;
        case 'millonaria':
          this.logoPath = 'assets/img/millonaria-consulta.png';
          //this.logoPath = "assets/pozoLoader.gif";
          break;
          case 'revancha':
            this.logoPath = 'assets/img/revancha-sombra.png';
            //this.logoPath = "assets/pozoLoader.gif";
            break;
      default:
        this.logoPath = 'assets/img/loteria-sombra.png';
        //this.logoPath = "assets/loteriaLoader.gif";
        break;
    }
  }
}
