//!PASO 1
//Creemos un objeto alumno que tiene como atributos, nombre(String) cantidad de faltas (number)
//y notas(array numeros), crearle un constructor e importar esto como el modulo alumno}

let Alumno = require('./moduloAlumno');



/*let alumnoUno = new Alumno('Antonella Alcaraz', 1, [8, 10, 5, 7])

let alumnoDos = new Alumno('Nicolas Lucentini', 0, [10, 10, 5, 7])*/
console.log(alumnoUno.nombre);
console.log(alumnoUno.cantFaltas);
console.log(alumnoUno.faltar());
console.log(alumnoUno.cantFaltas);
console.log(alumnoUno.promedio());

console.log(alumnoDos.nombre);
console.log(alumnoDos.cantFaltas);
console.log(alumnoDos.faltar());
console.log(alumnoDos.cantFaltas);
console.log(alumnoDos.promedio());

let arrayAlumnos = [alumnoUno, alumnoDos];

module.exports= {arrayAlumnos};

//!PASO 2

//Nuestro objeto alumno va a tener el método calcular promedio que retorne el promedio de sus notas, también va a tener un método que se llame faltar que simplemente incrementa la cantidad de faltas por 1.


//?EN MODULO ALUMNO ESTAN LOS METODOS


//!Micro desafío - Paso 3
//En un archivos distinto, va a existir el objeto literal curso que tiene como atributo el nombre del curso (string) la nota de aprobación (number) faltas máximas (number) y una lista de estudiantes (un array compuesto de los alumnos creados en el paso 1).

//? RESUELTO EN MODULO CURSO


//!Micro desafío - Paso 4
//	Crear el método que permite agregar alumnos a la lista del curso, es decir, cuando llamemos a nuestro método en nuestro objeto curso, debería agregarse un alumno más a la propiedad lista de estudiantes del obj curso.


//?  RESUELTO EN MODULO CURSO

//!Micro desafío - Paso 5
//	Crear un método a curso que reciba un alumno (como parámetro) y retorne true si aprobó el curso o false si no, para aprobar el alumno tiene que tener un promedio por arriba de nota de aprobación  y tener menos faltas que faltas máximas, si tiene la misma cantidad tiene que estar 10% arriba de la nota de aprobación.
//?  RESUELTO EN MODULO CURSO

//!Micro desafío - Paso 6
//	Crear un método a curso que recorra lista de estudiantes y te retorna un array de booleanos con los resultados de si los alumnos aprobaron o no.

//?  RESUELTO EN MODULO CURSO

//!Micro desafío - Paso 7
//	Importa el módulo estudiantes.js que contiene una lista de alumnos, en tu archivo que contiene al objeto curso reemplaza el contenido de la propiedad lista de estudiantes, por la lista de estudiantes del archivo estudiantes.js y proba que sigan funcionando todos los métodos correctamente. (revisar que el archivo tenga todos los métodos correctamente).

//?  RESUELTO EN MODULO CURSO y MODULO ESTUDIANTE


