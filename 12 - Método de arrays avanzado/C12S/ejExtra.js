// 1.  Crear una función que reciba un array compuesto por números, 
//y retorne un nuevo array con todos los valores divididos por la suma de todos los del array —usar map() y reduce()—.

let numeros = [1,2,3,4,5];

function divisionDeLaSumaTotal (array) {
    let sumarTodos = array.reduce(function (acum, num) {
        return acum + num;
    });

    let division = array.map(function (num) {
        return num / sumarTodos;
    })

    return division;

}

console.log(divisionDeLaSumaTotal(numeros));


//2.Crear una función que reciba un array de palabras y un número, y que retorne un array con solo las palabras que tengan más que esa cantidad de letras —revisá cómo funciona el método filter()—



// Crear un array de objetos literales, cada objeto va a ser de alumnos, y va a tener dos atributos: nombre y nota. Crear dos funciones que ordenen el array: una va a ordenar a los alumnos alfabéticamente y la otra lo hará por nota de mayor a menor —investigá qué método sería el adecuado para este caso, te recomendamos ver la documentacion de MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array—


//!EJERCIICIO INTEGRADOR


//Ejercicio integrador
//Tenemos que hacerle el sistema a una verdulería, en este establecimiento los productos tienen nombre, precio y cantidad vendida. El verdulero tiene un array de objetos literales con esta información, al sistema hay que agregarle una a función (o varias) que realice los siguientes pasos:
//1. Calcular la ganancia total de todos los productos.
//2. Permitir buscar un producto por nombre y calcular su ganancia total.
//3. Permitir recibir un valor y que te indique todos los productos que vendieron más que ese valor.
//4. Ordenar todos los productos por la cantidad de dinero que generaron.
//5. Encontrar un producto y asignarle un nuevo valor —reutilizar el código que te permite encontrar producto por nombre—.
//6. Calcular la ganancia total luego de pagar 45% de las ganancias en impuestos



function filtrarPorCantidad(array) {
    let numero = array.find(i => typeof i == "number")

    let arrayFinal = array.filter(function (i) { return i.length > numero });
    return arrayFinal;
}