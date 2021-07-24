import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { faTintSlash } from "@fortawesome/free-solid-svg-icons";
import { LotteryService } from "../../services/lottery.service";

import { animales } from '../../interfaces/lottery.interface';


@Component({
  selector: "app-number-selection",
  templateUrl: "./number-selection.component.html",
  styleUrls: ["./number-selection.component.scss"],
})
export class NumberSelectionComponent implements OnInit {
  @Input("animales") arreglo_animales: animales[]; 

  @Output() propagar = new EventEmitter<any>();

  constructor(private lotteryService: LotteryService) {}

  animales: animales[] = [
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-camaron.png",
      nombre: "Camarón",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
      nombre: "Cangrejo",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-ballena.png",
      nombre: "Ballena",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-condor.png",
      nombre: "Cóndor",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-conejo.png",
      nombre: "Conejo",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-delfin.png",
      nombre: "Delfín",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-foca.png",
      nombre: "Foca",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-galapago.png",
      nombre: "Galápago",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-iguana.png",
      nombre: "Iguana",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-llama.png",
      nombre: "Llama",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
      nombre: "Mono",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-oso.png",
      nombre: "Oso",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-papagayo.png",
      nombre: "Papagayo",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-perro.png",
      nombre: "Perro",
      status: false,
    },
    {
      ruta: "../../../../assets/mascotas/mascotas pozo millonario-tucan.png",
      nombre: "Tucán",
      status: false,
    },
  ];

  estado(animal: string) {
    
    this.arreglo_animales.forEach( (element) => {
      if (element.nombre === animal) {
        this.propagar.emit( [element, animal] );
        return element.status = !element.status
      }  
    });

    localStorage.setItem("animalesSeleccionados", JSON.stringify(this.arreglo_animales));
  }

  ngOnInit() {
    this.arreglo_animales = JSON.parse(localStorage.getItem("animalesSeleccionados"));
    
    this.animales.forEach( ( element ) => {
      this.arreglo_animales.forEach( ( animal ) => {
        if (element.nombre === animal.nombre) {
          element.status = animal.status;
        }
      });
    });

    /* console.log(this.animales); */
    /* for (let i = 0; i < this.animales.length; i++) {
        console.log(this.animales[i].nombre, '===', this.arreglo_animales[i].animal )

      if (this.animales[i].nombre === this.arreglo_animales[i].animal) {
        console.log(this.animales[i].nombre, '===', this.arreglo_animales[i].animal )
      }
    } */

    /* console.log(this.animales); */
  }
}
