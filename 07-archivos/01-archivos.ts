import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";
import * as prompts from 'prompts'; 
import { Estudiante } from "./interfaces/estudiante.interface";

//transformar un objeto en texto

async function main(){
    let contador = 1;
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    console.log('contenidoArchivo',contenidoArchivo);
    const arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
    const arregloEstudiantes: Estudiante [] = arregloCargadoDeArchivo;
    const arregloPreguntas = [
        {
            type: 'text',
            name:'nombre',
            message: 'Ingresa nombre'
        }
    ];

    //DEBER -- esto poner en una funcion para que no se repita el codigo--LISTO CREAR.
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
        nombre: respuestaEstudianteUno.nombre               //.nombre---> para poder acceder 
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


}

main().then().catch();






/*function main(){
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBE :( \n';
    escribirArchivo('./ejemplo.txt','');  //pone el nuevo contenido
    console.log(textoLeido + nuevoContenido);
}
main();

//escribirArchivo('');  // para que se limpie el archivo*/