import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'consultas-lotto-boletin',
  templateUrl: './lotto-boletin.component.html',
  styleUrls: ['./lotto-boletin.component.scss']
})
export class LottoBoletinComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verMasResultados(){
    this.router.navigate(["/consultas/lotto"]);

  }
}
