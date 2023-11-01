import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { VentaService as BingazoService } from '../../../juegos/bingazo/services/venta.service'
import { VentaService as PozoService } from '../../../juegos/pozo/services/venta.service'
import { VentaService as LottoService } from '../../../juegos/lotto/services/venta.service'
import { VentasService } from "../../services/ventas.service";

@Component({
  selector: 'app-descripcion-de-venta',
  templateUrl: './descripcion-de-venta.component.html',
  styleUrls: ['./descripcion-de-venta.component.scss']
})
export class DescripcionDeVentaComponent implements OnInit {
  @Input() compra: any;
  @Input() user: any;
  @Input() resumen: boolean = true;
  @Input() showHeader: boolean = true;
  @Input() ticketId: any;
  @Input() codigosPromocionales: any;

  constructor(private pozo: PozoService, private lotto: LottoService, private bingazo: BingazoService, private ventas: VentasService) { }

  ngOnInit() {
  }

  getBoleto(tipoLoteria: number, sorteo: number) {
    return this.ventas.obtenerImagenBoleto(
      tipoLoteria,
      sorteo
    );
  }

  getDay(fecha: string) {
    let day = (new Date(fecha.split(" ")[0].split("/").reverse().join("-"))).getDay()
    console.log(day)
    return day
  }

  rutaMascota(mascota: any) {
    let mascotaData = this.pozo.obtenerCaracteristicasDeMascota(mascota);
    return mascotaData!.ruta;
  }
  rutaFruta(fruta: any) {
    let frutaData = this.bingazo.obtenerCaracteristicasDeFruta(fruta);
    return frutaData!.ruta;
  }
  rutaAntojito(antojito: any) {
    console.log(antojito)
    let antojitoData = this.lotto.obtenerCaracteristicasDeAntojito(antojito);
    console.log(antojitoData)
    return antojitoData!.ruta;
  }
  formatNumber(number: any) {// Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });


    return formatter.format(number);
  }
  filtrarBingazo(combinacion: any) {
    return combinacion.replaceAll(",", ",\ ")
  }
}
