import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts'; 


//transformar un objeto en texto

async function main(){
    
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    console.log('contenidoArchivo',contenidoArchivo);
    
    // PARSEAR -> TEXTO -> Estructura en memoria
    /*
    {
        "nombre":"Adrian"
    }
    <universidad>
        <factultad></facultad>
    </universidad>
    */
    
        let arregloCargadoDeArchivo; // undifined
        try{
            arregloCargadoDeArchivo = JSON
                .parse(contenidoArchivo);
    }catch(error){
            arregloCargadoDeArchivo =[];
            console.error('Error parseado archivo');
        //throw new Error("EL ARCHIVO ESTA MAL PARSEADO")

    }
    
   let contador = 3;
    //OPERADORES
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

    /*try{
        console.log('1');
        console.log('2');
        console.log('3');
        // Syntax Error}
        let a = 1;
        let a = 2;
        let a = 3; // ESTA MAL!
        console.log(123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123)
        throw new ReferenceError("EL ARCHIVO ESTA MAL PARSEADO");
        console.log('4');
        console.log('5');
    }catch(error){
        console.log(error);
        console.log(':3')
    }
    */

    //DEBER -- esto poner en una funcion para que no se repita el codigo--LISTO CREAR.
    const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo;
    const arregloPreguntas = [
        {
        type:'text',
        name:'nombre',
        message:'Ingresa tu nombre'
    }
    ];
    
    const respuestaEstudianteUno = await prompts(arregloPreguntas);
    const nuevoRegistroUno = {
        id: contador,
        nombre: respuestaEstudianteUno.nombre               //.nombre---> para poder acceder 
    };
    contador = contador + 1
    arregloEstudiantes.push(nuevoRegistroUno);

    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    const nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre               //.nombre---> para poder acceder 
    };
    contador = contador + 1
    arregloEstudiantes.push(nuevoRegistroDos)

    console.log('Cual usuario quieres editar?');
    console.log(arregloEstudiantes);



    //OPERADORES!! -> REEMPLAZAR AL ¡FOR! --- EDITAR EL ARREGLO
    const idABuscar = await prompts({
        type: 'number',
        name:'id',
        message: 'Ingresa el id del registro a Editar'
    })

    const indiceEncontrado = arregloEstudiantes.findIndex(   //return CONDICION -
        function (valorActual, indice, arreglo){
            //console.log(valorActual);
            //console.log(indice);
            //console.log(arreglo);
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
    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar. nombre;
    console.log(arregloEstudiantes);


    const buscar = await prompts({
        type: 'text',
        name: 'nombre',
        message:'Buscar por ID o por nombre'
    });
    const estudianteEncontrado = arregloEstudiantes
    .find(
        function(valorActual){
            return valorActual.nombre == buscar.nombre;
        }
    );
    console.log(estudianteEncontrado);
    const arregloTexto = JSON.stringify(arregloEstudiantes);   //stringify---cambia el arreglo a texto
    console.log(arregloTexto);
    escribirArchivo(
        './ejemplo.txt',
        arregloTexto
    );


}

main().then().catch();



 //PARSEAR -> TEXTP -> eSCTRUCTURA EN MEMORIA
    /*
{
    "nombre"
}

<Universal>
<sdfdf> <ggf>
*/


/*function main(){
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBE :( \n';
    escribirArchivo('./ejemplo.txt','');  //pone el nuevo contenido
    console.log(textoLeido + nuevoContenido);
}
main();

//escribirArchivo('');  // para que se limpie el archivo*/