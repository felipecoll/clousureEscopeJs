/*
¿Que es el SCOPE? Se puede definir como el alcance que tienen nuestras variables dentro del documento. 
Es importante tener en cuenta que los OBJETOS y las FUNCIONES tambien son variables, por lo tanto son afectadas por el SCOPE. 
Para entender a la perfeccion como afecta el SCOPE debemos tener en cuenta el "funcionamiento de las variables" que se pueden "DECLARAR - ASIGNAR - DECLARAR y ASIGNAR - REDECLARAR - REASIGNAR"

Tenemos distintos TIPOS de Scope : Global - Function - Block.

Global Scope - Se define cuando una variable esta declarada de forma global, osea "Fuera de una funcion o un bloque".
 No es buena practica declarar de forma global ya que podemos declarar dos variables con el mismo nombre y diferente valor.

*/

/*
    primero se entenderan las variables
    - asignacion 
    - declaracion
    - re-asignacion
    - re-declaracion
*/


//variables

var a; //declarando
var b = 'b' // declarando y asignando
b = 'bb'; // reasignacion
var a = 'aa' // redeclaracion


/*Cualquier variable que se encuentre en el documento pasan a ser variables globales y 
se instancian en el objeto window, pudiendo ser utilizadas en cualquier lugar del archivo .js*/

// GLobal Scope, ejemplo:

var fruit = 'Apple'; // variable global
console.log(fruit);

function bestfruit(){
    console.log(fruit);
}

bestfruit();

//si no se declara una variable, inmediatamente esta pasa a ser GLOBAL
function country() {
    country = 'Colombia'; // Esta variable es global
    console.log(country);
}

country();
console.log(country);