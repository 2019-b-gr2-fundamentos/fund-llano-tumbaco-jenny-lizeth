
%crear los registros de un arreglo

arregloAnimales = [];
arregloAnimales=string(arregloAnimales);
animales = input('¿Cuántos tipos de animales deseas ingresar?: ');

for n=1: animales
    tiposAnimales = input('Ingresa un tipo de animal: ', 's');
    str = string(tiposAnimales);       %cambiar el string a un numero
    arregloAnimales(n) = tiposAnimales;              %no acepta string
   
    k = n;
    disp(tiposAnimales + " tiene idice igual a " + k);
end
disp(arregloAnimales)

m =1;

while m == 1
    
des = input('¿Qué deseas realizar ahora: \n 1. Crear otro \n 2. Actualizar\n 3. Eliminar \n 4. Salir? \n >');

if des == 1
    
    otro = input('Ingrese un tipo de animal: ', 's');
    str2 = string(otro);
    arregloAnimales(animales + 1) = otro;
 
    disp(otro + " tiene idice igual a " + l);
   
  disp(arregloAnimales);  %revisale
else
    if des == 2
       actualizar = input('Ingrese el índice del tipo de animal que se desea actualizar: ');
       actualizacion = input('Escribe la actualización: ','s');
       str3 = string(actualizacion);
       arregloAnimales(actualizar)= actualizacion;
       
       disp(arregloAnimales);
    else
        if des == 3
           i = input('Ingrese el índice del tipo de animal que se desea eliminar: ');
           arregloAnimales(i) = [];
           disp(arregloAnimales);
        else
            if des == 4
                m =4;
                disp('Gracias =)');
            else
                disp('ERROR');
            end
        end
    end
end
    
end 

