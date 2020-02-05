"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reduce(arreglo, funcion, acumulador) {
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(acumulador, arreglo[i], // --> valor actual
        i, // --> indice
        arreglo);
        acumulador = respuestaFuncion;
        if (i == arreglo.length - 1)
            return acumulador; // agregar valores con push
    }
}
exports.reduce = reduce;
