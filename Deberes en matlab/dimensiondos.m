
function [m,n] = dimensiondos(Y)

[m,n]=size(Y);

if m >= 0 && n >= 0
    disp(size(Y));
else
    disp('ERROR')
end
end
