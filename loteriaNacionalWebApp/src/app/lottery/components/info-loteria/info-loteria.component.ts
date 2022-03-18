import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectorRef,
} from "@angular/core";
import { sorteo } from "../../interfaces/lottery.interface";
import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-info-loteria",
  templateUrl: "./info-loteria.component.html",
  styleUrls: ["./info-loteria.component.scss"],
})
export class InfoLoteriaComponent implements OnInit {
  @Input() titulo: string;
  @Input() color: string;
  @Input() loteria: number;
  @Input() sorteos: Array<sorteo>;

  @Output() emitir = new EventEmitter<sorteo>();

  seleccionado: sorteo;
  boleto: string;
  fondoLoteria: boolean = true;
  isLoteria: boolean = false;
  fondoLotto: boolean = false;
  fondoPozo: boolean = false;
  imgNotFound: boolean = true;
  tipoLoteria: number;
  fondoMillonaria: boolean = false;

  constructor(
    private lotteryService: LotteryService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  getClassColor(color: string) {
    switch (color) {
      case "loteria":
        this.tipoLoteria = 1;
        this.fondoLoteria = true;
        this.isLoteria = true;
        this.fondoLotto = false;
        this.fondoMillonaria = false;
        this.fondoPozo = false;
        break;

      case "lotto":
        this.tipoLoteria = 2;
        this.fondoLotto = true;
        this.fondoMillonaria = false;
        this.fondoLoteria = false;
        this.fondoPozo = false;
        break;

      case "pozo":
        this.tipoLoteria = 5;
        this.fondoPozo = true;
        this.fondoLotto = false;
        this.fondoMillonaria = false;
        this.fondoLoteria = false;
        break;

      case "millonaria":
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
    this.boleto = "";
    this.fecha = (this.seleccionado as sorteo).fecha.split(" ")[0];
    let auxPremio = (this.seleccionado as sorteo).valorPremioPrincipal;
    let premio = parseFloat(auxPremio).toFixed(2);
    let precio = parseFloat((this.seleccionado as sorteo).precio).toFixed(2);
    this.cantidadDeFracciones = (
      this.seleccionado as sorteo
    ).cantidadDeFracciones;
    let auxPremioLoteria = parseInt(premio) * this.cantidadDeFracciones;
    if(this.tipoLoteria == 14){
    auxPremioLoteria = Math.ceil(parseInt(premio) * this.cantidadDeFracciones/10)*10;
    }
    this.premioLoteria = this.lotteryService
      .formatNumber(auxPremioLoteria)
      .split(".")[0];
    this.premio = this.lotteryService.formatNumber(premio).split(".")[0];
    this.precio = this.lotteryService.formatNumber(precio);
    this.emitir.emit(this.seleccionado);
    this.boleto = await this.lotteryService.obtenerImagenBoleto(
      this.tipoLoteria,
      this.seleccionado.sorteo
    );
    this.imgNotFound = false;
    this.changeDetectorRef.markForCheck();
  }

  fecha: string = "";
  premio: string = "";
  premioLoteria: string = "";
  precio: string = "";
  cantidadDeFracciones: number;

  async ngOnInit() {
    this.getClassColor(this.color);
    this.setSorteoDefault(); /* 
    this.sorteo = await this.lotteryService.obtenerSorteo(this.loteria);*/
  }
  sorteoDefault: sorteo;
  setSorteoDefault() {
    this.changeDetectorRef.detectChanges();
    this.seleccionado = this.sorteos[0];
    this.changeDetectorRef.markForCheck();
    this.onEmitir();
  }
}
