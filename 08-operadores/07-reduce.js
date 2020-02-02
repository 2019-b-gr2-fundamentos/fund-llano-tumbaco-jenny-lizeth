"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reduce(arreglo, funcion //-- que devuelve
) {
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(acumulador[i], arreglo[i], // --> valor actual
        i, // --> indice
        arreglo);
        return respuestaFuncion; // agregar valores con push
    }
}
exports.reduce = reduce;
