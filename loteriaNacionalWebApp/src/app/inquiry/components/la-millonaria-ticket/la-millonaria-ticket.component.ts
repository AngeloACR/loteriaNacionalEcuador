import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-millonaria-ticket',
  templateUrl: './la-millonaria-ticket.component.html',
  styleUrls: ['./la-millonaria-ticket.component.scss']
})
export class LaMillonariaTicketComponent implements OnInit {
  @Input() ticket: any;

  description: String;
  ticketNumbers: Number[];
  serieNumbers: Number[];
  sorteo: Number;
  constructor() {}

  ngOnInit() {
    this.ticketNumbers = this.ticket.ticketNumbers;
    this.serieNumbers = this.ticket.serieNumbers;
    this.sorteo = this.ticket.numeroSorteo;
  }
}
