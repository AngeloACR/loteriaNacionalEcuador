import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'consultas-loteria-boletin',
  templateUrl: './loteria-boletin.component.html',
  styleUrls: ['./loteria-boletin.component.scss'],
})
export class LoteriaBoletinComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  verMasResultados() {
    this.router.navigate(["/consultas/loteria"]);
  }
}
