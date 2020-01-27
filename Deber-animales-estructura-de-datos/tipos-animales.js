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
Object.defineProperty(exports, "__esModule", { value: true });
var prompts = require("prompts");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var contador, arregloPreguntas, cantidad, cantidadUno, arregloAnimales, numeroVeces, RespuestaEstudiantes, nuevoRegistro, m, _loop_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Inicio Caracteristicas de los animales');
                    contador = 1;
                    arregloPreguntas = [
                        {
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingresa nombre animal',
                        },
                        {
                            type: 'text',
                            name: 'tipo',
                            message: 'Ingresa su clasificacion segun su estructura osea',
                        },
                        {
                            type: 'text',
                            name: 'habitat',
                            message: 'Donde vive?',
                        },
                        {
                            type: 'text',
                            name: 'alimentacion',
                            message: 'Ingresa su tipo de alimentacion',
                        },
                        {
                            type: 'text',
                            name: 'reproduccion',
                            message: 'Ingresa el tipo de repoducción',
                        }
                    ];
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'numero',
                            message: 'Cuantos animales quieres ingresar?',
                            validate: function (value) { return value < 0 ? "Debe ser un numero positivo" : true; }
                        })];
                case 1:
                    cantidad = _a.sent();
                    cantidadUno = cantidad.numero;
                    arregloAnimales = [];
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
                    m = 0;
                    _loop_1 = function () {
                        var elijeOpcion, opcion, RespuestaEstudiantes, nuevoRegistro, idABuscar_1, indiceEncontrado, nombreAEditar, buscar_1, animalEncontrado, m_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log('escriba el numero de la opcion que desea');
                                    console.log('1. crear');
                                    console.log('2. actualizar');
                                    console.log('3. borrar');
                                    console.log('4. buscar');
                                    console.log('5. salir');
                                    return [4 /*yield*/, prompts({
                                            type: 'number',
                                            name: 'numero',
                                            message: 'Cual eliges?',
                                            validate: function (value) { return value < 0 ? "Debe ser un numero positivo" : true; }
                                        })];
                                case 1:
                                    elijeOpcion = _a.sent();
                                    opcion = elijeOpcion.numero;
                                    if (!(opcion == 1)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, prompts(arregloPreguntas)];
                                case 2:
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
                                    console.log('Caracteríticas de los animales \n ', arregloAnimales);
                                    return [3 /*break*/, 10];
                                case 3:
                                    if (!(opcion == 2)) return [3 /*break*/, 6];
                                    return [4 /*yield*/, prompts({
                                            type: 'number',
                                            name: 'id',
                                            message: 'Ingresa el id del registro a Editar'
                                        })];
                                case 4:
                                    idABuscar_1 = _a.sent();
                                    indiceEncontrado = arregloAnimales.findIndex(//return CONDICION -
                                    function (valorActual, indice, arreglo) {
                                        return valorActual.id == idABuscar_1.id; //Nos devuelve el INDICE
                                    });
                                    console.log('Indice encontrado:', indiceEncontrado);
                                    return [4 /*yield*/, prompts({
                                            type: 'text',
                                            name: 'nombre',
                                            message: 'Ingrese el nuevo nombre'
                                        })];
                                case 5:
                                    nombreAEditar = _a.sent();
                                    arregloAnimales[indiceEncontrado].nombre = nombreAEditar.nombre;
                                    console.log(arregloAnimales);
                                    return [3 /*break*/, 10];
                                case 6:
                                    if (!(opcion == 3)) return [3 /*break*/, 7];
                                    return [3 /*break*/, 10];
                                case 7:
                                    if (!(opcion == 4)) return [3 /*break*/, 9];
                                    return [4 /*yield*/, prompts({
                                            type: 'text',
                                            name: 'nombre',
                                            message: 'Buscar por ID o por nombre'
                                        })];
                                case 8:
                                    buscar_1 = _a.sent();
                                    animalEncontrado = arregloAnimales;
                                    find(function (valorActual) {
                                        return valorActual.nombre == buscar_1.nombre;
                                    });
                                    console.log(animalEncontrado);
                                    return [3 /*break*/, 10];
                                case 9:
                                    if (opcion == 5) {
                                        m_1 = 4;
                                        console.log('FIN');
                                    }
                                    else {
                                        console.log('Error');
                                    }
                                    _a.label = 10;
                                case 10: return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 6;
                case 6:
                    if (!(m < 2)) return [3 /*break*/, 8];
                    return [5 /*yield**/, _loop_1()];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 8:
                    console.log('fin');
                    return [2 /*return*/];
            }
        });
    });
}
main().then().catch();
