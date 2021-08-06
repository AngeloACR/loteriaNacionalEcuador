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

  @Output() emitir = new EventEmitter<sorteo | String>();

  seleccionado: sorteo | String;
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
        return (this.fondoLoteria = true);

      case 2:
        return (this.fondoLotto = true);

      case 5:
        return (this.fondoPozo = true);
    }
  }

  onEmitir() {
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

    this.emitir.emit(this.seleccionado);
  }

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
