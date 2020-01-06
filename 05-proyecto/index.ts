//NODE MODULES
//const sumaLibreria = require('libreria-jll/lib/suma');    --- > require para js


//importar todo el contenido con el nombre 'sumaLibreria'
//del paquete 'libreria-jll/lib/suma'
import * as sumaLibreria from 'libreria-jll/lib/suma';  // import para ts
const respuesta = sumaLibreria(1,2);
console.log('La respuesta es:',respuesta);