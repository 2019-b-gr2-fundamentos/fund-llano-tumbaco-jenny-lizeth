function [x1,x2]=cambiardiagonales(X)
[i,j]=size(X);
x1 ='1';
x2='2';
if i == j
    X([1 end],1)= [X(end,end);X(1,end)];
    X([end 1],end)= [X(1,1),X(end,1)];
    
    disp(X)
else
    disp('no se puede cambiar las diagonales')
end
    
