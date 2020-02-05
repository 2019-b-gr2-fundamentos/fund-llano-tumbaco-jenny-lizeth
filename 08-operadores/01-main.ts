import { filter } from "./02-filter";
import { map } from "./03-map";
import { forEach } from './04-forEach';
import { some } from "./05-some";
import { every } from './06-every';
import { reduce } from "./07-reduce";


function main(){

    const arregloEstudiantes = [
        {id:1, nombre:"Adrian", nota:7},
        {id:2, nombre:"Vicente",nota:9},
        {id:3, nombre: "Wendy", nota:4},
        {id:4, nombre:"Carolina", nota:10},
        {id:5, nombre:"Carlos", nota: 6.5},
    ];
    
    //OPERADOR - FOREACH
    //Enviamos -> nada
    //Recibimos -> nada
    const respuestaForEach = arregloEstudiantes
        .forEach(
            function(valorActual,indice,arreglo){
                console.log(valorActual.nota);          
            }
        );
        console.log(respuestaForEach);  // undefined


        //MAP -> TRANSFORMAR EL ARREGLO (mUTAR EL ARREGLO)
        //RECIBIR----> Nuevo arreglo con valores modificado
        const respuestaMap = arregloEstudiantes
            .map(
                function(valorActual, i, arreglo){
                    const nuevoObjeto={
                        id:valorActual.id,
                        nombre: valorActual.nombre,
                        //nota:valorActual.nota,
                        nota20: valorActual.nota*2                  // ----> a todos les multiplica *2
                    };
                    return  nuevoObjeto

                }
            );
            console.log('respuestaMAP', respuestaMap);
            console.log('arregloEstudiantes',arregloEstudiantes);

            //Filter -> filtra el arreglo
            //ENVIAMOS -> CONDICION
            //RECIBIR -> Nuevo arreglo con valores filtrados
            const respuestaFilter = arregloEstudiantes
                .filter(
                    function(valorActual, i, arreglo){
                        const condicion7 = valorActual.nota >= 7;
                        const condicion5 = valorActual.nota < 5;
                        //condicion es un TRUTY O TRUE
                        return condicion7 || condicion5;
                    }
                );
                console.log('respuestaFilter',respuestaFilter);
                console.log('arregloEstudiantes',arregloEstudiantes);

                //AND -> every (todos cumplan) / or -> some (uno cumpla)

                // Some ->  devuelve verdadero o falso si cumple la condicion
                //  si alguno cumple devuelve true
                //  si ninguno cumple devuelve false
                //ENVIAMOS ->Condicion
                //RECIBIR ->Booleano
                const respuestaSome = arregloEstudiantes
                    .some(
                        function(valorActual,i,arreglo){
                            const condicion = valorActual.nota < 7;
                            //CONDICION TRUTY O TRUE
                            return condicion;

                        }
                    );
                    console.log('respuestaSome', respuestaSome);
                    console.log('arregloEstudiantes',arregloEstudiantes);

                        // Every ->  devuelve verdadero o falso dependiendo de la condicion
                        //  si todos cumple devuelve true
                        //  si todos cumple devuelve false
                        //ENVIAMOS ->Condicion
                        //RECIBIR ->BOOleano
                        const respuestaEvery = arregloEstudiantes
                            .every(
                                function(valorActual,i,arreglo){
                                    const condicion = valorActual.nota >= 7;
                                    return condicion;
                                }
                            );
                            console.log('RespuestaEvery',respuestaEvery);
                            console.log('ArregloEstudiantes',arregloEstudiantes);

                            //Reduce -> Devuelve un valor
                            //ENVIAMOS -> CALCULO
                            //RECIBIR -> VALOR
                            const respuestaReduce = arregloEstudiantes
                                .reduce(
                                    function(acumulador,valorActual, i, arreglo){    //funcion
                                        const calculo = acumulador + valorActual.nota;
                                        return calculo;
                                    },
                                    0 //valor Inicial del acumulador
                            );
                            console.log('respuestaReduce',respuestaReduce);
                            console.log('Promedio', respuestaReduce/arregloEstudiantes.length);   // para dividir por la cantidad de elemntos del arreglo
                            console.log('arregloEstudiantes',arregloEstudiantes);



                            //operador filter--desarrollado

                            const respuestaFilterNuestro = filter(
                                arregloEstudiantes,
                                function(valorActual, i, arr){
                                    console.log('valor: ',valorActual);
                                    console.log('indice: ', i);
                                    console.log('arreglo:', arr);
                                    return valorActual.nota >= 7;
                                }
                            );
                            console.log('respuestaFilterNuestro', respuestaFilterNuestro);
                            console.log('arregloEstudiante',arregloEstudiantes);

                            //operador map --desarrollado
                            const respuestaMapNuestro = map(
                                arregloEstudiantes,
                                function(valorActual,i,arr){
                                    const nuevoObjeto={
                                        id:valorActual.id,
                                        nombre: valorActual.nombre,
                                        //nota:valorActual.nota,
                                        nota20: valorActual.nota*2
                                    };
                                    return  nuevoObjeto
                
                                }
                            );
                            console.log('respuestaMapNuestro', respuestaMapNuestro);
                            console.log('arregloEstudiantes',arregloEstudiantes);

                            //operador FOREACH--DESARROLLADo
                            const respuestaForEachNuestro = forEach(
                                arregloEstudiantes,
                                function(valorActual,indice,arreglo){
                                    console.log(valorActual.nota);
                                }
                                
                            );
                                console.log(respuestaForEachNuestro);

                                //operador SOME--DESARROLLADO
                                const respuestaSomeNuestro = some(
                                    arregloEstudiantes,
                                    function(valorActual,i,arreglo){
                                        const condicion = valorActual.nota < 2;
                                        return condicion;

                                    }
                                );
                                    console.log('respuestaSomeNuestro', respuestaSomeNuestro);
                                    console.log('arregloEstudiantes',arregloEstudiantes);

                                    //operador EVERY--DESARROLLADO
                                    const respuestaEveryNuestro = every(
                                        arregloEstudiantes,
                                        function(valorActual,i,arreglo){
                                            const condicion = valorActual.nota < 10;
                                            return condicion;
    
                                        }
                                    );
                                        console.log('respuestaEveryNuestro', respuestaEveryNuestro);
                                        console.log('arregloEstudiantes',arregloEstudiantes);

                                        //operador REDUCE--DESARROLLADO
                                        const respuestaReduceNuestro = reduce(
                                            arregloEstudiantes,
                                            function(acumulador,valorActual, i, arreglo){    //funcion
                                                const calculo = acumulador + valorActual.nota;
                                                return calculo;
                                            },
                                            0 //valor Inicial del acumulador
                                        );
                                        console.log('respuestaReduceNuestro',respuestaReduceNuestro);
                                        console.log('Promedio', respuestaReduceNuestro/arregloEstudiantes.length);   // para dividir por la cantidad de elemntos del arreglo
                                        console.log('arregloEstudiantes',arregloEstudiantes);
}
main();

 
