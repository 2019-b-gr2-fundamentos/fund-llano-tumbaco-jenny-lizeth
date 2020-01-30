export function calcular(funcion,numUno,numDos){         // va a recibir una función
    const valorInicial = 10;
    return funcion(numUno,numDos);
}
export function sumar(numUno,numDos,valorInicial){
    return numUno +numDos;
}
export function restar(numUno,numDos,valorInicial){
    return numUno - numDos;
}
calcular(sumar,1,2);        //3
calcular(restar, 5 ,3);     //2




export function filter(
    arreglo: any[],
    funcion:(
        valorActual: any,
        indice?:number,
        arreglo?:any[]) => boolean             //-- que devuelve
): any []{
    const arregloFiltrado =[];
    for(let i = 0;i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i],     // --> valor actual
            i,              // --> indice
            arreglo,        // --> arreglo
        );
        if(respuestaFuncion == true){
            arregloFiltrado.push(arreglo[i]);          // agregar valores con push
        }
                     
    }
    return arregloFiltrado;
}
