export interface sorteo {
  fecha: string;
  premio: string;
  precio: string;
  fracciones: string;
  numero: string;
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
