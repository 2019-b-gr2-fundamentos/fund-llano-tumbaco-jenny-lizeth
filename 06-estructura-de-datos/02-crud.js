"use strict";
exports.__esModule = true;
//02-crud.ts --> create read update delete
//const prompts = require('prompts');
var prompts = require("prompts"); // para importar el paquete prompts
function main() {
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito() {
    //Paradigma de programacion 
    //SINCRONO vs ASINCRONO
    console.log('inicio');
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    });
    console.log(promesaEdad);
    promesaEdad //funcion promesa
        .then(// ok
    function (datos) {
        console.log('datos', datos); // aqui puedo seguir
        ///
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        });
        promesaNombre //funcion promesa
            .then(// ok
        function (datos) {
            console.log('Nombre', datos); // aqui puedo seguir
        })["catch"](// =(
        function (error) {
            console.log('Error', error);
        });
        ///
    })["catch"](// =(
    function (error) {
        console.log('Error', error);
    });
    console.log('fin');
}
main();
