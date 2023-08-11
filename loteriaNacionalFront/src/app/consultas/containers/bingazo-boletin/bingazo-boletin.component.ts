import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'consultas-bingazo-boletin',
  templateUrl: './bingazo-boletin.component.html',
  styleUrls: ['./bingazo-boletin.component.scss'],
})
export class BingazoBoletinComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  verMasResultados() {
    this.router.navigate(['/consultas/bingazo']);
  }
}
