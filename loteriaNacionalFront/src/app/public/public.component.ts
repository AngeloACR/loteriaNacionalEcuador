import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit {
  ventasLink: string =
    'http://loteria.mongibello.tech:83/#/loteria/compra_tus_juegos';
  consultasLink: string = 'http://loteria.mongibello.tech:83/#/loteria/inicio';
  juegosLink: string = 'http://loteria.mongibello.tech:83/#/juego';
  puntosDeLaSuerteLink: string = 'loteria.com.ec/puntos-de-la-suerte';
  constructor() {}

  ngOnInit(): void {}
}
