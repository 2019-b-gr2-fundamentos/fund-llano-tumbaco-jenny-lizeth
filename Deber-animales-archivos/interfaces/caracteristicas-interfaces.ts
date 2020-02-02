import * as prompts from 'prompts';
import { caracteristisAnimal } from './animales.interfaces';

export async function caracteristicas(){
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
const arregloPreguntasUno:caracteristisAnimal = await prompts(arregloPreguntas)
return arregloPreguntasUno;
}