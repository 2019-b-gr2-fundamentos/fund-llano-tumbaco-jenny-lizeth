//04-condicioneeales.ts
const casado = true;
if(casado == true){
    console.log("Si estoy casada");
}else{
    console.log("No estoy casada");
}


if(casado == false) {  // Expresión -->boolean
    console.log("No estoy casada");
}else{
    console.log("Si estoy casada");
}

if(casado != true) {  
    console.log("No estoy casada");
}else{
    console.log("Si estoy casada");
}

if(casado != false) {  
    console.log("Si estoy casada");
}else{
    console.log("No estoy casada");
}

const tengoMosa = true;
const estaCasado = casado == true;  //expresión
const soyMosero = tengoMosa == true;
if(casadoYMosero){
    console.log("Casado y mosero");
} else {
    console.log("O casado o Mosero o Nada");
}

// casadoYMosero <=> c==true %% b== true

//AND --> && --> AMPERS
// TRUE Y TRUE = TRUE
// TRUE Y FALSE = FALSE
//FALSE Y TRUE = FALSE
//FALSE Y TRUE = FALSE

//OR  --> || -> PIPES
//TRUE Y TRUE = TRUE
//TRUE Y FALSE = TRUE
//FALSE Y TRUE = TRUE
//FALSE Y FALSE = FALSE 


//apago la primera alarma me hago
// bolita y lloro hasta la segunda
// alarma y me levanto
// celular descargado  == true 
//celularDañado   == true
// amaneceMuerto  == true
// estaActivadaLaAlarma   != true
//estaEnModoSilencio   == true
// const seAtrasoAClase = celularDescargado == true || celularDañado == true || amaneceMuerto == true || estaActivadaLaAlarma != true || estaActivadaLaAlarma == true;  
//if(seAtrasoAClases){
//console.log("Llega tarde a clases")
//}



//ESTOS REPRESENTAN LOS FALSOS O VERDADEROS
//TRUTY // string lleno

const nombreVacio = -1;  
if(-1){
console.log("Truty");
}else{
console.log("Falsy"); 
}

const nombreVacio = "nombre";  
if("nombre"){
console.log("Truty");
}else{
console.log("Falsy"); 
}

//FALSY//string vacio

const nombreVacio = 0;  
if(0){
console.log("Truty");
}else{
console.log("Falsy"); 
}
  
if(undefined){
console.log("Truty");
}else{
console.log("Falsy"); 
}

//  SWITCH
const calculo = ""; //sumar restar multiplicar dividir
switch(calculo){

    case "sumar":
    //code block
      break;   //termina de comparar

    case "restar":
    //code block
      break;
    
    case "multiplicar":
    //code block
      break;
    
    case "dividir":
        //code block
        break;

        default:  //
}





const edadString = prompt("Ingresar numero");
const edad = Number(edadString); 
if(edad >0 && edad <= 6){
    console.log("Guagua");
}
 else {
    if( 6 < edad <== 18){
        console.log("Guambra");
    }else {
        if ( 18 < edad <== 60);
        console.log("longo");
    }else{
        if (edad > 60)
        console.log("ruku");
    }
}