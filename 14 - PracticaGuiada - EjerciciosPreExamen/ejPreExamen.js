//!PRACTICA GUIADA - EJERCICIOS PRE-EXAMEN

//1. Obtener el listado de los departamentos
/*Leer los contenidos del archivo y parsearlos
En base a lo anterior, guardar el resultado en una variable
Resultado esperado: variable conteniendo un array con todos los departamentos. Recuerden que pueden verificar el contenido de la variable haciendo un console.log()
 */

const fs = require('fs');
let txtDeptos = fs.readFileSync(__dirname + '/departamentos.json', 'UTF-8');
let deptosJSON = JSON.parse(txtDeptos);

//console.log(deptosJSON);


/*2. Crear un objeto literal que represente la inmobiliaria
Este objeto contendrá, una propiedad con el listado de departamentos obtenido en el punto anterior y las funcionalidades que nos solicitan a continuación:
 */
let inmobiliaria = {
    //! A. Agregar una propiedad llamada departamentos que contenga los departamentos 
    departamentos: deptosJSON,


    //! B. Agregar un método departamentosDisponibles que permita consultar disponibilidad, es decir, que devuelva una lista de los departamentos disponibles.
    departamentosDisponibles: function () {
        let arrayFiltrado = this.departamentos.filter(departamentos => departamentos.disponible === true);

        return arrayFiltrado
    },


    //! C. Agregar un método listarDepartamentos que reciba como parámetro un array de departamentos y los imprima por consola.
    //? Este método deberá imprimir por cada elemento: 
    //? El id. ,  El precio,  disponible (en caso de ser true mostrar “Disponible” caso contrario “Alquilado”)

    listarDepartamentos: function (departamentos) {
        consolaDisponible = inmobiliaria.disponible === true ? "Disponible" : "Alquilado";

        // departamentos.forEach(departamento => console.log("id: " + departamento.id + " , precio: " + departamento.precioAlquiler + " , Disponibilidad: " + (departamento.disponible ? "Disponible" : "Alquilado")))

        departamentos.forEach(departamento => console.log("id: " + departamento.id + " , precio: " + departamento.precioAlquiler + " , Disponibilidad: " + consolaDisponible))
    },

    //! D. Agregar un método buscarPorId que permita buscar él departamento en función de su identificador.
    //? Este método debe devolver un departamento en caso de encontrar el identificador 

    buscarPorId: function (identificacion) {

        let departamentoEncontrado = this.departamentos.find(departamentos => departamentos.id == identificacion);

        return departamentoEncontrado
    },


    //! E. Agregar un método buscarPorPrecio que permita filtrar los departamentos disponibles, siempre y cuando el precio sea menor o igual al precio enviado como argumento.
    //? Este método debe usar departamentosDiponibles.
    //? Este método debe devolver una lista de departamentos.

    buscarPorPrecio: function (precio) {
        let disponibles = this.departamentosDisponibles()
        let departamentosDisponibles = disponibles.filter(departamentos => departamentos.precioAlquiler <= precio);

        return departamentosDisponibles

    },

    //! F. Agregar un método que permita ordenar por precio de menor a mayor según él precioAlquiler y devolverlo.

    ordenarPorPrecio: function () {

        let ordenados = this.departamentos.sort((a, b) => a.precioAlquiler - b.precioAlquiler)
        return ordenados
    },



    //!G. Agregar un método precioConImpuesto que permita realizar un incremento del precioAlquiler a todos los departamentos, tanto disponibles como no disponibles, según un porcentaje que se envía como argumento al momento de la invocación del método. 
    //? ejemplo : PrecioConImpuesto(10), deberá incrementar el precioAlquiler de Todos los departamentos un 10%
    //? Resultado esperado: un array con los precios con el impuesto sumado

    precioConImpuesto: function (porcentaje) {
        let aumento = (porcentaje / 100) + 1;

        let departamentosConImpuestos = this.departamentos.map(departamentos => (departamentos.precioAlquiler * aumento))

        return departamentosConImpuestos
    },

    //! H. Agregar un método que permita alquilar un departamento.
    //?  Este método recibe por parámetro el id del departamento y actualiza la propiedad del departamento en false.
    //? Resultado esperado: que quede actualizada la propiedad departamento de la inmobiliaria, donde el departamento que alquilo no está disponible.

    alquilarDepartamento: function (id) {
        let departamento = this.buscarPorId(id)

        if (departamento.disponible) {
            departamento.disponible = false;
            console.log("El departamento " + departamento.id + " ha sido actualizado a alquilado \n")
        } else if (departamento === false) {
            console.log("El departamento " + departamento.id + " ya se encuentra alquilado \n")
        } else {
            console.log("El departamento con ID N° " + departamento.id + " ya se encuentra alquilado \n")
        }

    },

    //!I. Agregar un método que permita calcular el ingreso en el flujo de caja que tendría la empresa cuando se pague el alquiler de los departamentos.
    //?Resultado esperado: suma del alquiler de todos los departamentos que estén alquilados.
    departamentosAlquilados: function () {
        let arrayFiltrado = this.departamentos.filter(departamentos => departamentos.disponible === false);

        return arrayFiltrado
    },

    ingresos: function () {
        let alquilados = this.departamentosAlquilados();
        let ingresos = alquilados.reduce((acum, departamento) => acum + departamento.precioAlquiler, 0)

        return ingresos

    },



    //! 3. Métodos adicionales

    //! A. Agregar un método comentar que permita realizar un comentario, (la propiedad comentarios es un array de objetos dentro de el objeto     departamento) a un departamento indicando los siguientes datos: comentario = string ,  puntuacion = number (1 ... 5) .
    //? Resultado esperado: un mensaje “Comentario realizado con éxito”

    realizarComentarios: function (id, comentario, puntuacion) {

        let departamento = this.buscarPorId(id)
        let comentarioRealizado = {
            comentario,
            puntuacion
        }
        if (departamento) {
            console.log("Comentario realizado con éxito");
            departamento.comentarios.push(comentarioRealizado)
        } else {
            console.log("No se encontro el departamento que solicitó para comentar")
        }

    },
    //!B. Agregar un método preferenciasCliente que permita filtrar los departamentos disponibles, si cumplen con las especificaciones deseadas por el cliente. Este método deberá tomar un array de departamentos disponibles retornados del método departamentosDisponibles, luego realizar una iteración del mismo y retornar cuando encuentre coincidencias con las especificaciones deseadas por él cliente especificaciones:
    //? cantidadHabitacion = number (si es 0 es un monoambiente)
    //? mascotas = booleano
    //? cantidadPersonas = number .
    //? precioAlquiler = number.
    //? el método debe recibir las 4 especificaciones del cliente, y debe encontrar los departamentos que cumplan con todas ellas. 
    //? Resultado esperado: array de departamentos disponibles que además dispongan de las características preferidas por el cliente.

    preferenciasCliente: function (cantidadHabitacion, mascotas, cantidadPersonas, precioAlquiler) {
        let disponibles = this.departamentosDisponibles()

        let departamentosDiponibles = disponibles.filter(departamento => departamento.cantidadHabitacion === cantidadHabitacion && departamento.aceptaMascotas === mascotas && departamento.cantidadPersonas >= cantidadPersonas && departamento.precioAlquiler <= precioAlquiler)

        return departamentosDiponibles

    }

}


