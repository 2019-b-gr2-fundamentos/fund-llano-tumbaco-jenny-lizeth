"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function map(arregloOriginal, //Reviso el original
funcion) {
    var arregloACambiar = [];
    var arreglo = __spreadArrays(arregloOriginal); //Le hago un clon
    for (var i = 0; i < arreglo.length; i++) {
        var clon = __spreadArrays(arreglo); //Crear clon por iteracion
        var respuestaMap = funcion(clon[i], i, clon);
        arregloACambiar.push(respuestaMap);
    }
    return arregloACambiar;
}
exports.map = map;
