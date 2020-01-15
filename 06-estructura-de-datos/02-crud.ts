//02-crud.ts --> create read update delete
//const prompts = require('prompts');
import * as prompts from 'prompts';   // para importar el paquete prompts
function main(){
    obtenerDatosAnimalPerrito();

}

function obtenerDatosAnimalPerrito(){
    //Paradigma de programacion 
    //SINCRONO vs ASINCRONO
    console.log('inicio');
    const promesaEdad = prompts({  // la funcion prompts devuelve una promesa
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    })
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
            })
            promesaNombre   //funcion promesa
            .then(  // ok
                (datos)=>{
                    console.log('Nombre',datos);   // aqui puedo seguir
                    
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