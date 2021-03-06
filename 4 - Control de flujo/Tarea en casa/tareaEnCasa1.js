console.log("")
console.log("Ejercicio N°1: ")
//1. reciba un valor y nos retorne si ese valor es par o impar.
let num1 = 26
esPar(num1) ? console.log(num1 + " es un numero par") : console.log(num1 + " es un numero impar");
function esPar(n) {
    return n % 2 == 0 ? true : false;
}

console.log("")
console.log("Ejercicio N°2: ")
//2. levante una barrera si el vehículo pagó el peaje. 
let costoPeaje = 26;
let pago = 15;
abrirBarrera(pago) ? console.log(" Pago aceptado, abrir barrera") : console.log("Monto insuficiente, faltan $" + (costoPeaje - pago) + ", no abrir barrera");
function abrirBarrera(monto) {
    return monto >= costoPeaje ? true : false;
}
//opcion 2:
console.log("Abrir Barrera: " + abrirBarrera(15));
console.log("Abrir Barrera: " + abrirBarrera(30));

console.log("")
console.log("Ejercicio N°3: ")
//3. reciba un número y retorne si es el mismo que eligió al azar la función Math.random() entre 0 y 10
//let num3 = 7;
//validarNumeros(num3)

function validarNumeros(n3) {
    let numRandom = numeroRandom(11);
    return numRandom == n3 ? console.log("Felicitaciones! Ambos eligieron el mismo numero(" + numRandom + ")") : console.log("Más suerte la proxima! Era el: " + numRandom);
    ;
}
//utilidad
function numeroRandom(max) {
    return Math.floor(Math.random() * max);
}
validarNumeros(7);
validarNumeros(3);
validarNumeros(10);

console.log("")
console.log("Ejercicio N°4: ")
//4. al recibir una fecha indique si la misma es navidad o no.

//let fechaUsuario = "25/10";
//esNavidad(fechaUsuario) ? console.log("Es navidad") : console.log("No es navidad");
function esNavidad(fecha) {
    return fecha == "25/12" ? true : false;
}
console.log("Es navidad: " + esNavidad("25/12"));
console.log("Es navidad: " + esNavidad("23/06"));

console.log("")
console.log("Ejercicio N°5: ")
//5. al recibir un mes, con un switch, nos indique cuántos días tiene ese mes.
//let mes = "junio"
function obtenerDiasDelMes(mes) {
    switch (mes) {
        case "enero":
        case "marzo":
        case "mayo":
        case "julio":
        case "agosto":
        case "octubre":
        case "diciembre":
            console.log("El mes " + mes + " tiene 31 días");
            break;
        case "febrero":
            console.log("El mes " + mes + " tiene 28 días");
            break;
        case "abril":
        case "junio":
        case "septiembre":
        case "noviembre":
            console.log("El mes " + mes + " tiene 30 días");
            break;
        default:
            console.log("El mes " + mes + " no existe");
    }
}
obtenerDiasDelMes("junio");
obtenerDiasDelMes("febrero");
obtenerDiasDelMes("diciembre");

console.log("")
console.log("Ejercicio N°6: ")
//6. reciba un valor por parámetro e indique que el alumno recursa si tiene una nota menor a 4, 
//va a recuperatorio si tiene una nota menor a 7 
//y aprueba en el caso de que la nota sea igual o superior a 7.


//let nota=6;
function condicionAlumno(calificacion) {
    if (calificacion < 4) {
        return "Recursa";
    }
    else if (calificacion < 7) {
        return "Va a recuperatorio";
    }
    else if (calificacion <= 10) {
        return "Aprueba";
    }
    else
        return "No es una nota válida";
}
console.log("Condicion del alumno: " + condicionAlumno(2));
console.log("Condicion del alumno: " + condicionAlumno(6));
console.log("Condicion del alumno: " + condicionAlumno(7));
console.log("Condicion del alumno: " + condicionAlumno(20));



