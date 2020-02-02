"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function every(arreglo, funcion //-- que devuelve
) {
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], // --> valor actual
        i, // --> indice
        arreglo);
        if (respuestaFuncion == true) {
            return respuestaFuncion; // agregar valores con push
        }
        if (respuestaFuncion == false) {
            return respuestaFuncion;
        }
    }
}
exports.every = every;
