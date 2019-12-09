/*pseudocodigo del splice
1. hacer un arreglo
2. decidir si se desea añadir o remplazar un elemento del arreglo
3. escojer una posicion del arreglo en la que se desea añadir o remplazar el elemento
4. escribir si se desea remplazar o añadir el elemento de esa posicion
5. escribir el elemento que se desea remplazar o añadir
6. imprimir el arreglo
*/
//crear arreglo
var arregloNumeros = [1, 2, 3, 4, 5];
var n = arregloNumeros.length;
console.log(arregloNumeros);
//desición
var desicion = Number(prompt("desea añadir o eliminar un elemento"));
if (desicion == 1) {
    var numeroAAñadir = Number(prompt("ingresa el numero"));
    var posicionNumero = Number(prompt("posicion a añadir"));
    arregloNumeros.push(numeroAAñadir); //añadir un elemento
    var nuevoElemento = arregloNumeros[n];
    arregloNumeros[n] = arregloNumeros[n - 1];
    arregloNumeros[n - 1] = arregloNumeros[n - 2];
    arregloNumeros[n - 2] = arregloNumeros[n - 3];
    arregloNumeros[n - 3] = arregloNumeros[n - 4];
    arregloNumeros[posicionNumero] = nuevoElemento;
    console.log(arregloNumeros);
}
else {
    if (desicion == 0) {
        var posicionNumero = Number(prompt("posicion del elemento a eliminar"));
        
        
        
        arregloNumeros[n - 4] = arregloNumeros[n - 3];
        arregloNumeros[n - 3] = arregloNumeros[n - 2];
        arregloNumeros[n - 2] = arregloNumeros[n - 1];
        arregloNumeros[n - 1] = arregloNumeros[n];
        arregloNumeros[n] = arregloNumeros[posicionNumero];
        arregloNumeros.pop();
        console.log(arregloNumeros);
    }
    else {
        console.log("error");
    }
}
