%Llano-Tumbaco-Jenny-Lizeth-ex�men-1

n = 1;

while n

    operacion = input('Ingrese el n�mero de la operaci�n que desea realizar: \n suma: 1 \n resta: 2 \n multiplicaci�n: 3 \n divisi�n: 4 \n promedio: 5 \n Determinar un �ngulo con el valor de los tres lados del tri�ngulo: 6 \n �rea de un tri�ngulo escaleno: 7 \n Per�metro de un trapezoide: 8 \n �rea de un c�rculo: 9 \n Per�metro de un c�rculo: 10 \n > '); % para escribir un string se pone , 's'
    
    if operacion == 1 || operacion == 2 || operacion== 3 || operacion == 4 || operacion == 5  %en el or solo se pueden utilizar valores escalares
        
        NumeroA = input('Ingrese el primer n�mero: ');
        NumeroB = input ('Ingrese el segundo n�mero: ');
        a = NumeroA;
        b = NumeroB;

    switch operacion
    
    case 1
        disp("El resultado de la suma es: " + (a + b)) % + para agregar texto al resultado
    
    case 2
        disp("El resultado de la resta es: " + (a - b))
        
    case 3
        disp("El resultado de la multiplicaci�n es: " + (a * b))
        
    case 4
        disp("El resultado de la divisi�n es: " + (a / b))

    case 5
        p = a + b;
        res = p / 2;
        disp("El resultado del promedio es:" + res)
      
    otherwise                     %escribir otro tipo de operaci�n
        disp("No existe una operaci�n")
 
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
                    
                    disp("El per�metro de un trapezoide es: " + perimetroT);  %doble comilla para sacar un resultado de palabras con operacion
                    
                otherwise 
                    disp('No es ninguna operaci�n');
                    
            end
        else
            
            if operacion == 9 || operacion == 10
                
                radio = input('Ingresa el valor del radio: ');
                r = radio;
                
                switch operacion
                
                    case 9
                         
                         aC = 3.14159* r * r;
                         disp("El �rea del c�rculo con radio " + r + " es " + aC);
                    
                    case 10
                         
                         pC = 2 * 3.14159 * r;
                         disp("El per�metro del c�rculo con radio " + r + " es " + pC);
                         
                    otherwise
                        disp('No es ninguna funci�n');
                end
            else
                disp('No representa ninguna funci�n');
            end
        end
    end     
            
des = input('Si deseas hacer otro operaci�n digita 1 de lo contrario digita 0: ');    %pregunta para darle un nuevo valor a n y asi poder continuar con el while
n = des;

end

disp("gracias por usar la calculadora =)");
 

