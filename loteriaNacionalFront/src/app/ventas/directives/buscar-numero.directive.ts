import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBuscarNumero]',
})
export class BuscarNumeroDirective {
  @Input() combinacionDeLaSuerte: string[] = [];
  @Input() tipoLoteria: number = 1;
  constructor() {}

  @HostListener('click', ['$event']) onClick(event: any) {
    try {
    } catch (e: any) {}
  }
}
