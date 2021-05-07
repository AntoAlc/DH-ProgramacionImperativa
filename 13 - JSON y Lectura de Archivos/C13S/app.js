//?INFO:
/*shift + alt + a:
comenta todo lo seleccionado

ctrl + k + c:
comenta la linea
 */


//!EJERCICIO N°2    
/* */
const fs = require('fs');
//let txtClases = fs.readFileSync('clases.json', { encoding: 'UTF-8' });
let txtClases = fs.readFileSync('clases.json', 'UTF-8');
let clasesJSON = JSON.parse(txtClases);

//let clasesJSON = require('./clases.json');


console.log(clasesJSON);

clasesJSON.forEach(function (e) { console.log(e.titulo) });

/*
for(let i=0; i<clasesJSON.length; i++){
    const clase =clasesJSON[i];
    console.log(clase.titulo);
}
*/


//!EJERCICIO N°3
/*
Crear una función para filtrar las clases por su estado, asignándolas a diferentes arrays  de objetos literales y guardar todo esto ordenado por estado, en un archivo.json. 
XtraPlus3: Mediante una función arrow guardar cada array en un archivo diferente según corresponda el estado. Por ejemplo: “repasar.json”, “terminadas.json”.
*/

function filtrarClases(clases) {

    let clasesEnPendiente = [];
    let clasesTerminadas = [];
    let clasesParaRepasar = [];

    for (let i = 0; i < clases.length; i++) {

        if (clases[i].estado === "terminada") {
            clasesTerminadas.push(clases[i]);
        }
        else if (clases[i].estado === "repasar") {
            clasesParaRepasar.push(clases[i]);
        }
        else {
            clasesEnPendiente.push(clases[i]);
        }

    }



    let objetoDeTipoDeClases = { clasesEnPendiente, clasesParaRepasar, clasesTerminadas };

    let TipoDeClasesJSON = JSON.stringify(objetoDeTipoDeClases);

    guardarJSON('clasesEnPendiente', JSON.stringify(clasesEnPendiente));
    guardarJSON('clasesParaRepasar', JSON.stringify(clasesParaRepasar));
    guardarJSON('clasesTerminadas', JSON.stringify(clasesTerminadas));

}

function guardarArchivo(nombreArchivo, dataClase) {
    fs.writeFileSync(nombreArchivo, dataClase);
}

function guardarJSON(nombreArchivo, dataClase){
    guardarArchivo(nombreArchivo+'.json', dataClase)
}


filtrarClases(clasesJSON);

