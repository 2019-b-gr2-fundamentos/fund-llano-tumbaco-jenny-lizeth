import * as fs from 'fs';

export function leerArchivo (path:string):string{
    const resultado = fs.readFileSync(
        path,   //PATH    variable que contiene la direccion de lo que va a ejecutar 
        'utf-8'             //CODIFICACION
    );
    return resultado;

}
