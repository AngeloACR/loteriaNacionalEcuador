import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-number-selection",
  templateUrl: "./number-selection.component.html",
  styleUrls: ["./number-selection.component.scss"],
})
export class NumberSelectionComponent implements OnInit {
  @Input("animales") arreglo_animales: string[] = [];

  estado: boolean = true;

  animales: object = [
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-camaron.png",
      nombre: "camaron",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
      nombre: "cangrejo",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-ballena.png",
      nombre: "ballena",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-condor.png",
      nombre: "condor",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-conejo.png",
      nombre: "conejo",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-delfin.png",
      nombre: "delfin",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-foca.png",
      nombre: "foca",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-galapago.png",
      nombre: "galapago",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-iguana.png",
      nombre: "iguana",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-llama.png",
      nombre: "llama",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
      nombre: "mono",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-oso.png",
      nombre: "oso",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-papagayo.png",
      nombre: "papagayo",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-perro.png",
      nombre: "perro",
    },
  ];

  agregar(animal: string ) {
    for (let i = 0; i < this.arreglo_animales.length; i++) {
      if (animal === this.arreglo_animales[i]) { return; }
    }
    this.arreglo_animales.push(animal);
    console.log(this.arreglo_animales, this.estado);
  }

  constructor() {}

  ngOnInit() {}
}
