//FUNCION PARA REPETIR UN NUMERO 10 VECES
//RECURSIVIDAD PARA REPETIR EL CODIGO
function imprimirMensajeNVeces(mensaje, numeroVeces) {
    if (numeroVeces == 0) { //si es que no va a ser infinito
        console.log('Se termino');
    }
    else {
        console.log(mensaje);
        var nuevoNumeroVeces = numeroVeces - 1;
        imprimirMensajeNVeces(mensaje, nuevoNumeroVeces);
    }
}
function main() {
    imprimirMensajeNVeces('hola', 3);
}
main();
var arreglosNumeros = [1.2, .3, .4, 5];
function imprimirElementos(arreglosNumeros, correIndice) {
    if (correIndice == 5) {
        console.log('se termino');
    }
    else {
        console.log(arreglosNumeros);
        var nuevoIndice = correIndice + 1;
        imprimirElementos(nuevoIndice);
    }
}
function main() {
    imprimirElementos(arregloNumeros);
}
main();
//tipar arreglos
var arreglosNumeros = [1.2, .3, .4];
var arregloString = ['a', 'b', 'c'];
var arreglosBoolean = [true, false, false];
