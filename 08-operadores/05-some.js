"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function some(arreglo, funcion //-- que devuelve
) {
    var res = false;
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], // --> valor actual
        i, // --> indice
        arreglo);
        if (respuestaFuncion == true) {
            return respuestaFuncion; // agregar valores con push
        }
    }
    return res;
}
exports.some = some;
