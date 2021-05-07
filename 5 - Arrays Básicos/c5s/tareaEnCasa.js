//ALCARAZ, ANTONELLA 
//Ejercicio N°1
console.log("Ejercicio N° 1");
//Usando sólo .pop() y .push(), crear una función que reciba un array de 4 elementos por parámetro 
//y retorne un array con los elementos invertidos en su orden: Ej [1,2,3,4] retorna [4,3,2,1]

let array1 = [1, 2, 3, 4];

function invertidos(array) {


    let arrayInvertido = []
    arrayInvertido.push(array.pop());
    arrayInvertido.push(array.pop());
    arrayInvertido.push(array.pop());
    arrayInvertido.push(array.pop());

    return arrayInvertido;

}
console.log("Array original: " + array1);
console.log("Array invertido " + invertidos(array1));

console.log("");

//Ejercicio N°":2
console.log("Ejercicio N° 2");
//Crear una función que recibe un array de 4 elementos con números enteros y devuelve uno que contenga sólo los números pares, 
//si los hubiera. Ej [1,2,3,4] retorna [2,4]


function pares(array) {
    let numsPares = [];

    if (array[0] % 2 == 0) {
        numsPares.push(array[0]);
    }
    if (array[1] % 2 == 0) {
        numsPares.push(array[1]);
    }
    if (array[2] % 2 == 0) {
        numsPares.push(array[2]);
    }
    if (array[3] % 2 == 0) {
        numsPares.push(array[3]);
    }

    // if (numsPares.length==0){
    //     return ("El array no tiene ningun numero par");
    // }
    // else{
    //   return  numsPares;
    // }

    return numsPares.length != 0 ? numsPares : "El array no tiene ningun numero par";

}

console.log(pares(a = [4, 5, 8, 9]));//4,8
console.log(pares(b = [1, 3, 5, 7])); //"El array no tiene ningun numero par"

console.log("");

//Ejercicio N°3:
console.log("Ejercicio N° 3:")

//Crear una función que recibe 2 parámetros, un texto con un tipo de dato de JS y  un array de 4 elementos; 
//retorna un booleano que indica si todos los elementos son del tipo de dato que se envió por parámetro. 
//Ej: tipoArray(“number”, [1,2,3,4]) retorna true; tipoArray(“number”, [1,2,”hola”,,4]) retorna false.


function tipoArray(text, array) {

    // if(text== typeof array[0] && text== typeof array[1]  && text== typeof array[2] && text== typeof array[3] ){
    //     return true
    // }
    // else{
    //     return false
    // }

    let mismoTipo = true;

    for (let i = 0; i < array.length; i++) {


        if (text != typeof array[i]) {
            mismoTipo = false;
        }
    }
    return mismoTipo;

    // return (text == typeof array[0] && text == typeof array[1] && text == typeof array[2] && text == typeof array[3]) ? true : false;

}

console.log(tipoArray("number", [1, 2, 3, 4])); //true
console.log(tipoArray("number", [1, 2, "hola", 4])); //false
console.log(tipoArray("boolean", [false, false, true, false])); //true
console.log(tipoArray("string", [false, false, true, false])); //false
console.log(tipoArray("string", ["Uno", "Dos", "Tres", "Cuatro"]));  //true


console.log("");

//Ejercicio N°4:
console.log("Ejercicio N°4:");
//Crear una función que recibe un array con números enteros y devuelve uno que contenga la suma acumulada de todos sus números.
//Usar la función tipoArray para validar que el array es de números, en caso que no, 
//salir de la función antes de acumular con el mensaje "Error: array corrupto"


function sumaAcumulada(array) {

    let sumaNums = 0;

    for (let i = 0; i < array.length; i++) {
        sumaNums = sumaNums + array[i];
    }

    return (tipoArray("number", array) ? sumaNums : "Array Corrupto");
}
console.log("Suma Acumulada= " + sumaAcumulada([1, 2, 3, 4])); //10
console.log("Suma Acumulada= " + sumaAcumulada([4, 9, 100, 1]));  //114
console.log("Suma Acumulada= " + sumaAcumulada([4, 9, "100", 1])); //Array Corrupto
console.log("Suma Acumulada= " + sumaAcumulada(["Hola", 7, "100", 2])); //Array Corrupto

console.log("");

//Ejercicio N°5
console.log("Ejercicio N°5")
//Así como el ejercicio 4 usa dos funciones aquí creadas, crear un ejercicio que utilice las 4 funciones aquí creadas.
//Ej función que recibe array, acumula sólo aquellos elementos pares y los invierte solo si son números enteros. 
//Otro ejemplo puede ser el uso de letras y palabras para combinarlas en frase irracionales.


function invertirParesYSumarlos(array) {
    console.log("Al array [ "+array+" ] , se lo invierte, si son del mismo tipo, deja los pares y luego suma los mismos ");

    if (!tipoArray("number", array)) {
        return ("Array corrupto Invertido: [ " + invertidos(array) + " ]")
    }

    let aux = sumaAcumulada(pares(invertidos(array)));

    return aux
}

console.log(invertirParesYSumarlos([4, 6, 7, 2]))
console.log("")
console.log(invertirParesYSumarlos([4, 6, "Hol45a", 2]))
console.log("")
console.log(invertirParesYSumarlos(["1", 7, "Hol45a", 3]))
