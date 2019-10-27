const numeroUno = 1;  //camelCase
const numeroDos = 2;
let resultado = 0;
//SUMA
resultado = 1 + 2;
//RESTAR
resultado = 1 - 2;
//MULTIPLICAR
resultado = 1 * 2;
//DIVIDIR
resultado = 1 / 2;
//EXPONENCIAL
resultado = 1 ^ 2;
//MOD
resultado = 4 % 2; //0 -> residuo
resultado = 4 % 3; //1  -> residuo
resultado = 7 % 3; //1

//console.log ("pera" + 2);

//STRINGS
const mensaje = "\"Hola mmundo\"";
const saludo = "\"Adio\s mundo\"";
console.log (mensaje + "1\t\t\t 3\n" + saludo);
// template strings
const edad = 19;
const saludoEdad = `Mi edad es : ${edad}`;
const saludoCompleto = `${mensaje} \n${saludo}`;
console.log(saludoEdad);
console.log(saludoCompleto);
//contamos los elementos
const nombreLongitud = "vicente adrian"
console.log(nombreLongitud.length);
//eliminar espacios al principio y al final
console.log(nombreLongitud.trim());
//cambiar a mayusculas
console.log(nombreLongitud.toUpperCase());
console.log(nombreLongitud.toLowerCase());
console.log(nombreLongitud.replace("k","i"));
console.log(nombreLongitud.replace("y","a"));
//console.log(nombreLongitud.replace("\n"," "));
console.log(nombreLongitud.replace("e","i"));
console.log(nombreLongitud);
console.log(nombreLongitud);
console.log(nombreLongitud.replace("k","i")); //reemplaza
console.log(nombreLongitud);
console.log(nombreLongitud.search("x")); //-1  si no existe
console.log(nombreLongitud.search("y"));  // 4  cuenta desde el cero, tambien con nombres
console.log(nombreLongitud.slice(0,6));  // saca el nombre en esas posiciones
console.log(nombreLongitud.indexOf("x"));   // -1
console.log(nombreLongitud.includes(" "));  //booleano
console.log(nombreLongitud.includes("x"));  //  booleano
console.log(nombreLongitud.endsWith("x"));   // booleano
console.log(nombreLongitud.startsWith("vice")); //  booleano
console.log(nombreLongitud.substring(0,6));  // igual que el slice







//const COLOR_ROJO = 1;  // camelCase
//NUMEROUNO   -> todo mayuscula (separación no)
//NUMERO_UNO -> mayusculas guion bajo
//Numerouno   ->
//numero_uno   -> notación de python
//numerOunO   ->

