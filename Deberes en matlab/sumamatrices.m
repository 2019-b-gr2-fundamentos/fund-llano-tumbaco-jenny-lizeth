function [sumi,sumj]=sumamatrices(X)
[i,j] = size(X);
sumi= 'la suma de cada fila';
sumj= 'la suma de cada columna';
fprintf('la suma de cada fila es:\n');
for x = 1:i
    sumafilas= 0;
    for y = 1:j
        sumafilas= sumafilas + X(x,y);
    end
    disp(sumafilas)
end

fprintf('la suma de cada columna es:\n');
for y = 1:j
    sumacolumnas= 0;
    for x = 1:i
        sumacolumnas= sumacolumnas + X(x,y);
    end
    disp(sumacolumnas)
end
