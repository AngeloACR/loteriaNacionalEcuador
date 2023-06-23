import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pega3-boletin',
  templateUrl: './pega3-boletin.component.html',
  styleUrls: ['./pega3-boletin.component.scss'],
})
export class Pega3BoletinComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  verMasResultados() {
    this.router.navigate(['/consultas/pega3']);
  }
}
