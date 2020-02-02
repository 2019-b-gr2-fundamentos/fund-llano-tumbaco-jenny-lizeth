"use strict";
exports.__esModule = true;
var fs = require("fs");
//escribir el archivo
function escribirArchivo(path, contenido) {
    fs.writeFileSync(path, //PATH
    contenido, //CONTENIDO
    'utf8' //CODIFICACIÓN
    );
}
exports.escribirArchivo = escribirArchivo;
