import { Component, OnInit } from '@angular/core';
import { DescuentosService } from '../../services/descuentos.service';

@Component({
  selector: 'app-ver-descuentos',
  templateUrl: './ver-descuentos.component.html',
  styleUrls: ['./ver-descuentos.component.scss']
})
export class VerDescuentosComponent implements OnInit {

  displayedColumns: string[] = ['juegos', 'sorteos', 'minimum', 'maximum', 'discount', 'initDate', 'endDate', 'activatedByUser'];
  descuentos: any = [];
  constructor(private descuentosService: DescuentosService) { }

  async ngOnInit(): Promise<void> {
    this.descuentos = await this.descuentosService.getDescuentos();
    console.log(this.descuentos)
  }

  async updateDiscount(descuento: any) {
    await this.descuentosService.changeActive(descuento._id);
    this.descuentos = await this.descuentosService.getDescuentos();
  }

}
