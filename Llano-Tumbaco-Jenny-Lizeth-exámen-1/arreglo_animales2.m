
arregloAnimales =[];
arregloAnimales=string(arregloAnimales);
animales = input('¿Cuántos tipos de animales deseas ingresar?: ');
for n=1: animales
    tiposAnimales = input('Ingresa un tipo de animal: ', 's');
    str = string(tiposAnimales);       %cambiar el string a un numero
    arregloAnimales(n)= tiposAnimales;              %no acepta string
    k = n;
    disp(tiposAnimales + " tiene idice igual a " + k);
end

disp(arregloAnimales)
m =1;

