"use strict";
exports.__esModule = true;
var _02_leer_archivo_1 = require("./02-leer-archivo");
var _03_escribir_archivo_1 = require("./03-escribir-archivo");
function main() {
    var textoLeido = _02_leer_archivo_1.leerArchivo();
    var nuevoContenido = 'TENGO HAMBE :( \n';
    _03_escribir_archivo_1.escribirArchivo('./ejemplo.txt', ''); //pone el nuevo contenido
    console.log(textoLeido + nuevoContenido);
}
main();
//escribirArchivo('');  // para que se limpie el archivo
