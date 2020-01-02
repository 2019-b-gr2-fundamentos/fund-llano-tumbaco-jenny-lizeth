//escriba una programa que verifique si dos matrices son iguales 
//(la matriz es de dos dimensiones n*m) 
//"n" y "m" pueden ser iguales o distintas
var arregloMatriz = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9],
    []
];
function compararMatriz(matrizUno, matrizDos //definir arreglo de arreglos
) {
    var esValido = tieneMatricesIgualesDimensiones(matrizUno, matrizDos);
    if (esValido) {
        //comparar los valores
        return tienenMismosValores(matrizUno, matrizDos);
    }
    else {
        return false;
    }
}
function tienenMismosValores(matrizUno, matrizDos) {
    var primeraDimension = matrizUno.length;
    var segundaDimension = matrizUno[0].length;
    var banderaSonIguales = true; //bandera
    for (var i = 0; i < primeraDimension; i++) {
        for (var j = 0; j < segundaDimension; j++) {
            var valorActualM1 = matrizUno[i][j];
            var valorActualM2 = matrizDos[i][j];
            if (valorActualM1 != valorActualM2) {
                banderaSonIguales = false;
            }
        }
    }
    return banderaSonIguales;
}
//FUNCION PARA COMPARAR MATRICES
function tieneMatricesIgualesDimensiones(matrizUno, matrizDos) {
    var matrizUnoPrimeraDimension = obtenerPrimeraDimension(matrizUno);
    var matrizUnoSegundaDimension = obtenerSegundaDimension(matrizUno);
    var matrizDosPrimeraDimension = obtenerPrimeraDimension(matrizDos);
    var matrizDosSegundaDimension = obtenerSegundaDimension(matrizDos);
    console.log(matrizUnoPrimeraDimension);
    console.log(matrizUnoSegundaDimension);
    console.log(matrizDosPrimeraDimension);
    console.log(matrizDosSegundaDimension);
    var noHayFalsos = matrizUnoPrimeraDimension != false &&
        matrizUnoSegundaDimension != false &&
        matrizDosPrimeraDimension != false &&
        matrizDosSegundaDimension != false;
    if (noHayFalsos) {
        var tieneIgualesDimensiones = matrizUnoPrimeraDimension == matrizDosPrimeraDimension &&
            matrizUnoSegundaDimension == matrizDosSegundaDimension;
        if (tieneIgualesDimensiones) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
//determinar las dimensiones
function obtenerPrimeraDimension(matrizUno) {
    //VALIDACIONES, si el for pasa ya no tiene errores
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglos(matrizUno);
    if (esValido) {
        var primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }
    else {
        return false;
    }
}
function obtenerSegundaDimension(matrizUno) {
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglos(matrizUno);
    if (esValido) {
        var longitudActualMaxima = 0; //auxiliar
        var longitudActualMinima = -1; //auxiliar
        for (var i = 0; i < matrizUno.length; i++) { //validado 
            var elementoActual = matrizUno[i]; // da un arreglo
            var longitudActual = elementoActual.length;
            if (longitudActualMaxima < longitudActual) {
                longitudActualMaxima = longitudActual;
            } //segunda dimension
            if (longitudActualMinima == -1) {
                longitudActualMinima = longitudActual;
            }
            else {
                if (longitudActual < longitudActualMinima) {
                    longitudActualMinima = longitudActual;
                }
            }
        }
        if (longitudActualMaxima != longitudActualMinima) {
            return false;
        }
        else {
            return matrizUno[0].length;
        }
    }
    else {
        return false;
    }
}
//reutilizar el código, //verificar que todos los elementos de un arreglo son arreglos
function verificarTodosLosElementosDeUnArregloSonArreglos(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        var elementoActual = arreglo[i];
        var esUnArreglo = typeof elementoActual == 'object' && //como saber si es un arreglo
            elementoActual.indexOf; //truty
        if (!esUnArreglo) { //si es diferente de un arreglo
            console.log("No es un arreglo"); //devolvemos -1 ---< esta mal la dimensión
            return false; //para al for y devuelve -1
        }
    }
    return true;
}
function main() {
    //2*3
    var x = [
        [1, 2, 3],
        [3, 3, 3]
    ];
    var y = [
        [1, 2, 3],
        [3, 3, 3],
    ];
    var resultado = compararMatriz(x, y);
    console.log('Resultado: ', resultado);
}
main();
/*n = 2, n=3
  1 2 3    2 3 4
  4 5 6    4 5 6
 * /

 

//Sumar todas las filas y todas las columnas


/*function verificarTodosLosElementosDeUnArregloSonArreglos(arreglo:any[]
    ):boolean{
        for(let i=0;i<matrizUno.length;i++){
        const elementoActual = matrizUno[i];
        const esUnArreglo = typeof elementoActual == 'object' &&   //como saber si es un arreglo
        elementoActual.indexOf;      //truty
        if(esUnArreglo){
            console.log("No es un arreglo");   //devolvemos -1 ---< esta mal la dimensión
            return false;   //para al for y devuelve -1
    }
*/ 
