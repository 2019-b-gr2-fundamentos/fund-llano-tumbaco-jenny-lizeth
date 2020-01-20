//02-crud.ts --> create read update delete
//const prompts = require('prompts');
import * as prompts from 'prompts';   // para importar el paquete prompts
import { RespuestaEdad } from './interfaces/respuesta-edad.interface';
import { RespuestaNombre } from './interfaces/respuesta-nombre.interface';

function main(){
    //npm uninstall -g tsc ->windows
    //npm install -g typescript ->windows
    //npm uninstall -g tsc ->windows        
    //sudo npm uninstall -g tsc ->linux o mac                            
    //obtenerDatosAnimalPerrito();                                                      
    obtenerDatosAnimalPerritoSincrono()
    .then()
    .catch();   //promesa//sincrona

}


async function obtenerDatosAnimalPerritoSincrono(){
    console.log('Inicio');
    const preguntas =[
        {
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
        },
        {
        type:'text',
        name:'nombre',
        message:'Puedes darme tu nombre?'
        },
        {
        type:'text',
        name:'cedula',
        message:'Puedes darme tu cedula?'
        }
    ]
    const RespuestaEdad = await prompts(preguntas);
    console.log('Respuesta',RespuestaEdad);
    console.log('FIN');

}


function obtenerDatosAnimalPerrito(){    //ASINCRONA
    //Paradigma de programacion 
    //SINCRONO vs ASINCRONO
    console.log('Inicio');
    const promesaEdad = prompts({  // la funcion prompts devuelve una promesa
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    });
    console.log(promesaEdad);
    promesaEdad   //funcion promesa
    .then(  // ok
        (datos)=>{
            console.log('datos',datos);   // aqui puedo seguir
            ///
            const promesaNombre = prompts({  // la funcion prompts devuelve una promesa
                type: 'text',
                name: 'nombre',
                message: 'Puedes darme tu nombre?'
            });
            promesaNombre   //funcion promesa
            .then(  // ok
                (datosNombre)=>{
                    console.log('Nombre',datosNombre);   // aqui puedo seguir
                    
                }
            )
            .catch(   // =(
                (error)=>{
                    console.log('Error',error);
                }
            );
            ///
        }
    )
    .catch(   // =(
        (error)=>{
            console.log('Error',error);
        }
    );
    
    console.log('fin');

}
main();





