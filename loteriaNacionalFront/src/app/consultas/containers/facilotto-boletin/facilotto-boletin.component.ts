import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facilotto-boletin',
  templateUrl: './facilotto-boletin.component.html',
  styleUrls: ['./facilotto-boletin.component.scss'],
})
export class FacilottoBoletinComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  verMasResultados() {
    this.router.navigate(['/consultas/facilotto']);
  }
}
