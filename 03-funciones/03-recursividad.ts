//FUNCION PARA REPETIR UN NUMERO 10 VECES
//RECURSIVIDAD PARA REPETIR EL CODIGO

function imprimirMensajeNVeces(
    mensaje:string,
    numeroVeces: number
    ):void{              //void-no va a devolver nada
        if(numeroVeces == 0){                    //si es que no va a ser infinito
            console.log('Se termino');
        }else{
            console.log(mensaje);
            const nuevoNumeroVeces = numeroVeces - 1;
            imprimirMensajeNVeces(mensaje,nuevoNumeroVeces);
        }

}

function main(){                          //main llamar 
    imprimirMensajeNVeces('hola',3);   
}

main();




function imprimirElementos(
    arreglosNumeros: number[],
    correIndice: number
): void{
    if(correIndice == 5){
        console.log('se termino');
      
    }else{
        console.log(arreglosNumeros);
        const nuevoIndice = correIndice + 1;
        imprimirElementos(nuevoIndice);
    }
}
 
function main(){                          //main llamar 
    imprimirElementos(arregloNumeros,3);   
}

main();










//tipar arreglos
const arreglosNumeros: number[]=[1.2.3.4];
const arregloString: string[]=['a','b','c'];
const arreglosBoolean: boolean[]=[true, false, false];