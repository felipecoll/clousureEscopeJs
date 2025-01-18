// Block Scope

function fruits(){ // Las variables definidas dentro de un bloque pertenencen a ese bloque
    //Todo dentro de llaves es un bloque
    if(true) {
        var fruit1 = 'apple' //Function scope
        let fruit2 = 'Banana' //Block scope
        const fruit3 = 'Kiwi' //Block scope
        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit1)
}

fruits()

/*

Aquí una aclaración grafica de c/u de los diferentes scopes

Las variables var1 y let1 pueden ser usadas en cualquier lugar del código

Las variables var2 y let2 pueden ser usadas y llamadas SOLO dentro de la función

Las variables var3 y let3 pueden ser usadas y llamadas SOLO en el bloque if

*/