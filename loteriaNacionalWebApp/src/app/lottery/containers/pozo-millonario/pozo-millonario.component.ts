import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pozo-millonario",
  templateUrl: "./pozo-millonario.component.html",
  styleUrls: ["./pozo-millonario.component.scss"]
})
export class PozoMillonarioComponent implements OnInit {
  tickets: any;

  seleccionPozo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
  pageActual: number = 0;

  incrementar() {
    if (this.pageActual >= this.seleccionPozo.length/4) {
      this.pageActual - 1;
      
    } else {
      this.pageActual++;
      
    }
  }

  decrementar() {
    if(this.pageActual <= 0) {
      this.pageActual = 1;
    }
      this.pageActual--;
  }

  constructor() {}

  ngOnInit() {}
}
