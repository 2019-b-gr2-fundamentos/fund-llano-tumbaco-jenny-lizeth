export function some(
    arreglo: any,
    funcion:(
        valorActual: any,
        indice?:number,
        arreglo?:any) => boolean             //-- que devuelve
): boolean {
    const res = false;
    for(let i = 0;i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i],     // --> valor actual
            i,              // --> indice
            arreglo,        // --> arreglo
        );
        if(respuestaFuncion == true ){
            return respuestaFuncion;    // agregar valores con push
             
        }
    }
    return res;
}