console.log("")
console.log("Ejercicio N°7: ")
// 7. que retorne si una nave espacial que está entrando a la atmósfera ya puede abrir su paracaídas. 
//La altura debe ser entre 2000 m. y 3000 m., y la velocidad debe ser menor a 1000 km/h.
let a = 2150;
let v = 1000;
const alturaMax = 3000;
const alturaMin = 2000;
const velMax = 1000;
function paracaidas(altura, velocidad) {
    return ((altura >= alturaMin && altura <= alturaMax) && (velocidad < velMax)) ? true : false;
}

paracaidas(a, v) ? console.log("Puede abrir del paracaidas") : console.log(`No puede abrir el paracaidas. Requisitos: Altura minima: ${alturaMin} m, Altura maxima: ${alturaMax}m, Velocidad Maxima: ${velMax} km/h`);

//opcion 2:
console.log("Abrir Paracaidas: " + paracaidas(2150, 1500)); //false
console.log("Abrir Paracaidas: " + paracaidas(2150, 700)); //true
console.log("Abrir Paracaidas: " + paracaidas(1500, 1500)); //false
console.log("Abrir Paracaidas: " + paracaidas(1500, 700)); //false

console.log("")
console.log("Ejercicio N°8: ")
//8. recibe 3 parámetros booleanos que indican ingredientes de un sandwich y determina su valor final. 
//El valor base es de $150, con tomate $20+, con papas $50+, con huevo $60+.

function valorFinal(tomate, papa, huevo) {
    let precioBase = 150;
    let t = tomate == true ? 20 : 0;
    let p = papa == true ? 50 : 0;
    let h = huevo == true ? 60 : 0;
    console.log(`Pagas por: precio del sandwich $ ${precioBase} + tomate $ ${t} + papas $ ${p} + huevo $ ${h} `);
    return precioBase + t + p + h;
}

//opcion B: ezequiel

// function valorFinal(tomate, papa, huevo) {
//     let base = 150;
//     base+= tomate ? 20 : 0;
//     base+= papa ? 50 : 0;
//     base+= huevo ? 60 : 0;
//     return base
// }



console.log("Valor del sanguchote = " + valorFinal(true, true, true));//150 +(20+50+60)=280
console.log("Valor del sandwich = " + valorFinal(true, true, false));//150 +(20+50+0)=220
console.log("Valor del sandwich = " + valorFinal(true, false, true)); //150 +(20+0+60)=230 
console.log("Valor del sandwich = " + valorFinal(false, true, true));//150 +(0+50+60)=260

console.log("Valor del sandwich = " + valorFinal(false, true, false));//150 +(0+50+0)=200

console.log("Valor del sandwich = " + valorFinal(true, false, false));//150 +(20+0+0)=170
console.log("Valor del sandwich = " + valorFinal(false, false, true));//150 +(0+0+60)=210

console.log("Valor del sanguchito = " + valorFinal(false, false, false));//150 +(0+0+0)=150




console.log("")
console.log("Ejercicio Switch: ")
// Consigna switch: Tomando esto de ejemplo, crear una función que reciba por parámetro un mes y 
//devuelva a qué estación climática pertenece (verano, invierno, otoño o primavera).

function obtenerEstacion(mes) {
    switch (mes) {
        case "enero":
        case "febrero":
        case "marzo":
            return "verano";
            break;
        case "abril":
        case "mayo":
        case "junio":
            return "otoño";
            break;

        case "julio":
        case "agosto":
        case "septiembre":
            return "invierno";
            break;

        case "octubre":
        case "noviembre":
        case "diciembre":
            return "primavera";
            break;

        default:
            console.log("El mes " + mes + " no existe");
    }
}

function imprimirEstacion(mes) {
    console.log("El mes " + mes + " pertenece a la estación " + obtenerEstacion(mes));
}
imprimirEstacion("junio");
imprimirEstacion("febrero");
imprimirEstacion("diciembre");

console.log("")