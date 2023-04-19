import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<LoaderComponent>
  ) {
    this.message = this.data.message;
    this.loader = this.data.loader;
  }

  interval: any;
  ngOnInit() {
    switch (this.loader) {
      case 'lotto':
        this.logoPath = 'assets/img/lotto-sombra-2.png';
        break;
      case 'facilotto':
        this.logoPath = 'assets/img/facilotto-sombra.png';
        break;
      case 'pozo':
        this.logoPath = 'assets/img/pozo-sombra.png';
        break;
      case 'millonaria':
        this.logoPath = 'assets/img/millonaria-consulta.png';
        break;
      default:
        this.logoPath = 'assets/img/loteria-sombra.png';
        break;
    }
  }
}
