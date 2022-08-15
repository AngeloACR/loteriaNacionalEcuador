import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'consultas-millonaria-boletin',
  templateUrl: './millonaria-boletin.component.html',
  styleUrls: ['./millonaria-boletin.component.scss'],
})
export class MillonariaBoletinComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  verMasResultados() {
    this.router.navigate(['/consultas/millonaria']);
  }
}
