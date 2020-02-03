var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function main() {
    var uno = 1;
    var dos = uno; //valor
    var tres = dos; //valor
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
    var arreglito = [1, 2, 3];
    var miOtroArreglito = [];
    var a = arreglito[0];
    var b = arreglito[1];
    console.log('arreglito', arreglito);
    console.log('a', a);
    console.log('b', b);
    miOtroArreglito = arreglito; //ref -->
    miOtroArreglito.push(2);
    arreglito[0] = 2;
    arreglito[1] = 11;
    console.log('arreglito', arreglito);
    console.log('miOtro arreglito', miOtroArreglito);
    console.log('a', a);
    console.log('b', b);
    //PARA COPIAR ARREGLOS--CLONAR
    miOtroArreglito = __spreadArrays(arreglito);
    var adrian = {
        id: 1,
        nombre: 'Adrian',
        sueldo: (1.12)
    };
    var soloElNombre = __assign({}, adrian);
    var copiaUno = __assign({}, adrian);
    var copiaDos = __assign({}, soloElNombre);
    var copiaTres = __assign({}, adrian);
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre);
    delete adrian.nombre; // ELIMINAR EL NOMBRE DEL OBBJETVO
    soloElNombre['edad'] = 22;
    //soloElNombre.edad = 22
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre);
    console.log('copiaUno', copiaUno);
    console.log('copiaDos', copiaDos);
    console.log('copiaTres', copiaTres);
}
main();
//refeerencias -> direccion de memoria, valor
// PARA ASIGNAR O REASIGNAR ---SE ASIGNA A LA DIRECCION DE MEMORIA
//en c++ el programador escoje si va hacer referencia al valor o a la direccion
//en java el valor hace referencia a la direccion
