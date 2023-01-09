import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'consultas-revancha-boletin',
  templateUrl: './revancha-boletin.component.html',
  styleUrls: ['./revancha-boletin.component.scss'],
})
export class RevanchaBoletinComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  verMasResultados() {
    this.router.navigate(['/consultas/revancha']);
  }
}
