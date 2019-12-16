//escriba una programa que verifique si dos matrices son iguales 
//(la matriz es de dos dimensiones n*m) 
//"n" y "m" pueden ser iguales o distintas

const arregloMatriz = [
    [1,2],
    [3,4,5],
    [6,7,8],
    [9],
]
const matrizDos = [
    [1,2],
    [3,4]
]
function compararMatrizes(
    matrizUno: number[][], 
    matrizDos: number[][]    //definir arreglo de arreglos
    ): boolean {     
        return true;
}
//determinar las dimensiones
function obtenerPrimeraDimension(matrizUno:number[][]):number | false{   //acepta numeros o falsos
    //VALIDACIONES, si el for pasa ya no tiene errores
        const esValido = verificarTodosLosElementosDeUnArregloSonArreglos(matrizUno);
        if (esValido){
            const primeraDimensionArreglo = matrizUno.length;
            return primeraDimensionArreglo;
        }else{
            return false;
        }
    }


function obtenerSegundaDimension(matrizUno:number[][]){
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglos(matrizUno);
    let longitudActualMaxima = 0;                     //auxiliar
    let longitudActualMinima = -1;                      //auxiliar
    for(let i = 0; i <matrizUno.length; i++){             //validado 
        const elementoActual = matrizUno [i];     // da un arreglo
        const longitudActual = elementoActual.length
        if(longitudActualMaxima < longitudActual){
            longitudActualMaxima = longitudActual;
        }                       //segunda dimension
        if(longitudActualMinima == -1){
            longitudActualMinima = longitudActual;
        }else{
            if(longitudActual<longitudActualMinima){
                longitudActualMinima = longitudActual;
            }
        }
    }
    return false;
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
    //compararmatriz()        
}


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