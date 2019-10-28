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

