import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit {
  ventasLink: string = 'https://www.loteria.com.ec/#/loteria/compra_tus_juegos';
  consultasLink: string = '/consultas/loteria';
  juegosLink: string = 'https://www.loteria.com.ec/#/juego';
  puntosDeLaSuerteLink: string =
    'https://www.loteria.com.ec/#/contenido/puntos-suerte';
  constructor() {}

  ngOnInit(): void {}
}
