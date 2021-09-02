import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-compra-cancelada",
  templateUrl: "./compra-cancelada.component.html",
  styleUrls: ["./compra-cancelada.component.scss"]
})
export class CompraCanceladaComponent implements OnInit {
  @Input() message: string;
  constructor() {}

  ngOnInit() {}
}
