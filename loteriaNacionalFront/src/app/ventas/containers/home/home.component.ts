import { Component, OnInit } from '@angular/core';
import { VentasService } from '../../services/ventas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  token: string = "";
  constructor(    private ventas: VentasService,
    private actRoute: ActivatedRoute,
  ) {
    this.actRoute.params.subscribe((params) => {
      this.token = params['token'];
    });
  }

  async ngOnInit() {
    console.log("here")
    if (this.token) {
      let data = await this.ventas.authUser(this.token);
    }
  }

}
