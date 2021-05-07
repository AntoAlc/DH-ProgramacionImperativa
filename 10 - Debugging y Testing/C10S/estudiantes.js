//!Micro desafío - Paso 7
//	Importa el módulo estudiantes.js que contiene una lista de alumnos, en tu archivo que contiene al objeto curso reemplaza el contenido de la propiedad lista de estudiantes, por la lista de estudiantes del archivo estudiantes.js y proba que sigan funcionando todos los métodos correctamente. (revisar que el archivo tenga todos los métodos correctamente).

let moduloAlumno = require('./moduloAlumno');


let estudiantesArray =[
 alumno1 = new moduloAlumno.Alumno('Antonella ', 1, [4, 5, 4, 7]),

 alumno2 = new moduloAlumno.Alumno('Nicolas ', 0, [10, 10, 4, 7]),

 alumno3 = new moduloAlumno.Alumno('Antonella 1', 2, [0, 1, 5, 7]),

 alumno4 = new moduloAlumno.Alumno('Nicolas 1', 3, [10, 1, 5, 7]),

 alumno5 = new moduloAlumno.Alumno('Antonella 2', 4, [8, 6, 5, 7]),

 alumno6 = new moduloAlumno.Alumno('Nicolas 2', 5, [10, 6, 5, 2])
]

module.exports = estudiantesArray;