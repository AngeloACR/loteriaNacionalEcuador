import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loteria",
  templateUrl: "./loteria.component.html",
  styleUrls: ["./loteria.component.scss"]
})
export class LoteriaComponent implements OnInit {
  tickets: any;
  tooltips: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {}

  ngOnInit() {
    this.tickets = [
      {
        ticketIndex: 245,
        date: "05/05/2021",
        fraccion: ["01", "03", "05", "10"],
        ticketNumbers: ["5", "6", "4", "4", "3"],
        sorteo: 6575
      },
      {
        ticketIndex: 245,
        date: "05/05/2021",
        fraccion: ["01", "03", "05", "10"],
        ticketNumbers: ["5", "6", "4", "4", "3"],
        sorteo: 6575
      },
      {
        ticketIndex: 245,
        date: "05/05/2021",
        fraccion: ["01", "03", "05", "10"],
        ticketNumbers: ["5", "6", "4", "4", "3"],
        sorteo: 6575
      }
    ];
  }
}
