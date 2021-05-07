/*En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.
Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.
Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.*/

const autos = require('./autos');

let concesionaria = {

    autos: autos,

    /*Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.*/

    buscarAuto: function (patente) {

        for (let i = 0; i < this.autos.length; i++) {
            if (patente == autos[i].patente) {

                return autos[i];
            }
        }
        return null
    },

/*buscarAuto:function(patente) {
      return autos.find(auto => auto.patente === patente) || null;
   }
 */


    marcarComoVendido: function (auto) {

        auto.vendido = true;

    },

    /*Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.
    ¿Cómo lo resuelven?
    Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.*/

    venderAuto: function (patente) {
        let autoEncontrado = this.buscarAuto(patente);
        if (autoEncontrado) {
            this.marcarComoVendido(autoEncontrado)
        }

    },


    /* La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos.*/

    autosParaLaVenta: function () {

        let arrayAutoDisponibles = []

        for (let i = 0; i < this.autos.length; i++) {
            if (!autos[i].vendido) {

                arrayAutoDisponibles.push(autos[i]);
            }
        }

        return arrayAutoDisponibles
    },

    /*María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos.
    ¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?.*/

    autosNuevos: function () {

        let arrayAutos = this.autosParaLaVenta()
        let autosNuevosDisponibles = []

        for (let i = 0; i < arrayAutos.length; i++) {
            if (arrayAutos[i].km < 100) {

                autosNuevosDisponibles.push(arrayAutos[i]);
            }

        }

        return autosNuevosDisponibles
    },

    /*El cliente le pidió saber cuánto dinero generaron las ventas.
    María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".
    Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.*/


    listaDeVentas: function () {

        let ventasAutosDisp = []

        for (let i = 0; i < this.autos.length; i++) {
            if (autos[i].vendido) {

                ventasAutosDisp.push(autos[i].precio);
            }
        }

        return ventasAutosDisp
    },


    /* Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas*/


    totalDeVentas: function () {

        let totalVentas = 0;
        let arrayVentas = this.listaDeVentas();
        for (let i = 0; i < arrayVentas.length; i++) {

            totalVentas += arrayVentas[i];

        }

        return totalVentas;


    },

    //Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: si el total de un auto excede lo que la persona puede pagar, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.
    //Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.
    //Una persona va a ser representada mediante un objeto literal de la siguiente forma:
    /*
    {
    nombre: “Juan”,
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }
    */

    puedeComprar: function (auto, persona) {

        let valorCuotas = (auto.precio / auto.cuotas);
        return (valorCuotas < persona.capacidadDePagoEnCuotas && persona.capacidadDePagoTotal > auto.precio)

    },


    /*
    Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.
    La función debe de realizar los siguientes pasos:

    1) Obtener los autos para la venta
    2) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.
    3) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?
    */


    autosQuePuedeComprar: function (persona) {

        let arrayAutosDisp = [];
        let autosEnVenta = this.autosParaLaVenta();

        for (let i = 0; i < autosEnVenta.length; i++) {

            if (this.puedeComprar(autosEnVenta[i], persona)) {
                arrayAutosDisp.push(autosEnVenta[i]);
            }

        }
        return arrayAutosDisp;
    }



}
