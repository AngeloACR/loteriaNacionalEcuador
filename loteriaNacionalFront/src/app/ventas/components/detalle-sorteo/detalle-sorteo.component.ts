import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectorRef,
} from '@angular/core';
import { sorteo } from '../../interfaces/venta';
import { VentasService } from '../../services/ventas.service';

@Component({
  selector: 'app-detalle-sorteo',
  templateUrl: './detalle-sorteo.component.html',
  styleUrls: ['./detalle-sorteo.component.scss'],
})
export class DetalleSorteoComponent implements OnInit {
  @Input() titulo?: string;
  @Input() color?: string;
  @Input() loteria?: number;
  @Input() sorteos?: Array<sorteo>;

  @Output() emitir = new EventEmitter<sorteo>();

  seleccionado?: sorteo;
  boleto?: string;
  fondoLoteria: boolean = true;
  isLoteria: boolean = false;
  isPozo: boolean = false;
  fondoLotto: boolean = false;
  fondoPozo: boolean = false;
  imgNotFound: boolean = true;
  tipoLoteria?: number;
  fondoMillonaria: boolean = false;

  constructor(
    private ventas: VentasService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  getClassColor(color: string) {
    switch (color) {
      case 'loteria':
        this.tipoLoteria = 1;
        this.fondoLoteria = true;
        this.isLoteria = true;
        this.fondoLotto = false;
        this.fondoMillonaria = false;
        this.fondoPozo = false;
        break;

      case 'lotto':
        this.tipoLoteria = 2;
        this.fondoLotto = true;
        this.fondoMillonaria = false;
        this.fondoLoteria = false;
        this.fondoPozo = false;
        break;

      case 'pozo':
        this.tipoLoteria = 5;
        this.fondoPozo = true;
        this.fondoLotto = false;
        this.fondoMillonaria = false;
        this.fondoLoteria = false;
        this.isPozo = true;
        break;

      case 'millonaria':
        this.tipoLoteria = 14;
        this.isLoteria = true;

        this.fondoMillonaria = true;
        this.fondoPozo = false;
        this.fondoLotto = false;
        this.fondoLoteria = false;
        break;
    }
  }

  handleImgError() {
    this.imgNotFound = true;
  }

  async onEmitir() {
    this.changeDetectorRef.detectChanges();
    this.boleto = '';
    this.fecha = (this.seleccionado as sorteo).fecha.split(' ')[0];
    this.hora = (this.seleccionado as sorteo).fecha.split(' ')[1];
    let auxPremio = (this.seleccionado as sorteo).valorPremioPrincipal;
    let auxPremioRevancha = (this.seleccionado as sorteo).sorteoRevancha
      .valorPremioPrincipal;
    let premio = parseFloat(auxPremio).toFixed(2);
    let premioRevancha = parseFloat(auxPremioRevancha).toFixed(2);
    let precio = parseFloat((this.seleccionado as sorteo).precio).toFixed(2);
    let precioRevancha = parseFloat(
      (this.seleccionado as sorteo).sorteoRevancha.precio
    ).toFixed(2);
    this.cantidadDeFracciones = (
      this.seleccionado as sorteo
    ).cantidadDeFracciones;
    let auxPremioLoteria = parseInt(premio) * this.cantidadDeFracciones;
    if (this.tipoLoteria == 14) {
      auxPremioLoteria =
        Math.ceil((parseInt(premio) * this.cantidadDeFracciones) / 10) * 10;
    }
    this.premioLoteria = this.ventas
      .formatNumber(auxPremioLoteria)
      .split('.')[0];
    this.premio = this.ventas.formatNumber(premio).split('.')[0];
    this.premioRevancha = this.ventas
      .formatNumber(premioRevancha)
      .split('.')[0];
    this.precio = this.ventas.formatNumber(precio);
    this.precioRevancha = this.ventas.formatNumber(precioRevancha);
    this.emitir.emit(this.seleccionado);
    this.boleto = await this.ventas.obtenerImagenBoleto(
      this.tipoLoteria,
      this.seleccionado!.sorteo
    );
    this.imgNotFound = false;
    this.changeDetectorRef.markForCheck();
  }

  fecha: string = '';
  hora: string = '';
  premio: string = '';
  premioRevancha: string = '';
  premioLoteria: string = '';
  precio: string = '';
  precioRevancha: string = '';
  cantidadDeFracciones?: number;

  async ngOnInit() {
    this.getClassColor(this.color!);
    this.setSorteoDefault(); 
  }
  sorteoDefault?: sorteo;

  setSorteoDefault() {
    this.changeDetectorRef.detectChanges();
    this.seleccionado = this.sorteos![0];
    this.changeDetectorRef.markForCheck();
    this.onEmitir();
  }
}
