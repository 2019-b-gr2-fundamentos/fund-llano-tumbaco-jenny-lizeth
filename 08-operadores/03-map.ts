export function map(
    arregloOriginal: any[],                 //Reviso el original
    funcion:(
        valorActual: any,
        indice?: number,
        arreglo?: any[]) => any
    
    ):any[]{
        const arregloACambiar = [];
        const arreglo =[...arregloOriginal];     //Le hago un clon

        for(let i = 0; i < arreglo.length; i++){
            const clon = [...arreglo];           //Crear clon por iteracion
            const respuestaMap = funcion (
                clon[i],
                i,
                clon,              //clon del clon pata que juegue el programador
            );
                
                arregloACambiar.push(respuestaMap);
        }
        return arregloACambiar;
    }
