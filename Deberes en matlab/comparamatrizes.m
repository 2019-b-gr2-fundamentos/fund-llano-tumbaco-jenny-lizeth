function R = comparamatrizes(X,Y)
if nargin < 2                    %%si hay no hay dos datos nargin envia error
    error('Faltan datos')
end

[i,j]= size(X);
[m,n] = size(Y);

if i == m && j == n
    for k = 1:i
        for l = 1:j
            
        x = X(k,l);
        y = Y(k,l);
        end
        
        if x == y
            disp ('true');
            
                
            
        else
            disp('false');
          
        end
    end
else 
    disp ('no son de dimensiones iguales')

end

if x == y 
    R='true';
else
    R='false';
end
