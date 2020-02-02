import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";
import * as prompts from 'prompts'; 
import { caracteristisAnimal } from "./interfaces/animales.interfaces";




//transformar un objeto en texto

async function main(){
    
    const contenidoArchivo = leerArchivo(
        './texto.txt'
    );
    console.log('contenidoArchivo',contenidoArchivo);
    
        let arregloCargadoDeArchivo; // undifined
        try{
            arregloCargadoDeArchivo = JSON
                .parse(contenidoArchivo);
    }catch(error){
            arregloCargadoDeArchivo =[];
            console.error('Error parseado archivo');
        //throw new Error("EL ARCHIVO ESTA MAL PARSEADO")

    }

    
   
    let cantidad = await prompts({
    type: 'number',
    name:'numero',
    message:'Cuantos animales quieres ingresar?',
    validate: value => value < 0? `Debe ser un numero positivo`: true
});
    //OPERADORES
    let contador = 1;
    let minimoId = -1;
    arregloCargadoDeArchivo
        .forEach(                     //NO ENVIA NADA Y NO DEVUELVE NADA
        //ITERAR
        function(valorActual){
            const idActual = valorActual.id;
            if(idActual > minimoId){
                minimoId = idActual
            }

    }
    );
    minimoId = minimoId + 1;
    contador = minimoId

    const arregloAnimales: caracteristisAnimal[] = arregloCargadoDeArchivo;
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

    const cantidadUno = cantidad.numero;

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

    //EDITAR
    const idABuscar = await prompts({
        type: 'number',
        name:'id',
        message: 'Ingresa el id del registro a Editar'
    })

    const indiceEncontrado = arregloAnimales.findIndex(   //return CONDICION -
        function (valorActual, indice, arreglo){
            return valorActual.id==idABuscar.id;  //Nos devuelve el INDICE
        }   //  Si encuentra nos devuelve el indice
        // no encuentra
    )
    console.log('Indice encontrado:', indiceEncontrado);
    const nombreAEditar = await prompts({
        type: 'text',
        name: 'nombre',
        message:'Ingrese el nuevo nombre'       
    })
    arregloAnimales[indiceEncontrado].nombre = nombreAEditar. nombre;
    console.log(arregloAnimales);

    //BUSCAR
    const buscar = await prompts({
        type: 'text',
        name: 'nombre',
        message:'Buscar por ID o por nombre'
    });
    const animalEncontrado = arregloAnimales
    .find(
        function(valorActual){
            return valorActual.nombre == buscar.nombre;
        
        }
    );
    console.log(animalEncontrado);

    const arregloTexto = JSON.stringify(arregloAnimales);   //stringify---cambia el arreglo a texto
    console.log(arregloTexto);
    escribirArchivo(
        './ejemplo.txt',
        arregloTexto
    );

    //BORRA
    const idABuscar2 = await prompts({
        type: 'number',
        name:'id',
        message: 'Ingresa el id del registro a Borrar'
        })
        const indiceEncontrado2 = arregloAnimales.findIndex(   //return CONDICION -
            function (valorActual, indice, arreglo){
                return valorActual.id==idABuscar2.id;  //Nos devuelve el INDICE
            }   
            )
            if(indiceEncontrado2 != -1 )
            {
                //console.log(indiceEncontrado);
                arregloAnimales.splice(indiceEncontrado2,1);
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

            const arregloText = JSON.stringify(arregloAnimales);   //stringify---cambia el arreglo a texto
            console.log(arregloText);
            escribirArchivo(
                './texto.txt',
                arregloText
            );


}

main().then().catch();