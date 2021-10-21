
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ticketsLotto, sorteo } from "../../interfaces/lottery.interface";
import { LotteryService } from "../../services/lottery.service";

@Component({
  selector: "app-lotto-ticket",
  templateUrl: "./lotto-ticket.component.html",
  styleUrls: ["./lotto-ticket.component.scss"]
})
export class LottoTicketComponent implements OnInit {
  @Input() ticket: ticketsLotto;
  @Input() sorteo: sorteo;
  @Output() delete = new EventEmitter();
  ticketIndex: string;
  date: string;
  ticketNumbers: string[];
  sorteoNumber: string;

  objeto: any;
  numero: any;
  antojito: any;
  constructor(private lotteryService: LotteryService) {}


  async ngOnInit() {
    this.ticketIndex = this.ticket.combinacion1;
    this.ticketNumbers = this.ticket.display;
    this.sorteoNumber = this.sorteo.sorteo;
    this.date = this.sorteo.fecha;

    this.antojito = this.lotteryService.obtenerCaracteristicasDeAntojito(
      this.ticket.combinacion5
    );
  }
  deleteTicket(){
    this.delete.emit()
  }
}
