import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saldo-insuficiente',
  templateUrl: './saldo-insuficiente.component.html',
  styleUrls: ['./saldo-insuficiente.component.scss']
})
export class SaldoInsuficienteComponent implements OnInit {
@Input() message: string;
@Output() volver = new EventEmitter();
@Output() recarga = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  cerrar(){
    this.volver.emit();
  }

  recargar(){
    this.recarga.emit();
  }

}
