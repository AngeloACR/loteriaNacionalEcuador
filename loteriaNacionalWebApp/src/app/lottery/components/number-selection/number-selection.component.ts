import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-selection',
  templateUrl: './number-selection.component.html',
  styleUrls: ['./number-selection.component.scss']
})
export class NumberSelectionComponent implements OnInit {


  animales:object = [
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-camaron.png",
      nombre: "camaron"    
    },
    {
      ruta:"../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
      nombre: "cangrejo"    
    },
    {
      ruta:"../../../../assets/mascotas/mascotas pozo millonario-ballena.png",
      nombre: "ballena"    
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-condor.png",
      nombre: "condor"    
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-conejo.png",
      nombre: "conejo"    
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-delfin.png",
      nombre: "delfin"    
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-foca.png",
      nombre: "foca"    
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-galapago.png",
      nombre: "galapago"    
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-iguana.png",
      nombre: "iguana"    
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-llama.png",
      nombre: "llama"    
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
      nombre: "mono"    
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-oso.png",
      nombre: "oso"    
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-papagayo.png",
      nombre: "papagayo"    
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-perro.png",
      nombre: "perro"    
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
