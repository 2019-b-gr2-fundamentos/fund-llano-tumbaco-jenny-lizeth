"use strict";
exports.__esModule = true;
var fs = require("fs");
function leerArchivo(path) {
    var resultado = fs.readFileSync(path, //PATH    variable que contiene la direccion de lo que va a ejecutar 
    'utf-8' //CODIFICACION
    );
    return resultado;
}
exports.leerArchivo = leerArchivo;
