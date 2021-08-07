import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectorRef
} from "@angular/core";
import { sorteo, ticketsNacional } from "../../interfaces/lottery.interface";
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

  @Output() emitir = new EventEmitter<sorteo | string>();

  seleccionado: sorteo | string;
  sorteo: Array<sorteo>;

  fondoLoteria: boolean = true;
  fondoLotto: boolean = false;
  fondoPozo: boolean = false;

  constructor(
    private lotteryService: LotteryService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    /* this.seleccionado['fracciones'] = 20 */
  }

  getClassColor(loteria: number) {
    switch (loteria) {
      case 1:
        this.fondoLoteria = true;
        this.fondoLotto = false;
        this.fondoPozo = false;

      case 2:
        this.fondoLotto = true;
        this.fondoLoteria = false;
        this.fondoPozo = false;

      case 5:
        this.fondoPozo = true;
        this.fondoLotto = false;
        this.fondoLoteria = false;
    }
  }

  onEmitir() {
    this.changeDetectorRef.detectChanges();
    /*let fracciones: any;
    fracciones = this.seleccionado["fracciones"];

         let ticketsNacional: ticketsNacional[];

    ticketsNacional = JSON.parse(localStorage.getItem("ticketsNacional"));
    // Eliminio lo que existe
    ticketsNacional.forEach(element => {
      for (let i = 0; i < this.seleccionado["fracciones"]; i++) {
        element.seleccionados.splice(0, this.seleccionado["fracciones"]);
      }
    });
    localStorage.setItem("ticketsNacional", JSON.stringify(ticketsNacional));

    ticketsNacional = JSON.parse(localStorage.getItem("ticketsNacional"));

    // Vuelvo a llenar
    ticketsNacional.forEach(element => {
      for (let i = 0; i < this.seleccionado["fracciones"]; i++) {
        element.seleccionados.push({ fraccion: i + 1, status: false });
      }
    });

    localStorage.setItem("ticketsNacional", JSON.stringify(ticketsNacional)); */
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
    this.sorteo = await this.lotteryService.obtenerSorteo(this.loteria);
    this.getClassColor(this.loteria);
    this.setSorteoDefault();
  }

  setSorteoDefault() {
    this.changeDetectorRef.detectChanges();
    this.seleccionado = "default";
    this.changeDetectorRef.markForCheck();
  }
}
