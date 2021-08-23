export interface sorteo {
  fecha: string;
  cantidadDeFracciones: number;
  valorPremioPrincipal: any;
  precio: string;
  sorteo: string;
  nombre: string;
}

export interface ticketsNacional {
  combinacion: string;
  display: string[];
  fraccionesDisponibles: string[];
  seleccionados: string[];
  status: boolean;
  identificador: string;
}
export interface ticketsLotto {
  combinacion1: string;
  combinacion2: string;
  combinacion3: string;
  combinacion4: string;
  display: string[];
  status: boolean;
  identificador: string;
}
export interface animales {
  ruta?: string;
  identificador?: string;
  nombre: string;
  status: boolean;
}
export interface ticketsAnimales {
  mascota: string;
  combinacion1: string;
  combinacion2: string;
  display?: Array<string>;
  status: boolean;
  identificador: string;
}
