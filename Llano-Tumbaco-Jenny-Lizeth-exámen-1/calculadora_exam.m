%Llano-Tumbaco-Jenny-Lizeth-exámen-1

n = 1;

while n

    operacion = input('Ingrese el número de la operación que desea realizar: \n suma: 1 \n resta: 2 \n multiplicación: 3 \n división: 4 \n promedio: 5 \n Determinar un ángulo con el valor de los tres lados del triángulo: 6 \n Área de un triángulo escaleno: 7 \n Perímetro de un trapezoide: 8 \n Área de un círculo: 9 \n Perímetro de un círculo: 10 \n > '); % para escribir un string se pone , 's'
    
    if operacion == 1 || operacion == 2 || operacion== 3 || operacion == 4 || operacion == 5  %en el or solo se pueden utilizar valores escalares
        
        NumeroA = input('Ingrese el primer número: ');
        NumeroB = input ('Ingrese el segundo número: ');
        a = NumeroA;
        b = NumeroB;

    switch operacion
    
    case 1
        disp("El resultado de la suma es: " + (a + b)) % + para agregar texto al resultado
    
    case 2
        disp("El resultado de la resta es: " + (a - b))
        
    case 3
        disp("El resultado de la multiplicación es: " + (a * b))
        
    case 4
        disp("El resultado de la división es: " + (a / b))

    case 5
        p = a + b;
        res = p / 2;
        disp("El resultado del promedio es:" + res)
      
    otherwise                     %escribir otro tipo de operación
        disp("No existe una operación")
 
    end
    
    else
        
        if operacion == 6 || operacion == 7 || operacion == 8
            NumeroC = input('Ingrese el valor del primer lado:');
            NumeroD = input('Ingrese el valor del segundo lado:');
            NumeroE = input('Ingrese el valor del tercer lado:'); 
                     
            c = NumeroC;
            d = NumeroD;
            e = NumeroE;
            
            switch operacion 
                
                case 6    
                    
                     sum = (e*e) - (d*d) - (c*c);
                     div = sum / (2*d*c) ;
                     reA = acos(div);
                     disp("El angulo opuesto al tercer valor es: " + reA );
                
                case 7    
                     sumUno = c + d + e;
                     per = sumUno / 2 ;
                     perC = per - c;
                     perD = per - d;
                     perE = per - e;
                     mul = per * perC * perD * perE;
                     S = sqrt(mul);
                     disp("El Area de un triangulo escaleno es: " + S );
                
                case 8
                     
                    NumeroF = input('Ingrese el valor del cuarto lado: '); 
                    f = NumeroF;    
                    perimetroT = c + d + e + f;
                    
                    disp("El perímetro de un trapezoide es: " + perimetroT);  %doble comilla para sacar un resultado de palabras con operacion
                    
                otherwise 
                    disp('No es ninguna operación');
                    
            end
        else
            
            if operacion == 9 || operacion == 10
                
                radio = input('Ingresa el valor del radio: ');
                r = radio;
                
                switch operacion
                
                    case 9
                         
                         aC = 3.14159* r * r;
                         disp("El área del círculo con radio " + r + " es " + aC);
                    
                    case 10
                         
                         pC = 2 * 3.14159 * r;
                         disp("El perímetro del círculo con radio " + r + " es " + pC);
                         
                    otherwise
                        disp('No es ninguna función');
                end
            else
                disp('No representa ninguna función');
            end
        end
    end     
            
des = input('Si deseas hacer otro operación digita 1 de lo contrario digita 0: ');    %pregunta para darle un nuevo valor a n y asi poder continuar con el while
n = des;

end

disp("gracias por usar la calculadora =)");
 

