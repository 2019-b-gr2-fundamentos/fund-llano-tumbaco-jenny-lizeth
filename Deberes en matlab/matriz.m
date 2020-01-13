
function [i,j] = matriz(X)

[i,j] = size(X);

if i >= 0 && j >= 0
    disp(size(X))
else
    disp('ERROR')
end
end




