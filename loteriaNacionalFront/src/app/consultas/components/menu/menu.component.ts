import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'consultas-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  token: string = "";
  comprasLink: string = "/compra_tus_juegos/";
  constructor(
    private actRoute: ActivatedRoute,

  ) {
    this.actRoute.params.subscribe((params) => {
      this.token! = params['token'];
    });
  }

  ngOnInit(): void {
    this.comprasLink = `/compra_tus_juegos/${this.token}`
  }

}
