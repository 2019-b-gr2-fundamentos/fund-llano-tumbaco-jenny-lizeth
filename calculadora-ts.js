module.exports = function (numUno, numDos){
    var sum = numUno + numDos;
    var prom = sum / 2;

    return prom;
    
}


var operacionString = prompt("Ingrese operación");
var aString = prompt("Ingresa un número");
var bString = prompt("Ingresa otro número");
var a = Number(aString);
var b = Number(bString);
var operacion = String(operacionString);
switch (operacion) {
    case "suma":
        console.log("Respuesta:", a + b);
        break; //termina de comparar
    case "resta":
        console.log("Respuesta:", a - b);
        break;
    case "multiplicación":
        console.log("Respuesta:", a * b);
        break;
    case "división":
        console.log("Respuesta:", a / b);
        break;
    case "promedio":
        var sum = (a + b);
        var prom = (sum / 2);
        console.log("El promedio es:", prom);
        break;
    default: // si no existe ningun de los casos
        console.log("no hay operación");
        break;
}
