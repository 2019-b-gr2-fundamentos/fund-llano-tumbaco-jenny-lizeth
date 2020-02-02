"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var _02_leer_archivo_1 = require("./02-leer-archivo");
var _03_escribir_archivo_1 = require("./03-escribir-archivo");
var prompts = require("prompts");
//transformar un objeto en texto
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var contenidoArchivo, arregloCargadoDeArchivo, cantidad, contador, minimoId, arregloAnimales, arregloPreguntas, cantidadUno, numeroVeces, RespuestaEstudiantes, nuevoRegistro, idABuscar, indiceEncontrado, nombreAEditar, buscar, animalEncontrado, arregloTexto, idABuscar2, indiceEncontrado2, Tm, i, arregloText;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contenidoArchivo = _02_leer_archivo_1.leerArchivo('./texto.txt');
                    console.log('contenidoArchivo', contenidoArchivo);
                    try {
                        arregloCargadoDeArchivo = JSON
                            .parse(contenidoArchivo);
                    }
                    catch (error) {
                        arregloCargadoDeArchivo = [];
                        console.error('Error parseado archivo');
                        //throw new Error("EL ARCHIVO ESTA MAL PARSEADO")
                    }
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'numero',
                            message: 'Cuantos animales quieres ingresar?',
                            validate: function (value) { return value < 0 ? "Debe ser un numero positivo" : true; }
                        })];
                case 1:
                    cantidad = _a.sent();
                    contador = 1;
                    minimoId = -1;
                    arregloCargadoDeArchivo
                        .forEach(//NO ENVIA NADA Y NO DEVUELVE NADA
                    //ITERAR
                    function (valorActual) {
                        var idActual = valorActual.id;
                        if (idActual > minimoId) {
                            minimoId = idActual;
                        }
                    });
                    minimoId = minimoId + 1;
                    contador = minimoId;
                    arregloAnimales = arregloCargadoDeArchivo;
                    arregloPreguntas = [
                        {
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingresa nombre animal'
                        },
                        {
                            type: 'text',
                            name: 'tipo',
                            message: 'Ingresa su clasificacion segun su estructura osea'
                        },
                        {
                            type: 'text',
                            name: 'habitat',
                            message: 'Donde vive?'
                        },
                        {
                            type: 'text',
                            name: 'alimentacion',
                            message: 'Ingresa su tipo de alimentacion'
                        },
                        {
                            type: 'text',
                            name: 'reproduccion',
                            message: 'Ingresa el tipo de repoducción'
                        }
                    ];
                    cantidadUno = cantidad.numero;
                    numeroVeces = 0;
                    _a.label = 2;
                case 2:
                    if (!(numeroVeces < cantidadUno)) return [3 /*break*/, 5];
                    return [4 /*yield*/, prompts(arregloPreguntas)];
                case 3:
                    RespuestaEstudiantes = _a.sent();
                    nuevoRegistro = {
                        id: contador,
                        nombre: RespuestaEstudiantes.nombre,
                        tipo: RespuestaEstudiantes.tipo,
                        habitat: RespuestaEstudiantes.habitat,
                        alimentacion: RespuestaEstudiantes.alimentacion,
                        reproduccion: RespuestaEstudiantes.reproduccion
                    };
                    contador = contador + 1;
                    arregloAnimales.push(nuevoRegistro);
                    _a.label = 4;
                case 4:
                    numeroVeces++;
                    return [3 /*break*/, 2];
                case 5:
                    console.log('Caracteríticas de los animales \n ', arregloAnimales);
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'id',
                            message: 'Ingresa el id del registro a Editar'
                        })];
                case 6:
                    idABuscar = _a.sent();
                    indiceEncontrado = arregloAnimales.findIndex(//return CONDICION -
                    function (valorActual, indice, arreglo) {
                        return valorActual.id == idABuscar.id; //Nos devuelve el INDICE
                    } //  Si encuentra nos devuelve el indice
                    // no encuentra
                    );
                    console.log('Indice encontrado:', indiceEncontrado);
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingrese el nuevo nombre'
                        })];
                case 7:
                    nombreAEditar = _a.sent();
                    arregloAnimales[indiceEncontrado].nombre = nombreAEditar.nombre;
                    console.log(arregloAnimales);
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nombre',
                            message: 'Buscar por ID o por nombre'
                        })];
                case 8:
                    buscar = _a.sent();
                    animalEncontrado = arregloAnimales
                        .find(function (valorActual) {
                        return valorActual.nombre == buscar.nombre;
                    });
                    console.log(animalEncontrado);
                    arregloTexto = JSON.stringify(arregloAnimales);
                    console.log(arregloTexto);
                    _03_escribir_archivo_1.escribirArchivo('./ejemplo.txt', arregloTexto);
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'id',
                            message: 'Ingresa el id del registro a Borrar'
                        })];
                case 9:
                    idABuscar2 = _a.sent();
                    indiceEncontrado2 = arregloAnimales.findIndex(//return CONDICION -
                    function (valorActual, indice, arreglo) {
                        return valorActual.id == idABuscar2.id; //Nos devuelve el INDICE
                    });
                    if (indiceEncontrado2 != -1) {
                        //console.log(indiceEncontrado);
                        arregloAnimales.splice(indiceEncontrado2, 1);
                        Tm = arregloAnimales.length;
                        contador = arregloAnimales.length + 1;
                        for (i = 0; i < Tm; i++) {
                            arregloAnimales[i].id = i + 1;
                        }
                        //arregloAnimales[0].id=1000;
                        console.log(arregloAnimales);
                    }
                    arregloText = JSON.stringify(arregloAnimales);
                    console.log(arregloText);
                    _03_escribir_archivo_1.escribirArchivo('./texto.txt', arregloText);
                    return [2 /*return*/];
            }
        });
    });
}
main().then()["catch"]();
