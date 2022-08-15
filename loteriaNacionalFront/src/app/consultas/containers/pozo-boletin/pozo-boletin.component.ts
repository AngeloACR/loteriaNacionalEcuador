import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'consultas-pozo-boletin',
  templateUrl: './pozo-boletin.component.html',
  styleUrls: ['./pozo-boletin.component.scss']
})
export class PozoBoletinComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  verMasResultados(){
    this.router.navigate(["/consultas/pozo"]);

  }
}
