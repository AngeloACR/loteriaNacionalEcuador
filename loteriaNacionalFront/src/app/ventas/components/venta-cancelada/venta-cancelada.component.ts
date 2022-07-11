import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-venta-cancelada',
  templateUrl: './venta-cancelada.component.html',
  styleUrls: ['./venta-cancelada.component.scss'],
})
export class VentaCanceladaComponent implements OnInit {
  @Input() message?: string;
  constructor() {}

  ngOnInit() {}

  @Output() closeBox = new EventEmitter<string>();
  close() {
    this.closeBox.emit('Cerrando error');
  }
}
