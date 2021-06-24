import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lotto",
  templateUrl: "./lotto.component.html",
  styleUrls: ["./lotto.component.scss"]
})
export class LottoComponent implements OnInit {
  tickets: any;

  seleccionLotto: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pageActual: number = 0;

  incrementar() {
    if (this.pageActual >= this.seleccionLotto.length/4) {
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

  ngOnInit() {
   /*  console.log(JSON.parse(localStorage.getItem('usuario[0]'))); */
  }
}
