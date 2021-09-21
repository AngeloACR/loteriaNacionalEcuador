import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: 'app-compra-descripcion',
  templateUrl: './compra-descripcion.component.html',
  styleUrls: ['./compra-descripcion.component.scss']
})
export class CompraDescripcionComponent implements OnInit {
  @Input() compra: any;
  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
