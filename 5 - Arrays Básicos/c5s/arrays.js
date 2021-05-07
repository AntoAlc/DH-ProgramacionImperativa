//!parte 1:
//? Crear un archivo arrays.js que contenga el código:
console.log("-----   Parte 1   ------")

let films = [
    "star wars",
    "totoro",
    "rocky",
    "pulp fiction",
    "la vida es bella"
];
console.log(films);

//? Comprobamos que todo funciona bien si solicitamos el 2° elemento del array 
//? y en la consola dice “totoro”

console.log("El segundo elemento del array es: " + films[1]);


//! Parte 2:
//? En el mismo archivo nos piden que los nombres de las películas estén en MAYÚSCULAS 
//? usando .toUpperCase() para cada elemento. 
//? Asegurarnos que entregamos el array con todas las películas en mayúsculas.

console.log("-----   Parte 2   ------")

// const arrayToUpperCase= function(array){
//     let newArray=[];
//     newArray[0]= array[0].toUpperCase();
//     newArray[1]= array[1].toUpperCase();
//     newArray[2]= array[2].toUpperCase();
//     newArray[3]= array[3].toUpperCase();
//     newArray[4]= array[4].toUpperCase();
//     return newArray;
// }

let filmsEnMayusculas = [];

const arrayToUpperCase = function (array, index) {
    filmsEnMayusculas[index] = array[index].toUpperCase();
}

console.log(films);
arrayToUpperCase(films, 0)
arrayToUpperCase(films, 1)
arrayToUpperCase(films, 2)
arrayToUpperCase(films, 3)
arrayToUpperCase(films, 4)
console.log(filmsEnMayusculas);


// let filmsMayusc = films.join().toUpperCase(" ");
// console.log(filmsMayusc);  
//! NO ERA LO Q PEDIA, NO TENIAMOS Q UNIRLO


//! Parte 3A:
//? Mientras trabajabamos en el ejercicio 2, se descubrió que en el código 
//? también existe otro array, pero con películas animadas. 

console.log("-----   Parte 3 Y 4  ------")

let cartoons = [
    "toy story",
    "finding Nemo",
    "kung-fu panda",
    "wally", 
    "fortnite"
];

//console.log(cartoons);

//! Parte 4:
//? Uno de los desarrolladores advirtió que la última animación es en realidad un videojuego. 
//? Eliminar ese último elemento del array cartoons antes de pasarlos a films

ultimo = cartoons.pop(); //eliminamos el ultimo por ser un videojuego

//! Parte 3B:
//? En el mismo archivo pegar ese código y crear una función que agregue cada animación del array cartoons al array films. 
//? No quieren un nuevo array, deben agregarse al array films


//! COMO LO HACE EZEQUIEL ---> DE ACA-----
//Paso array de rigen e indice de elemento de origen
function pushItem (array,value){
    array[array.length]=value;
}

//otra forma: paso array de origen e indice de elemento de origen
const addMoreFilms =function(array, index){
    films[films.length]=array[index];
}

pushItem(films, cartoons[0]);
pushItem(films, cartoons[1]);
addMoreFilms(cartoons,2);
addMoreFilms(cartoons,3);
// AHHHHH EXISTE .PUSH

films.push(cartoons[4]);



//! COMO LO HACE EZEQUIEL ---> HASTA ACA-----


//films.push("toy story", "finding Nemo", "kung-fu panda", "wally");
films.push(cartoons[0]);
films.push(cartoons[1]);
films.push(cartoons[2]);
films.push(cartoons[3]);


//films.push(cartoons[4]);



console.log(films);

//! Parte 5:
//Nos piden crear una función que compare las calificaciones y nos diga si son iguales o diferentes. 
//Nos confirman que están en el orden adecuado y que solo traen valores numéricos del 1 al 10.
//? Crear una función que compare las calificaciones y nos diga si son iguales o diferentes. 
//? Nos confirman que están en el orden adecuado y que solo traen valores numéricos del 1 al 10.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];


function comparacion() {

    return
}