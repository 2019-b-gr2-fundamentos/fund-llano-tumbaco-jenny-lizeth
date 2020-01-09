"use strict";
//NODE MODULES
//const sumaLibreria = require('libreria-jll/lib/suma');    --- > require para js
exports.__esModule = true;
//importar todo el contenido con el nombre 'sumaLibreria'
//del paquete 'libreria-jll/lib/suma'
var sumaLibreria = require("libreria-jll/lib/suma"); // import para ts
var respuesta = sumaLibreria(1, 2);
console.log('La respuesta es:', respuesta);
