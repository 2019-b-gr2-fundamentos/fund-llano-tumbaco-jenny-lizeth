export function reduce(
    arreglo: any[],
    funcion:(
        acumulador:number,
        valorActual: any,
        indice?:number,
        arreglo?:any[]) => number,
    acumulador:number,             //-- que devuelve
): any {
    
    for(let i = 0;i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            acumulador,
            arreglo[i],     // --> valor actual
            i,              // --> indice
            arreglo,        // --> arreglo
        );
        
        acumulador = respuestaFuncion;
        if (i==arreglo.length -1)
            return acumulador;    // agregar valores con push
             
        }

    }

}