//Nombre: Jenny Llano
//3 ejemplos con switch
//determinar cuantos días tiene un mes en el año 2020
const mesString = prompt("Ingrese un mes del año");
const mes = String(mesString);
const A = String("tiene 31 días en el año 2020"); //String por que es un caracter
const B = String("tiene 30 días en el año 2020");
switch(mes){

    case "enero":
        console.log(mes, A);
        break;

    case "febrero":
        console.log(mes, "tiene 29 días en el año 2020");
        break;

    case "marzo":
        console.log(mes, A);
        break;

    case "abril":
        console.log(mes, B);
        break;

    case "mayo":
        console.log(mes, A);
        break;

    case "junio":
        console.log(mes, B);
        break;

    case "julio":
        console.log(mes, A);
        break;

    case "agosto":
        console.log(mes, A);
        break;

    case "septiembre":
        console.log(mes, B);
        break;

    case "octubre":
        console.log(mes, A);
        break;

    case "noviembre":
        console.log(mes, B);
        break;

    case "diciembre":
        console.log(mes, A);
        break;

    default:
        console.log("No es un mes del año");
        break;
}


//determinar las características de los triángulos
const triánguloString = prompt("Ingrese el nombre del triángulo");
const triángulo = String(triánguloString);

switch (triángulo){

    case "equilatero":
        console.log(triángulo, "es un triángulo con 3 lados iguales");
        break;

    case "isósceles":
        console.log(triángulo, "es un triángulo con 2 lados iguales");
        break;

    case "escaleno":
        console.log(triángulo, "es un triángulo con 0 lados iguales");
        break;

    case "obtusángulo":
        console.log(triángulo, "es un triángulo con un ángulo mayor de 90°");
        break;

    case "acutángulo":
        console.log(triángulo, "es un triángulo con todos sus ángulos menores de 90°");
        break;

    case "rectángulo":
        console.log(triángulo,"es un triángulo con un ángulo de 90°");
        break;

    default:
        console.log("No es un triángulo");
        break;
}


//posición de los planetas del sistema solar
const planetaString = prompt("Ingrese el nombre de un planeta");
const planeta = String(planetaString)

switch (planeta){

    case "mercurio":
        console.log("Mercurio es el primer planeta en el sistema solar.");
        break;

    case "venus":
        console.log("Venus es el segundo planeta en el sistema solar.");
        break;

    case "tierra":
        console.log("Tierra es el tercer planeta en el sistema solar.");
        break;

    case "marte":
        console.log("Marte es el cuarto planeta en el sistema solar.");
        break;

    case "júpiter":
        console.log("Júpiter es el quinto planeta en el sistema solar.");
        break;

    case "saturno":
        console.log("Saturno es el sexto planeta en el sistema solar.");
        break;

    case "urano":
        console.log("Urano es el séptimo planeta en el sistema solar.");
        break;

    case "neptuno":
        console.log("Neptuno es el octavo planeta en el sistema solar.");
        break;

    default:
        console.log("No es un planeta.");
        break;
}