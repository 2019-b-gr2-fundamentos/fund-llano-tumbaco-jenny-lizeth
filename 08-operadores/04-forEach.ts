export function forEach(
    arreglo: any[],
    funcion:(
        valorActual: any,
        indice?: any,
        arreglo?: any)=>any
):any{
    const arregloForEach =[];
    for(let i = 0;i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i],     // --> valor actual
            i,              // --> indice
            arreglo,        // --> arreglo
        );
            arregloForEach.push(respuestaFuncion);          // agregar valores con push
        }
        
    }
    