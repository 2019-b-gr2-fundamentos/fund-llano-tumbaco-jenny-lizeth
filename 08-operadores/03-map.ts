export function map(
    arreglo: any[],
    funcion:(
        valorActual: any,
        indice?: number,
        arreglo?: any[]) => any
    
    ):any[]{
        const arregloACambiar = [];
        for(let i = 0; i < arreglo.length; i++){
            const respuestaMap = funcion (
                arreglo[i],
                i,
                arreglo,
            );
                
                arregloACambiar.push(respuestaMap);
        }
        return arregloACambiar;
    }
