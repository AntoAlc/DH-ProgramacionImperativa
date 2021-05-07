console.log("Examen Final Programación Imperativa - ALCARAZ, Antonella");

//! 1. Obtener el listado de posibles participantes
/*Tomando como base el siguiente archivo JSON, deberán leer el archivo y parsearlo para obtener el listado de autos que desean participar de la carrera.Resultado esperado: variable conteniendo un array con todos los autos disponibles */

const fs = require('fs');
let txtAutos = fs.readFileSync(__dirname + '/AUTOS.json', 'UTF-8');
let autosJSON = JSON.parse(txtAutos);

//console.log(autosJSON);

//! 2. Crear un objeto literal que represente la carrera
//Este objeto contendrá, una propiedad con el listado de autos y las funcionalidades que nos solicitan a continuación:

let carrera = {
    //! A.Agregar una propiedad llamada autos que contenga los autos obtenidos en el punto anterior

    autos: autosJSON,


    //! B.Agregar una propiedad llamada autosPorTanda que contenga el valor 5. Este valor representará la cantidad máxima de autos por tanda.

    autosPorTanda: 5,

    //! C. Agregar un método autosHabilitados, que permita consultar los autos habilitados, es decir, que devuelva una lista de los autos que no estén sancionados. Resultado esperado: un array con los autos habilitados para correr.


    autosHabilitados: function () {
        return this.autos.filter(autos => autos.sancionado === false);
    },

    //! D. Agregar un método listarAutos que reciba como parámetro un array de autos y los imprima por consola.
    /*Este método deberá imprimir por cada elemento:
    La placa o patente.
    El piloto
     El peso del auto
    “sancionado” → En caso de ser true la propiedad sancionado 
    “puede correr” → Caso contrario*/

    /*Resultado esperado: un mensaje por consola por cada auto con el siguiente formato: “Patente: XXXXXX, peso en kg: XXX, estado: sancionado / puede correr”.
    Ej 1: “Patente: ABC123, peso en Kg: 267, estado: puede correr”
    Ej 2: “Patente: EFG567, peso en Kg: 357, estado: sancionado” */

    listarAutos: function (autos) {

        autos.forEach(auto => console.log("El auto con PATENTE: " + auto.patente + ", es conducido por el piloto: " + auto.piloto + ", tiene un peso de: " + auto.peso + "kg, y estado: " + (auto.sancionado ? "sancionado" : "puede correr")));

    },

    //! E. Agregar un método buscarPorPatente que permita buscar el auto en función de su patente.
    /*Este método debe devolver un auto en caso de encontrar la patente en el array de la propiedad autos.
    Resultado esperado: el auto que coincida con la patente ingresada como parámetro.*/


    buscarPorPatente: function (patente) {

        return this.autos.find(autos => autos.patente == patente);

    },

    //! F. Agregar un método buscarPorCilindrada que permite filtrar los autos habilitados, siempre y cuando su propiedad cilindrada sea menor o igual a la cilindrada enviada como argumento.
    /*Este método debe usar autosHabilitados.
    Resultado esperado: un array con los autos que cumplan las condiciones mencionadas.*/

    buscarPorCilindrada: function (cilindrada) {
        let habilitados = this.autosHabilitados();

        return habilitados.filter(autos => autos.cilindrada <= cilindrada);

    },

    //! G. Agregar un método que permita ordenar por velocidad de menor a mayor según el puntaje de cada auto  y devolver un array ordenado.
    /*Resultado esperado: un array de autos ordenada por velocidad de menor a mayor.*/

    ordenarPorVelocidad: function () {
        return this.autos.sort((a, b) => a.velocidad - b.velocidad);
    },


    //! H. Agregar un método generarTanda que permita retornar un array de autos, que cumpla con las siguientes condiciones:
    /* -únicamente autos habilitados
    -cilindradas del auto menor o igual a un valor enviado como argumento.
    -peso  del auto menor o igual a un valor enviado como argumento*/
    /*Resultado esperado: un array con los autos que cumplan las condiciones especificadas y tenga como máximo la cantidad de autos expresada en la propiedad autosPorTanda del objeto carrera.*/

    generarTanda: function (cilindradas, peso) {
        habilitados = this.autosHabilitados();
        let arrayAutos = habilitados.filter(autos => autos.cilindrada <= cilindradas && autos.peso <= peso);
        return arrayAutos.slice(0, this.autosPorTanda);
    },


    //! I. Agregar un método que permita calcularPodio, el mismo deberá calcular al ganador y los siguientes dos puestos en función de su puntaje.
    /*El podio debe surgir a partir de la tanda generada.
    Los primeros tres autos con mayor puntaje conformarán el podio*/
    /*Resultado esperado: imprimir por consola el piloto y el puntaje del podio diferenciando primer, segundo y tercer puesto.
    Ej:
    “El ganador es: Leandro Ezequiel, con un puntaje de: 70;
    el segundo puesto es para: Martin Cejas, con un puntaje de: 55
    y el tercer puesto es para: Nicolas Lopez, con un puntaje de: 52”*/

    calcularPodio: function (tanda) {
        podio = (tanda.sort((a, b) => b.puntaje - a.puntaje)).slice(0, 3);
        console.log("-----PODIO----");
        console.log("El ganador es: " + podio[0].piloto + ", con un puntaje de: " + podio[0].puntaje);
        console.log("El segundo puesto es para: " + podio[1].piloto + ", con un puntaje de: " + podio[1].puntaje);
        console.log("El tercer puesto es para: " + podio[2].piloto + ", con un puntaje de: " + podio[2].puntaje);
    }
}
console.log('--------------- A) AUTOS EN LA CARRERA: ----------------\n');
console.log(carrera.autos);
console.log();

console.log('\n--------------- B) AUTOS POR TANDA: ----------------\n');
console.log(carrera.autosPorTanda);
console.log();

console.log('\n--------------- C) AUTOS HABILITADOS: ----------------\n');
console.log(carrera.autosHabilitados());
console.log();

console.log('\n--------------- D) LISTADO DE AUTOS: ----------------\n');
carrera.listarAutos(carrera.autos);
console.log();


console.log('\n--------------- E) BUCAR POR PATENTE: ----------------\n');
console.log(carrera.buscarPorPatente('CJK912'));
console.log();


console.log('\n--------------- F) BUSCAR POR CILINDRADA: ----------------\n');
console.log(carrera.buscarPorCilindrada(2000));
console.log();


console.log('\n--------------- G) ORDENAR POR VELOCIDAD: ----------------\n');
console.log(carrera.ordenarPorVelocidad());
console.log();


console.log('\n--------------- H) GENERAR TANDAS: ----------------\n');
console.log(carrera.generarTanda(3000, 1000));
console.log();

console.log('\n--------------- I) GENERAR PODIO A PARTIR DE TANDA: ----------------\n');
let tanda1 = (carrera.generarTanda(3000, 1000));
carrera.calcularPodio(tanda1);
console.log();
