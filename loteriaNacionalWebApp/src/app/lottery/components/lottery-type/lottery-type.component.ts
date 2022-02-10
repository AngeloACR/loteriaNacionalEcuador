import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-lottery-type",
  templateUrl: "./lottery-type.component.html",
  styleUrls: ["./lottery-type.component.scss"],
})
export class LotteryTypeComponent implements OnInit {
  @Input() image: String;
  @Input() link: String;
  @Input() name: String;
  @Input() loteria: String;
  @Input() token: String;
  @Output() authError = new EventEmitter();
  tipoLoteria: any;
  constructor() {}

  ngOnInit() {
    switch (this.name) {
      case "loteria":
        this.tipoLoteria = {
          loteria: true,
        };
        break;
      case "loteria":
        this.tipoLoteria = {
          lotto: true,
        };
        break;

      default:
      case "loteria":
        this.tipoLoteria = {
          pozo: true,
        };
        break;

        break;
    }
  }
  checkToken(e) {
    if (!this.token) {
      e.stopPropagation();
      e.preventDefault();
      this.authError.emit();
      return;
    }
  }
}
