%Nombre: Jenny Llano
operacion = input('Ingrese una operaci�n:', 's'); % , 's' para escribir un string
NumeroA = input('Ingrese el primer n�mero:');
NumeroB = input ('Ingrese el segundo n�mero:');
a = NumeroA;
b = NumeroB;

switch operacion
    
    case 'suma'
        disp("El resultado de la suma es:" + (a + b)) % + para agregar texto al resultado
    
    case 'resta'
        disp("El resultado de la resta es:" + (a - b))
        
    case 'multiplicaci�n'
        disp("El resultado de la multiplicaci�n es:" + (a * b))
        
    case 'divisi�n'
        disp("El resultado de la divisi�n es:" + (a / b))

    case 'promedio'
        p = a + b;
        res = p / 2;
        disp("El resultado del promedio es:" + res)
    
    otherwise                     %escribir otro tipo de operaci�n
        disp("No existe una operaci�n")
end
