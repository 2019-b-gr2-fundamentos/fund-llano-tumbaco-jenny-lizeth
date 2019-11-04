const operacionString = prompt("Ingrese operación");
const aString = prompt("Ingresa un número");  
const bString =  prompt("Ingresa otro número");  
const a = Number(aString);
const b = Number(bString);
const operacion = String(operacionString);
switch (operacion){
    case "suma":
        console.log("Respuesta:",a + b);
    break;                  //termina de comparar

    case "resta":
        console.log("Respuesta:",a - b);
    break;

    case "multiplicación":
        console.log("Respuesta:",a * b);
    break;

    case "división":
        console.log("Respuesta:",a / b);
    break;
    
    case "promedio":
        var sum = (a+b);
        var prom = (sum / 2);
        console.log("El promedio es:", prom);
    break;

    default:              // si no existe ningun de los casos
        console.log("no hay operación");
    break;
}