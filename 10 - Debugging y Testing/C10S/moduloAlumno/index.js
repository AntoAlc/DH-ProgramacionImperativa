//Module 

//!paso1
//Creemos un objeto alumno que tiene como atributos, nombre(String) cantidad de faltas (number) y notas(array numeros), crearle un constructor e importar esto como el  modulo alumno}




// let alumno = {
//     nombre: "Antonella Alcaraz",
//     cantFaltas: 1,
//     notas: [8, 10, 5, 7]
// }
// console.log(alumno);

function Alumno(nombre, cantFaltas, notas) {
    this.nombre = nombre;
    this.cantFaltas = cantFaltas;
    this.notas = notas;
    this.promedio = function() {
        let suma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            suma += this.notas[i];
        }
        return suma/notas.length;
    }

    this.faltar = function(){
        this.cantFaltas++
        return this.cantFaltas
    }
}


let alumnoUno = new Alumno('Antonella Alcaraz', 1, [8, 10, 5, 7])

let alumnoDos = new Alumno('Nicolas Lucentini', 0, [10, 10, 5, 7])

let arrayAlumnos = [alumnoUno, alumnoDos];

module.exports  = {Alumno, arrayAlumnos};



//module.exports= Alumno;







// let crearAlumno = {
//     alumno(nombre, cantFaltas, notas) {
//         this.nombre = nombre,
//             this.cantFaltas = cantFaltas,
//             this.notas = notas
//     }
// }
