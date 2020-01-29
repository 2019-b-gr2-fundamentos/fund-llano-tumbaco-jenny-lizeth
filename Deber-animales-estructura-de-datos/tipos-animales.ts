import * as prompts from 'prompts';
import { caracteristicasAnimales } from './interfaces/animales.interfaces';


async function main(){
    
    console.log('Inicio Caracteristicas de los animales');
    
    let contador = 1;
    
    const arregloPreguntas = [
        {
            type: 'text',
            name:'nombre',
            message: 'Ingresa nombre animal',
            
        },
        {
            type: 'text',
            name:'tipo',
            message: 'Ingresa su clasificacion segun su estructura osea',
            
        },
        {
            type: 'text',
            name:'habitat',
            message: 'Donde vive?',
            
        },
        {
            type: 'text',
            name:'alimentacion',
            message: 'Ingresa su tipo de alimentacion',
            
        },
        {
            type: 'text',
            name:'reproduccion',
            message: 'Ingresa el tipo de repoducción',
            
        }

    ];
    
    const cantidad = await prompts({
        type: 'number',
        name:'numero',
        message:'Cuantos animales quieres ingresar?',
        validate: value => value < 0? `Debe ser un numero positivo`: true
    });

    
    const cantidadUno = cantidad.numero;

    const arregloAnimales:caracteristicasAnimales[] = [];

            for(let numeroVeces = 0; numeroVeces< cantidadUno; numeroVeces++){                    //si es que no va a ser infinito
                
                const RespuestaEstudiantes = await prompts(arregloPreguntas);
                
                const nuevoRegistro = {
                id: contador,
                nombre: RespuestaEstudiantes.nombre,               //.nombre---> para poder acceder
                tipo: RespuestaEstudiantes.tipo,
                habitat: RespuestaEstudiantes.habitat,
                alimentacion: RespuestaEstudiantes.alimentacion,
                reproduccion: RespuestaEstudiantes.reproduccion 
                };
                
                contador = contador + 1
                arregloAnimales.push(nuevoRegistro);
                
            }
            console.log('Caracteríticas de los animales \n ',arregloAnimales);

            
            
            
            let m = 0;

            while (m<2){
            
                console.log('escriba el numero de la opcion que desea');
                console.log('1. crear');
                console.log('2. actualizar');
                console.log('3. borrar');
                console.log('4. buscar');
                console.log('5. salir');
            
                const elijeOpcion = await prompts({
                type: 'number',
                name:'numero',
                message:'Cual eliges?',
                validate: value => value < 0? `Debe ser un numero positivo`: true
                });
        
                const opcion = elijeOpcion.numero;
                if (opcion == 1){

                    const RespuestaEstudiantes = await prompts(arregloPreguntas);                
                    const nuevoRegistro = {
                        id: contador,
                        nombre: RespuestaEstudiantes.nombre,               //.nombre---> para poder acceder
                        tipo: RespuestaEstudiantes.tipo,
                        habitat: RespuestaEstudiantes.habitat,
                        alimentacion: RespuestaEstudiantes.alimentacion,
                        reproduccion: RespuestaEstudiantes.reproduccion 
                    };
                    
                    contador = contador + 1
                    arregloAnimales.push(nuevoRegistro);
                    
                    console.log('Caracteríticas de los animales \n ',arregloAnimales);
                
                }else{
                    if(opcion == 2){
                        
                        const idABuscar = await prompts({
                        type: 'number',
                        name:'id',
                        message: 'Ingresa el id del registro a Editar'
                        })
                
                        const indiceEncontrado = arregloAnimales.findIndex(   //return CONDICION -
                        function (valorActual, indice, arreglo){
                            return valorActual.id==idABuscar.id;  //Nos devuelve el INDICE
                        }   
                        )
                        
                        console.log('Indice encontrado:', indiceEncontrado);
                        const nombreAEditar = await prompts({
                        type: 'text',
                        name: 'nombre',
                        message:'Ingrese el nuevo nombre'       
                        })
                        
                        
                        arregloAnimales[indiceEncontrado].nombre = nombreAEditar. nombre;
                        console.log(arregloAnimales);
                    
                    }else{
                        if(opcion == 3){
                            const idABuscar = await prompts({
                                type: 'number',
                                name:'id',
                                message: 'Ingresa el id del registro a Borrar'
                                })
                                const indiceEncontrado = arregloAnimales.findIndex(   //return CONDICION -
                                    function (valorActual, indice, arreglo){
                                        return valorActual.id==idABuscar.id;  //Nos devuelve el INDICE
                                    }   
                                    )
                                    if(indiceEncontrado != -1 )
                                    {
                                        //console.log(indiceEncontrado);
                                        arregloAnimales.splice(indiceEncontrado,1);
                                        //console.log(arregloAnimales);
                                        //console.log(arregloAnimales[0].id);
                                        const Tm= arregloAnimales.length;
                                        contador=arregloAnimales.length+1;
                                        for(let i=0; i < Tm ; i++){
                                            arregloAnimales[i].id=i+1;
                                        }
                                        //arregloAnimales[0].id=1000;
                                        console.log(arregloAnimales);
                                        
                                    }
                                    else{
                                        console.log('El id no se encuentra');
                                        console.log(arregloAnimales);
                                    }
                                
                        }else{
                            if(opcion == 4){
                                const buscar = await prompts({
                                    type: 'text',
                                    name: 'nombre',
                                    message:'Buscar por ID o por nombre'
                                });
                                const animalEncontrado = arregloAnimales.find(
                                    function(valorActual){
                                        return valorActual.nombre == buscar.nombre;
                                    }
                                );
                                
                                console.log(animalEncontrado);

                            }else{
                                if(opcion == 5){
                                    let m = 4;
                                    console.log('FIN')
                                    break;                               // par romper el ciclo
                                }else{
                                    console.log('Error');

                                }
                            }
                        }
                    }
                }
            }
            console.log('fin');
}
main().then().catch();

