
function main(){
    let uno = 1;
    let dos = uno;    //valor
    let tres = dos;   //valor
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);

    // ASIGNAR A MI OTRO OTRO ARREGLITO UNA NUEVA DIRECCION DE MEMORIA--CLONAR
    // 1-> FOR LLENAMOS UN NUEVO ARREGLO
    //2-> filter -> suempre true -> Nuevo arreglo
    //3. -> Map -> Nuevo arreglo

    //inmutabilidad
    //is --> arreglo

    //clon del arreglo --> clon trabajo
    let arreglito = [1,2,3];
    let miOtroArreglito= [];
    let a = arreglito[0];
    let b = arreglito[1];
    console.log('arreglito', arreglito);
    console.log('a', a);
    console.log('b', b);
    miOtroArreglito = arreglito;                                          //ref -->
    miOtroArreglito.push(2);
    arreglito[0] = 9;
    arreglito[1] = 10;
    console.log('arreglito', arreglito);
    console.log('miOtro arreglito', miOtroArreglito);
    console.log('a', a);
    console.log('b', b);

    //PARA COPIAR ARREGLOS--CLONAR
    miOtroArreglito = [
        ...arreglito,
        //PUEDEN AGREGAR MAS ARREGLOS
    ];




    let adrian ={
        id:1,
        nombre: 'Adrian',
        sueldo: (1.12)
    };
    const soloElNombre={
        ...adrian
    };
    const copiaUno ={
        ...adrian
    };
    const copiaDos ={
        ...soloElNombre
    } ;
    const copiaTres ={
        ...adrian
    };
    console.log('adrian', adrian);
    console.log('soloElNombre',soloElNombre);
    delete adrian.nombre; // ELIMINAR EL NOMBRE DEL OBBJETVO
    soloElNombre['edad']=22;
    //soloElNombre.edad = 22
    console.log('adrian',adrian);
    console.log('soloElNombre', soloElNombre);
    console.log('copiaUno', copiaUno);
    console.log('copiaDos',copiaDos);
    console.log('copiaTres',copiaTres);
}
main();

//refeerencias -> direccion de memoria, valor
// PARA ASIGNAR O REASIGNAR ---SE ASIGNA A LA DIRECCION DE MEMORIA
//en c++ el programador escoje si va hacer referencia al valor o a la direccion
//en java el valor hace referencia a la direccion