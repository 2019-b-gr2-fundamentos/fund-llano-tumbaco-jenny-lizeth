import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";

function main(){
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBE :( \n';
    escribirArchivo('./ejemplo.txt','');  //pone el nuevo contenido
    console.log(textoLeido + nuevoContenido);
}
main();

//escribirArchivo('');  // para que se limpie el archivo