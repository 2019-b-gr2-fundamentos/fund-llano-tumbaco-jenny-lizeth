import{Duenio}from './duenio interface';
//./->relativo a donde esta el archivo
export interface AnimalPerrito{  //interface -> (Struct)
    nombreCientifico:string;
    nombre:string;
    clan:string;
    edad?: number;   //opcionales
    //hijos: null,
    perritas?:string[];   //opcionales
    vacunado?: boolean;  //opcionales
    duenio?: Duenio ;

}