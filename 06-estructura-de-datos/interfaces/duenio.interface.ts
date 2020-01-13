import {AnimalPerrito}from './animal-perrito.interface';

export interface Duenio{//interface->struct}
    nombres: string;
    apellidos:string;
    cedula?: string;
    fechaNacimiento : number;
    mascotasPerros?:AnimalPerrito[];
}

  