console.log('\n----------- B) Departamentos Disponibles:-----------\n')
console.log(inmobiliaria.departamentosDisponibles());

console.log('\n----------- C) Listar Departamentos:-----------\n');
console.log(inmobiliaria.listarDepartamentos(inmobiliaria.departamentos));

console.log('\n----------- D) Encontrar por ID:-----------\n');
console.log(inmobiliaria.buscarPorId(5));

console.log('\n----------- E) Buscar por Precio:-----------\n');
inmobiliaria.listarDepartamentos(inmobiliaria.buscarPorPrecio(2000))

console.log('\n-----------F) Ordenar por Precio:-----------\n');
inmobiliaria.listarDepartamentos(inmobiliaria.ordenarPorPrecio());

console.log('\n----------- G) Precios con Impuesto:-----------\n');
console.log(inmobiliaria.precioConImpuesto(20));

console.log('\n----------- H) Alquilar Departamento:-----------\n')
inmobiliaria.alquilarDepartamento(1);
inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);

console.log('\n----------- I) Ingresos:-----------\n')
console.log(inmobiliaria.ingresos())

console.log("---------------------------------------------------------------------------------------");
console.log('\n------------------MÉTODOS ADICIONALES:------------------')
console.log('\n----------- A) Realizar Comentario:----------- \n')
inmobiliaria.realizarComentarios(5, "Acogedor", 4);
console.log(inmobiliaria.buscarPorId(5));
inmobiliaria.realizarComentarios(100, "Acogedor", 5);
console.log(inmobiliaria.buscarPorId(100));

console.log('\n----------- B) Departamentos Preferibles:----------- \n')
console.log(inmobiliaria.preferenciasCliente(1, true, 1, 10000))