
if(true){   //bloque 1
    let edad = 30
    console.log(edad);
    if (edad){   //bloque 2
        console.log(edad);
        if (edad){  //bloque 3
            console.log(edad);
        }else{  //bloque 4
            console.log(edad);
        }
    }else{   //bloque5
        console.log(edad);
    }
}else{     //bloque6
    console.log(edad);
    console.log("7años de carcel");
}



for( i = 0; i < 10; i++){
let bandera=0   //el valor se reinicia cada vez que entra al for
bandera = bandera + i;
console.log(bandera);
}



let arregloFloron = [0,0,0,0,1];
for(let i=0; i<5; i++){  //bloque1
    let existeFloron = false; //solo sirve para este bloque
    if(arregloFloron[1]==1){   //bloque2
        existeFloron = true;
    }
}
if(existeFloron){  //bloque3
    console.log("adivinar");
}else{
    console.log("Asignar y luego adivinar");
}


let arregloFloron = [0,0,0,0,1];
let existeFloron =false;
for(let i=0; i<5; i++){  //bloque1
    if(arregloFloron[i]==1){   //bloque2
        existeFloron = true;
    }
}
if(existeFloron){  //bloque3
    console.log("adivinar");
}else{
    console.log("Asignar y luego adivinar");
}