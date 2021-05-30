import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loteria",
  templateUrl: "./loteria.component.html",
  styleUrls: ["./loteria.component.scss"]
})
export class LoteriaComponent implements OnInit {
  tickets: any[];
  constructor() {}

  ngOnInit() {
    this.tickets = [
      {
        ticketIndex: 245,
        date: "05/05/2021",
        fraccion: [1, 3],
        ticketNumbers: [1, 4, 4, 5, 7],
        sorteoNumber: 2645
      },
      {
        ticketIndex: 245,
        date: "05/05/2021",
        fraccion: [1, 3],
        ticketNumbers: [1, 4, 4, 5, 7],
        sorteoNumber: 2645
      },
      {
        ticketIndex: 245,
        date: "05/05/2021",
        fraccion: [1, 3],
        ticketNumbers: [1, 4, 4, 5, 7],
        sorteoNumber: 2645
      }
    ];
  }
}
