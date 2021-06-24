import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-ticket-scroller",
  templateUrl: "./ticket-scroller.component.html",
  styleUrls: ["./ticket-scroller.component.scss"]
})
export class TicketScrollerComponent implements OnInit {
  @Input() logo: String;
  @Input() tickets: any;
  constructor() {}

  ngOnInit() {
    
  }
}
