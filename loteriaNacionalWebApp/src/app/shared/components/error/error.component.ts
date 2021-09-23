import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"]
})
export class ErrorComponent implements OnInit {
  @Input() msg: string;
  @Output() closeError = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  close() {
    this.closeError.emit("Cerrando error");
  }
}
