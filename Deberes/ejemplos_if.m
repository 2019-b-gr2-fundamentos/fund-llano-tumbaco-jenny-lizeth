%Nombre: Jenny Llano
%3 ejemplos con if
%si es un n�mero positivo o negativo o cero
numero = input('Ingrese un n�mero: ');

if numero > 0
    disp("El n�mero " + numero + " es positivo");
    
else if numero == 0
        disp ("El n�mero " + numero + " es cero");
        
    else if numero < 0
            disp("El n�mero " + numero + " es negativo");
            
        else
            disp("No es un n�mero");
           
        end
    end
end
    

%Quien eres??
estudiante = input('Ingrese B si es studiante de lo contrario ingrese otra letra: ','s');
labor = input('Ingrese A si es madre o padre de familia de lo contario ingrese otra letra: ','s');

if estudiante == 'B' && labor == 'A'
    disp("Eres un super h�roe sensacional");
    
else if estudiante ~= 'B' && labor == 'A'    %~= DIFERENTE DE
        disp("Excelente");
        
    else if estudiante == 'B' && labor ~= 'A'
            disp("Bueno");
            
        else if estudiante ~= 'B' && labor ~= 'A'
                disp("Regular");
                
            else
                disp("Error");
            end
        end
    end
end

            
%determinar si son vocales abiertas o cerradas
vocal = input('Ingrese una vocal: ','s');

if vocal == 'a'
    disp(vocal + " es una vocal abierta");

else if vocal ==  'e'
        disp(vocal + " es una vocal abierta");
        
    else if vocal == 'i'
            disp(vocal + " es una vocal cerrada");
            
        else if vocal == 'o'
                disp(vocal + " es una vocal abierta");
                
            else if vocal == 'u'
                    disp(vocal + " es una vocal cerrada");
                    
                else 
                    disp("No es una vocal");
                    
                end
            end
        end
    end
end

       

    
    
