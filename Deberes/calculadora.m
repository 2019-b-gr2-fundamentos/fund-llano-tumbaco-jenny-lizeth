%Nombre: Jenny Llano
operacion = input('Ingrese una operación:', 's'); % , 's' para escribir un string
NumeroA = input('Ingrese el primer número:');
NumeroB = input ('Ingrese el segundo número:');
a = NumeroA;
b = NumeroB;

switch operacion
    
    case 'suma'
        disp("El resultado de la suma es:" + (a + b)) % + para agregar texto al resultado
    
    case 'resta'
        disp("El resultado de la resta es:" + (a - b))
        
    case 'multiplicación'
        disp("El resultado de la multiplicación es:" + (a * b))
        
    case 'división'
        disp("El resultado de la división es:" + (a / b))

    case 'promedio'
        p = a + b;
        res = p / 2;
        disp("El resultado del promedio es:" + res)
    
    otherwise                     %escribir otro tipo de operación
        disp("No existe una operación")
end
