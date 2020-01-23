import* as fs from 'fs';
//escribir el archivo
export function escribirArchivo(
    path:string,
    contenido: string){
    fs.writeFileSync(
        path,                          //PATH
        contenido,          //CONTENIDO
        'utf8'                                   //CODIFICACIÓN
    );
}