// Crear las 4 funciones expresadas (dentro de variables) básicas de una calculadora:
// Suma
// Resta
// Multiplicación
// División.
// Las 4 funciones deberán recibir dos parámetros y retornar el resultado de la operación matemática correspondiente.


let num1=1;
let num2=2;

function suma (num1,num2){
    let resultado=num1+num2;
    return resultado;
}

function resta (num1,num2){
    let resultado=num1-num2;
    return resultado;
}

function multiplicacion (num1,num2){
    let resultado=num1*num2;
    return resultado;
}

function division (num1,num2){
    let resultado=num1/num2;
    return resultado;
}



console.log("----------------------------------------------------------");
console.log("La suma de "+num1+" mas "+ num2+" es igual a: "+ suma(num1,num2));
console.log("La resta de "+num1+" menos "+ num2+" es igual a: "+ resta(num1,num2));
console.log("La multiplicacion entre "+num1+" y "+ num2+" es igual a: "+ multiplicacion(num1,num2));
console.log("La division resultante de "+num1+" divido "+ num2+" es igual a: "+ division(num1,num2));
console.log("----------------------------------------------------------");