import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loteria",
  templateUrl: "./loteria.component.html",
  styleUrls: ["./loteria.component.scss"]
})
export class LoteriaComponent implements OnInit {
  tickets: any;
  tooltips: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

  pageActual: number = 1;
  
  constructor() {}

  ngOnInit() {}
}
