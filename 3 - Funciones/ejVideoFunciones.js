function elDoble(unNumero){
    return unNumero*2;
}

elDoble(6)


//Funcino expresada

let sumar = function(numeroA, numeroB){
    return numeroA+numeroB;
}

console.log(sumar(7,9));

//Funcion declarada

function restar(numeroC, numeroD){
    return numeroC-numeroD;
}

console.log(restar(8,1));

//SCOPE LOCAL: existen variables declaradas exclusivamente dentro
// de una funcion. Fuera de la funcion la variable es inexistente

function hola(){
    //variable local
    let saludo="Hola, que tal?"
    return saludo;
}
console.log(hola()); //Hola, que tal?
//console.log(saludo); //Undefinied Variable

//SCOPE GLOBAL: Las variables se declaran fuera de cualquier funcion
//teniendo asi un alcance a ellas en cualqiuer lugar del codigo, incluso
//dentro de funciones.

let elMejorLenguaje= "Javascrpits es lo mas";
function estoyAprendiendo(){
    return elMejorLenguaje;
}

console.log(estoyAprendiendo()); //Javascrpits es lo mas
// -------------------------

let mensaje ="Hola";
function saludar(){
    return mensaje;
}
console.log("Mensaje 1: " +saludar());

function saludar(){
    let mensaje="Chau";
    return mensaje;
}
console.log(mensaje);
console.log(saludar());
