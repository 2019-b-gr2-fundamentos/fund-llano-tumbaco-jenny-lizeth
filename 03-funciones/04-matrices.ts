//escriba una programa que verifique si dos matrices son iguales 
//(la matriz es de dos dimensiones n*m) 
//"n" y "m" pueden ser iguales o distintas

/*const arregloMatriz = [
    [1,2],
    [3,4,5],
    [6,7,8],
    [9],
    []
];
*/

function compararMatriz(
    matrizUno: number[][], 
    matrizDos: number[][]    //definir arreglo de arreglos
    ): boolean { 
        const esValido = tieneMatricesIgualesDimensiones(
            matrizUno,
            matrizDos
        );

        if(esValido){
            //comparar los valores
            return tienenMismosValores(
                matrizUno,
                matrizDos
            );
        }else{
            return false;
        }
}

function tienenMismosValores(
    matrizUno: number [][],
    matrizDos: number [][]
):boolean{
    const primeraDimension = matrizUno.length;
    const segundaDimension = matrizUno[0].length;
    let banderaSonIguales = true;                 //bandera
    for(let i = 0; i<primeraDimension; i++){
        for(let j = 0; j<segundaDimension; j++){
            const valorActualM1 = matrizUno[i][j];
            const valorActualM2 =matrizDos[i][j];
            if (valorActualM1 != valorActualM2){
                banderaSonIguales = false;
            }
        }
    }
    return banderaSonIguales;
}

//FUNCION PARA COMPARAR MATRICES
function tieneMatricesIgualesDimensiones(
    matrizUno: number[][],
    matrizDos: number[][]
): boolean{
        const matrizUnoPrimeraDimension = obtenerPrimeraDimension(matrizUno);
        const matrizUnoSegundaDimension = obtenerSegundaDimension(matrizUno);
        const matrizDosPrimeraDimension = obtenerPrimeraDimension(matrizDos);
        const matrizDosSegundaDimension = obtenerSegundaDimension(matrizDos);
        console.log(matrizUnoPrimeraDimension);
        console.log(matrizUnoSegundaDimension);
        console.log(matrizDosPrimeraDimension);
        console.log(matrizDosSegundaDimension);
        
        const noHayFalsos = matrizUnoPrimeraDimension != false && 
        matrizUnoSegundaDimension != false &&
        matrizDosPrimeraDimension != false &&
        matrizDosSegundaDimension != false;

        if(noHayFalsos){
            const tieneIgualesDimensiones = matrizUnoPrimeraDimension == matrizDosPrimeraDimension &&
            matrizUnoSegundaDimension == matrizDosSegundaDimension;
               
            if(tieneIgualesDimensiones){
                      return true;

                  }else{
                      return false;
                  }
           }else{
               return false;
           }
}

//determinar las dimensiones
function obtenerPrimeraDimension(matrizUno:number[][]):number | boolean{   //acepta numeros o falsos
    //VALIDACIONES, si el for pasa ya no tiene errores
        const esValido = verificarTodosLosElementosDeUnArregloSonArreglos(matrizUno);
        
        if (esValido){
            const primeraDimensionArreglo = matrizUno.length;
            return primeraDimensionArreglo;
        }else{
            return false;
        }
    }


function obtenerSegundaDimension(matrizUno:number[][]): number|boolean{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglos(matrizUno);
    if (esValido){
    let longitudActualMaxima = 0;                     //auxiliar
    let longitudActualMinima = -1;                      //auxiliar
    for(let i = 0; i < matrizUno.length; i++){             //validado 
        const elementoActual = matrizUno [i];     // da un arreglo
        const longitudActual = elementoActual.length
        if(longitudActualMaxima < longitudActual){
            longitudActualMaxima = longitudActual;
        }                       //segunda dimension
        if(longitudActualMinima == -1){
            longitudActualMinima = longitudActual;
        }else{
            if(longitudActual < longitudActualMinima){
                longitudActualMinima = longitudActual;
            }
        }
    }
    if(longitudActualMaxima != longitudActualMinima){
    return false;
    }else{
        return matrizUno[0].length;
    }
    }else{
        return false;
  
    }
}

//reutilizar el código, //verificar que todos los elementos de un arreglo son arreglos
function verificarTodosLosElementosDeUnArregloSonArreglos(arreglo: any[]
    ):boolean{
        for(let i=0;i<arreglo.length;i++){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' &&   //como saber si es un arreglo
        elementoActual.indexOf;      //truty
        if(!esUnArreglo){      //si es diferente de un arreglo
            console.log("No es un arreglo");   //devolvemos -1 ---< esta mal la dimensión
            return false;   //para al for y devuelve -1
        }
    }
    return true;
}

function main(){
    //2*3
    const x = [
        [1,2,3],
        [3,3,3]
    ];
    const y= [
        [1,2,3],
        [3,3,3],
    ];
    const resultado = compararMatriz(x,y);
    console.log('Resultado: ', resultado);     
}

main();





/*n = 2, n=3
  1 2 3    2 3 4
  4 5 6    4 5 6
 * /

 
/*
 1) Escriba un programa que verifique que dos matrices son iguales
 2) Sumar todas las filas y columnas cada fila y cada columna debe darme un resultado    
 3) intercambiar las diagonales
*/


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