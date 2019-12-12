const arregloNumeros = [1,2,3,4,5,6,7,8,9,10];

//Acceder
//necesito el indice
console.log(arregloNumeros[6]) // accede al elemento 7 que esta en la posicion 6 

//añadir al final
//necesito: elemento a añadirse
arregloNumeros.push(11);

//borrar al final
arregloNumeros.pop();

//añadir en cualquier posicion
//necesito: indice
//necesito: elemento
arregloNumeros.splice(1,0,1.1);  //posicion,elemento a borrar, elemento a añadir
console.log(arregloNumeros);

//borrar en cualquier posicion
arregloNumeros.splice(7,1);
console.log(arregloNumeros);

//buscar el indice de un elemento
arregloNumeros.indexOf(5);
arregloNumeros.indexOf(7);  //imprime -1
arregloNumeros.indexOf(9);

arregloNumeros[0]=999;  




/*pseudocodigo de splice
1. hacer un arreglo 
2. escojer una posicion del arreglo en la que se desea añadir el elemento
2. escribir si se desea remplazar el elemento de esa posicion
3. escribir el elemento que se desea añadir
4. imprimir el arreglo 
*/