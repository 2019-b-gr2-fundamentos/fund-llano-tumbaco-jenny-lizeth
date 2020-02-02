"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forEach(arreglo, funcion) {
    var arregloForEach = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], // --> valor actual
        i, // --> indice
        arreglo);
        arregloForEach.push(respuestaFuncion); // agregar valores con push
    }
}
exports.forEach = forEach;
