"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(arreglo, funcion) {
    var arregloACambiar = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaMap = funcion(arreglo[i], i, arreglo);
        arregloACambiar.push(respuestaMap);
    }
    return arregloACambiar;
}
exports.map = map;
