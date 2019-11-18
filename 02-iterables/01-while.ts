//DO while
let vecesQueHeComido = 0;

do {
    console.log("Vamos a comer");
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido){
        case 1:
            console.log("Desayuno");
            break;

        case 2:
            console.log("Almuerzo");
            break;

        case 3:
            console.log("Merienda");
            break;

        default:
            console.log("Gorditos");


    }


}

//While
let vecesQueHeComido = 0; 

while(vecesQueHeComido < 3)
{
    console.log("Vamos a comer");

    console.log("Desayuno");

}


/* 
1 Analisis socieconomico
2 Algebra
3 Compiladores
5 Findamentos de programacion
7 Calculo
11 Fisica
13 Ingles

si es impar-> aumentamos a analisis socioeconomico  //17
si es par -> aumentamos a algebra  //17
si es multiplo de 3 -> aumentamos a compiladores  //16
*/
    
let deber = 0;
let compiladores = 0;
let algebra = 0;
let analisissocioEconomico = 0;

while(deber < 50)
do{
    console.log("Cuantos deberes tienes");
    
    deber = deber + 1;
    if (deber % 3 == 0){
    compiladores = compiladores + 1;
    }else{
        if(deber % 2 == 0){
        algebra = algebra + 1;
        }else{
            if(deber % 2 == 1){
            analisissocioEconomico = analisissocioEconomico + 1;
            }else{
            console.log('Hice ${analisissocioeconomico}deberes.'); // template strings -> tilde invertida = alt 960
         
            }

        }
            
    
    }
 
}