import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-loteria-nacional-ticket",
  templateUrl: "./loteria-nacional-ticket.component.html",
  styleUrls: ["./loteria-nacional-ticket.component.scss"]
})
export class LoteriaNacionalTicketComponent implements OnInit {
  @Input() ticketIndex: Number;
  @Input() date: String;
  @Input() fraccion: Number[];
  @Input() ticketNumbers: Number[];
  @Input() sorteoNumber: Number[];

  objeto:any;
  numero:any;
  

  constructor() {}

  async ngOnInit() {
    
    console.log(JSON.parse(localStorage.getItem('loteriaTickets')));
    /* this.ticketNumbers = JSON.parse(localStorage.getItem('loterianumero' + ticket)); */
    
  }
}
