import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loteria",
  templateUrl: "./loteria.component.html",
  styleUrls: ["./loteria.component.scss"]
})
export class LoteriaComponent implements OnInit {
  tickets: any;
  tooltips: number[] = [1]; 

  seleccionLoteria: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pageActual: number = 0;

  incrementar() {
    if (this.pageActual >= this.seleccionLoteria.length/9) {
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
