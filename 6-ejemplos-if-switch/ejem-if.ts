//Nombre: Jenny Llano
//3 ejemplos con el condicional if
// si es un numero positivo o negativo o cero
const numeroString = prompt("Ingresar un numero");
const numero = Number(numeroString);
if (numero > 0 ){
    console.log("El número es positivo");
} else {
    if (numero == 0){
     console.log("El número es cero");
    } else {
        if (numero < 0 ){
         console.log("El número es negativo");
        }else {
         console.log("No es un número");
        }
    }
 } 

 
//quien eres
const estudianteString = prompt("Ingrese B si es estudiante de lo contrario ingrese otra letra");
const laborString = prompt("Ingrese A si es padre o madre de lo contrario ingrese otra letra");
const estudiante = String(estudianteString);
const labor = String(laborString);  //String porque se toman letras no números

if (estudiante == "B" && labor == "A"){
    console.log("Eres un super héroe sensacional");

} else {
    if(estudiante != "B" && labor == "A"){
        console.log("Excelente");
    
    } else{
        if(estudiante == "B" && labor != "A"){
            console.log("Bueno");
    
        } else{
            if(estudiante != "A" && labor != "B"){
                console.log("Regular");
    
            } else{
                console.log("Error");
            }
        }
    }
}


//determinar la vocales abiertas y cerradas
const vocalString = prompt("Ingrese una vocal");
const vocal = String(vocalString);

if(vocal == "a"){
    console.log(vocal,"Es una vocal abierta");
}else{
    if(vocal == "e"){
        console.log(vocal,"Es una vocal abierta");
    }else{
        if(vocal == "i"){
            console.log(vocal,"Es una vocal cerrada");
        }else{
            if(vocal == "o"){
                console.log(vocal,"Es una vocal abierta");
            }else{
                if(vocal == "u"){
                    console.log(vocal,"Es una vocal cerrada");
                }else{
                    console.log("No es una vocal");
                }
            }
        }
    }
}



