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
  constructor() {

  }

  async ngOnInit() {

  }

}
