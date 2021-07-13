import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-number-selection",
  templateUrl: "./number-selection.component.html",
  styleUrls: ["./number-selection.component.scss"],
})
export class NumberSelectionComponent implements OnInit {
  @Input("animales") arreglo_animales: string[] = [];

  /* estado: boolean = true; */

  animales: object = [
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-camaron.png",
      nombre: "Camarón",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
      nombre: "Cangrejo",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-ballena.png",
      nombre: "Ballena",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-condor.png",
      nombre: "Cóndor",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-conejo.png",
      nombre: "Conejo",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-delfin.png",
      nombre: "Delfín",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-foca.png",
      nombre: "Foca",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-galapago.png",
      nombre: "Galápago",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-iguana.png",
      nombre: "Iguana",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-llama.png",
      nombre: "Llama",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
      nombre: "Mono",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-oso.png",
      nombre: "Oso",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-papagayo.png",
      nombre: "Papagayo",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-perro.png",
      nombre: "Perro",
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-tucan.png",
      nombre: "Tucán",
    },
  ];

  agregar(animal: string ) {
    for (let i = 0; i < this.arreglo_animales.length; i++) {
      if (animal === this.arreglo_animales[i]) { return; }
    }
    this.arreglo_animales.push(animal);
    console.log(this.arreglo_animales);
  }

  constructor() {}

  ngOnInit() {}
}
