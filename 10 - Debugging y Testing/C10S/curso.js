//!Micro desafío - Paso 3
//En un archivos distinto, va a existir el objeto literal curso que tiene como atributo el nombre del curso (string) la nota de aprobación (number) faltas máximas (number) y una lista de estudiantes (un array compuesto de los alumnos creados en el paso 1).

let moduloAlumno = require('./moduloAlumno');

//!Micro desafío - Paso 7
let moduloEstudiantes = require('./estudiantes.js');



let Curso = {
    nombre: "1° 8°",
    notaAprobacion: 7,
    faltasMax: 5,
    //estudiantes: moduloAlumno.arrayAlumnos,
    estudiantes: moduloEstudiantes,
    //!Micro desafío - Paso 4
    agregarAlumno: function (estudiante) {
        this.estudiantes.push(estudiante)
    },

    //!Micro desafío - Paso 5   
    alumnoAprobado: function (estudiante) {

        if ((estudiante.promedio() >= this.notaAprobacion) && (estudiante.cantFaltas < this.faltasMax)) {

            return true;

        }

        else if (
            (estudiante.cantFaltas == this.faltasMax) && (estudiante.promedio() >= (this.notaAprobacion * 1.10))) {
            return true;
        }

        else {
            return false;
        }
    },
    //!Micro desafío - Paso 6
    funcionArrayAprobados: function () {

        let arrayAprobados = [];

        for (let i = 0; i < this.estudiantes.length; i++) {
            arrayAprobados.push(this.alumnoAprobado(this.estudiantes[i]));
        }

        return arrayAprobados;
    }
}

console.log(Curso);

let alumnoTres = new moduloAlumno.Alumno('Roxana Alcaraz', 3, [8, 6, 6, 7])

Curso.agregarAlumno(alumnoTres);

console.log(Curso);

console.log(Curso.estudiantes[2].nombre);
console.log(Curso.alumnoAprobado(alumnoTres));

console.log(Curso.estudiantes[0].nombre);
console.log(Curso.alumnoAprobado(Curso.estudiantes[0]))

console.log(Curso.funcionArrayAprobados());

