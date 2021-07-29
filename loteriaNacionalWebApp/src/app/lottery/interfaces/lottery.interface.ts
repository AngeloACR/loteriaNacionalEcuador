export interface sorteo {
  fecha: string;
  premio: string;
  precio: string;
  fracciones: number;
  numero: string;
}

export interface fracciones {
  fraccion: number;
  status: boolean;
}
export interface ticketsNacional {
  numeros: number[];
  seleccionados: fracciones[];
  status: boolean;
  identificador: number;
}
export interface ticketsLotto {
  numeros: number[];
  status: boolean;
  identificador: number;
}
export interface animales {
  ruta?: string;
  nombre: string;
  status: boolean;
}
export interface ticketsAnimales {
  ruta?: string;
  nombre: string;
  numero?: Array<number>;
  status: boolean;
  identificador: number;
}
