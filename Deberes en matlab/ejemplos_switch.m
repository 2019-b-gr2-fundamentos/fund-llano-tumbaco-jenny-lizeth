%Nombre: Jenny Llano
%3 ejemplos con switch
%determinar cuantos días tiene un mes en el año 2020
mes = input('Ingrese un mes del año:','s');  %'s' es un string 
A = " tiene 31 días en el año 2020";
B = " tiene 30 días en el año 2020";

switch mes
    
    case "enero"
        disp (mes + A);
    
    case "febrero"
        disp (mes + " tiene 29 días en el año 2020");
        
    case "marzo"
        disp (mes + A);
        
    case "abril"
        disp (mes + B);
        
    case "mayo"
        disp (mes + A);
        
    case "junio"
        disp (mes + B);
        
    case "julio"
        disp (mes + A);
        
    case "agosto"
        disp (mes + A);
        
    case "septiembre"
        disp (mes + B);
        
    case "octubre"
        disp (mes + A);
        
    case "noviembre"  
        disp (mes + B);
        
    case "diciembre"
        disp (mes + A);
    
    otherwise
        disp ("No es un mes");
end


% determinar una característica delos triángulos
triangulo = input('Ingrese el nombre de un triángulo: ','s');

switch triangulo
    
    case "equilatero"
        disp(triangulo + " es un triángulo con 3 lados iguales");
        
    case "isósceles"
        disp(triangulo + " es un triángulo con 2 lados iguales.");
        
    case "escaleno"
        disp(triangulo + " es un triángulo con 0 lados iguales.");
        
    case "obtusángulo"
        disp(triangulo + " es un triángulo con un ángulo mayor a 90°.");
        
    case "acutángulo"
        disp(triangulo + " es un triángulo que tiene todos sus ángulos menores de 90°.");
        
    case "rectángulo"
        disp(triangulo + " es un triángulo con un ángulo de 90°.")
        
    otherwise
        disp(" No es un triángulo.");
end


%posición de los planetas en el sistema solar
planeta = input('Ingrese el nombre de un planeta: ','s');

switch planeta
    
    case "mercurio"
        disp("Mercurio es el primer planeta en el sistema solar")
        
    case "venus"
        disp("Venus es el segundo planeta en el sistema solar.")
        
    case "tierra"
        disp("Tierra es el tercer plaenta en el sistema solar.")
        
    case "marte"
        disp("Marte es el cuarto planeta en el sistema solar.")
        
    case "júpiter"
        disp("Júpiter el el quinto planeta en el sistema solar.")
        
    case "saturno"
        disp("Saturno es el sexto planeta en el sistema solar.")
        
    case "urano"
        disp("Urano es el septimo planeta en el sistema solar.")
        
    case "neptuno"
        disp("Neptuno es el octavo planeta en el sistema solar.")
        
    otherwise
        disp("No es un planeta")

end

