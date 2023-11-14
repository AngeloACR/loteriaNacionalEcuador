import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VentasService } from './services/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
  token: string = "";
  logoPath: string
   = 'assets/img/loteria-sombra.png';
  constructor(
    private ventas: VentasService,
    private actRoute: ActivatedRoute,
  ) {
    this.actRoute.params.subscribe((params) => {
      this.token = params['token'];
    });
  }

  async ngOnInit() {
    if (this.token) {
      let data = await this.ventas.authUser(this.token);
    }
  }

}
