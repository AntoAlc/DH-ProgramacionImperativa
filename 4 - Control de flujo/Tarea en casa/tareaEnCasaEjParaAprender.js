let edad = 20;
let esMayor = false;

if(edad > 18){
    esMayor=true;
}
else{
    esMayor=false;
}

//nombreVariables = valorej: 20 - obtenerValor()
esMayor = edad > 18 ? true : false;
// variable=condicion ? caso positivo: caso negativo
//!        edad es mayor a 18? si esto es si= true :(sino) false

esMayor = edad > 18 ? validarEsMayor() : validarEsMenor();
//tambien se pueden usar funciones


console.log(esMayor);

function validarEsMayor(){

}
function validarEsMenor(){

}