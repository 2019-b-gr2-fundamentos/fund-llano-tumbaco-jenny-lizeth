import{AnimalPerrito}from './interfaces/animal-perrito.interface'
import{Duenio} from './interfaces/duenio.interface'
/*DATOS PRIMITIVOS EN JAVA
boolean, string, number
null -> object
 */
//PERSONA
//ANIMAL ->nombre cientifico, color principal
//fecha de nacimiento,peso,genero,altura

//CASI EN TODOS LOS LENGUAJES
//Struct -> Estructura de datos
//Clase -> Esctructura de datos -> Metodos!

const ejemploEstructura = {
    'nombreCientifico': 'canis lupus familiaris',
    "llave":"valor",    
    enojo: undefined,
    edadActual: edad, // variables 
    noEsNecesario: true, // ultima coma ok
}

//ESTRUCTURA DE DATOS EN LENGUAJE NO TIPADO
const poliPerro={
    //llave:'valor',
    nombreCientifico:'canis lupos familiaris',
    nombre:'Grandote',
    clan:'PoliPerro',
    edad: 10
    hijos: null,
    perritas:['Manuela','Zoraida'],
    vacunado: true,
}
console.log(poliPerro.nombre); //canis lupos familiaris

//ESTRUCTURA DE DATOS EN LENGUAJE TIPADO


const poliPerroAmarillo: AnimalPerrito ={
    //llave:'valor',
    nombreCientifico:'canis lupos familiaris',
    nombre:'Amarillo',
    clan:null //a cualquier propiedad de la struct
               // se puede poner "null"
    //edad: 4,
    //hijos: null,
    //perritas:[],
    //vacunado: false,

    duenio: duenioPoliPerroAmarillo
}

const duenioPoliPerroAmarillo: Duenio = {
    nombres:'Jenny',
    apellidos: '',
    fechaNacimiento: 2
    mascotasPerros: [poliPerroAmarillo]
}

poliPerroAmarillo.duenio = duenioPoliPerroAmarillo;
poliPerroAmarillo.edad = 4;
poliPerroAmarillo.vacunado=true;

//Acceder a los datos de una estructura de datos
console.log(poliPerroAmarillo.duenio.nombres);
console.log(poliPerroAmarillo.duenio.apellidos);
console.log(poliPerroAmarillo.nombre);
console.log(poliPerroAmarillo.edad);


