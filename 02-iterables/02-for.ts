/*for 
1) declarar una variable
2) condicion(expresion)
3)incrementar, disminuir
*/

for(let numeroExDeMiCrush = 7; 
    numeroExDeMiCrush > 0;      // !=0   >0  ok  >= 0 NO 
    numeroExDeMiCrush--){       //disminuir
        console.log("ES CAN DA LO!", numeroExDeMiCrush);
    
}

// <= 6   <7  6   6
//  >0    >= 1  1  1

for(let numeroExDeMiCrush = 0; 
    numeroExDeMiCrush < 8;      // !=0   >0  ok  >= 0 NO   da 7 ES CAN DA LO! 
    numeroExDeMiCrush++){       //aumentar
        console.log("ES CAN DA LO!", numeroExDeMiCrush);
    
}

for(let numeroExDeMiCrush = 0; numeroExDeMiCrush <= 7; numeroExDeMiCrush++){
        console.log("ES CAN DA LO!", numeroExDeMiCrush);
    
}


/*ARREGLOS
 1 elemento (variable const numero = 1)
 conjunto del mismo elemento( [1,2,3,4,5] )
 conjunto diferentes elementos( [1, "abc", true] )
*/

const arregloNumeros = [1,2,3,4,5];
//let--reasignar valores
//arregloNumero = [1,2,3,4,5,6]
arregloNumeros.push(6);   //funcion , añadir
console.log("arregloNumeros", arregloNumeros);
arregloNumeros.pop(); //quitamos
console.log("arregloNumeros", arregloNumeros);
//ACCEDER A CADA ELEMENTO DEL ARREGLO, POR EL INDICE

const indiceElementoUno = 0;
arregloNumeros[indiceElementoUno];  //1
arregloNumeros[0];

const indiceElementoCinco = 4;
arregloNumeros [indiceElementoCinco];  //5
arregloNumeros[4];  //5
console.log(arregloNumeros[indiceElementoCinco]);



//Arreglo
//1)Elementos
//2) indice (0 index based ) -> Posicion dentro del arreglo, siempre empieza en 0 
//3) LONGITUD   --> # elementos
console.log(arregloNumeros.length);

//Acceder al elemento 5
//1)
//[1.2.3.4.5]
// 0 1 2 3 4
//Indices
console.log(arregloNumeros[indiceElementoCinco]);
//5



//FOR
//1) let tamaño = arregloNumeros.leght//5
//2) tamaño 
//3) --


//1) crear arreglo 5 elemntos
//2)cada elemento 1 o un 0
//Ej:[0,0,1,1,0]
//3)Exista al menos un elemento "1"
//Ej:[0,0,0,0,0] no es valido
//Ej:[0,0,0,0,1] no es valido

//elije cualquier número
Math.floor(Math.random() * 2)   //[0,2[
Math.floor(Math.random() * 10)   //[0,11[


