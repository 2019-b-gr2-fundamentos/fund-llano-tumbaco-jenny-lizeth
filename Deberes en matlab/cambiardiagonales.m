function [x1,x2]=cambiardiagonales(X)
[i,j]=size(X);
x1 ='1';
x2='2';
if i == j
   B = rot90(X);
   diagoprin = diag(X);
   diagosec = diag(B);
   
   X(1,1)=diagosec(1,1);
   X(i,1)=diagoprin(i,1);
   
   X(1,i)=diagoprin(1,1);
   X(i,i)=diagosec(i,1);
   
   disp(X)
else
    disp('no se puede cambiar las diagonales')
end
    
