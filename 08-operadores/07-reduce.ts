export function reduce(
    arreglo: any,
    funcion:(
        acumulador:number,
        valorActual: any,
        indice?:number,
        
        arreglo?:any[]) => number             //-- que devuelve
): any {
    
    for(let i = 0;i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            acumulador[i],
            arreglo[i],     // --> valor actual
            i,              // --> indice
            
            arreglo,        // --> arreglo
        );
        
            return respuestaFuncion;    // agregar valores con push
             
        }

    }

}