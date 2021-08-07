export interface sorteo {
  fecha: string;
  cantidadDeFracciones: number;
  valorPremioPrincipal: any;
  precio: string;
  sorteo: string;
  nombre: string;
}

export interface fracciones {
  fraccion: number;
  status: boolean;
}
export interface ticketsNacional {
  combinacion: string;
  display: string[];
  fraccionesDisponibles: fracciones[];
  seleccionados: fracciones[];
  status: boolean;
  identificador: number;
}
export interface ticketsLotto {
  combinacion1: string;
  combinacion2: string;
  combinacion3: string;
  display: string[];
  status: boolean;
  identificador: number;
}
export interface animales {
  ruta?: string;
  nombre: string;
  status: boolean;
}
export interface ticketsAnimales {
  mascota: string;
  combinacion1: string;
  combinacion2: string;
  display?: Array<string>;
  status: boolean;
  identificador: number;
}
