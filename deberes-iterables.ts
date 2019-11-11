let numeroDeDeberes = 0;
let ingles = 0;
let fisica = 0;
let calculo = 0;
let programacion = 0;
let compiladores = 0;
let algebraLineal = 0;
let analisisSocioeconomico = 0;

console.log("Cuantos deberes tengo =(");
do{
    numeroDeDeberes ++   //numerosDeDeberes = numerosDeDeberes + 1

    if(numeroDeDeberes % 13 == 0){
        ingles = ingles + 1;  
    }else {
        if(numeroDeDeberes % 11 == 0){
            fisica = fisica + 1;
        }else{
            if(numeroDeDeberes % 7 == 0){
                calculo = calculo + 1;
            }else{
                if(numeroDeDeberes % 5 == 0){
                    programacion = programacion + 1;
                }else{
                    if(numeroDeDeberes % 3 == 0){
                        compiladores = compiladores + 1;
                    }else{
                        if(numeroDeDeberes % 2 == 0){
                            algebraLineal = algebraLineal + 1;
                        }else{
                            if(numeroDeDeberes % 2 == 1){
                                analisisSocioeconomico = analisisSocioeconomico + 1;
                            }else{
                                console.log("No tiene deberes");
                            }
                        }
                    }
                }
            }
        }
    }

}while(numeroDeDeberes <= 1000);
console.log('Los ' + (numeroDeDeberes - 1) + ' deberes ingresados esta dividido para las siguientes materias:');
console.log("Análisis socioeconómico: ", analisisSocioeconomico);
console.log("Álgebra lineal: ", algebraLineal);
console.log("Compiladores: ",compiladores);
console.log("Programación: ", programacion);
console.log("Cálculo: ", calculo);
console.log("Física: ", fisica);
console.log("Ingles: ", ingles);
    
