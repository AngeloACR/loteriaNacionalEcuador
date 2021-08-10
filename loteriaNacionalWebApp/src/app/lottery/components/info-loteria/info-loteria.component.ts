import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectorRef
} from "@angular/core";
import { sorteo } from "../../interfaces/lottery.interface";
import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-info-loteria",
  templateUrl: "./info-loteria.component.html",
  styleUrls: ["./info-loteria.component.scss"]
})
export class InfoLoteriaComponent implements OnInit {
  @Input() titulo: string;
  @Input() color: string;
  @Input() loteria: number;
  @Input() sorteos: Array<sorteo>;

  @Output() emitir = new EventEmitter<sorteo | string>();

  seleccionado: sorteo | string;
  sorteo: Array<sorteo>;

  fondoLoteria: boolean = true;
  fondoLotto: boolean = false;
  fondoPozo: boolean = false;

  constructor(
    private lotteryService: LotteryService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  getClassColor(color: string) {
    switch (color) {
      case "loteria":
        this.fondoLoteria = true;
        this.fondoLotto = false;
        this.fondoPozo = false;
        break;

      case "lotto":
        this.fondoLotto = true;
        this.fondoLoteria = false;
        this.fondoPozo = false;
        break;

      case "pozo":
        this.fondoPozo = true;
        this.fondoLotto = false;
        this.fondoLoteria = false;
        break;
    }
  }

  onEmitir() {
    this.changeDetectorRef.detectChanges();
    this.changeDetectorRef.markForCheck();

    this.fecha = (this.seleccionado as sorteo).fecha;
    this.premio = (this.seleccionado as sorteo).valorPremioPrincipal;
    this.precio = (this.seleccionado as sorteo).precio;
    this.emitir.emit(this.seleccionado);
  }

  fecha: string = "";
  premio: string = "";
  precio: string = "";

  async ngOnInit() {
    this.getClassColor(this.color);
    this.setSorteoDefault(); /* 
    this.sorteo = await this.lotteryService.obtenerSorteo(this.loteria);
    console.log(this.sorteo); */
  }

  setSorteoDefault() {
    this.changeDetectorRef.detectChanges();
    this.seleccionado = "default";
    this.changeDetectorRef.markForCheck();
  }
}
