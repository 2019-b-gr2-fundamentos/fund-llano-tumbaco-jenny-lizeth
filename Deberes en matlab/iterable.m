deberes = 0;
ingles = 0;
fisica = 0;
calculo = 0;
programacion = 0;
compiladores = 0;
algebralineal = 0;
analisissocioeconomico = 0;
disp ("Cuantos deberes tengo =( ");

do {
deberes ++
if deberes / 13 == 0
    ingles ++
else if deberes / 11 == 0
        fisica ++
    else if deberes / 7 == 0
            calculo ++
        else if deberes / 5 == 0
                programacion ++
            else if deberes / 3 == 0
                    compiladores ++
                else if deberes / 2 == 0
                        algebralineal ++
                    else if deberes / 2 == 1
                            analisissocioeconomico ++
                        else 
                            disp ("No tienes deberes");
}while(deberes < 1000);
disp("Los " + deberes + " deberes ingresados se dividen de la siguiente manera");
disp("Análisis Socioeconómico: " + analisissocioeconomico);
disp("Álgebra Lineal: " + alebralineal);
disp("Compiladores: " + compiladores);
disp("Programación: " + programacion);
disp("Cálculo: " + calculo);
disp("Física" + fisica);
disp("Ingles" + ingles);
