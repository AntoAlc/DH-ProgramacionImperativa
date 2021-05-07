function Auto(marca, modelo, precio, km, color, cuotas, anio, patente, vendido) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.km = km;
    this.color = color;
    this.cuotas = cuotas;
    this.anio = anio;
    this.patente = patente;
    this.vendido = vendido;
}

let autos= [

    auto1 = {
        marca: 'Ford',
        modelo: 'Fiesta',
        precio: 150000,
        km: 200,
        color: 'Azul',
        cuotas: 12,
        anio: 2019,
        patente: 'APL123',
        vendido: false
    },
    auto2 = {
        marca: 'Toyota',
        modelo: 'Corolla',
        precio: 100000,
        km: 0,
        color: 'Blanco',
        cuotas: 14,
        anio: 2019,
        patente: 'JJK116',
        vendido: false
    }


    
]

module.exports = autos;


// let Auto = {
//     marca: ,
//     modelo: ,
//     precio: ,
//     km: ,
//     color: ,
//     cuotas: ,
//     anio: ,
//     patente: ,
//     vendido:
// }

// auto1 = {('Ford', 'Fiesta', 150000, 200, 'Azul', 12, 2019, 'APL123', false),
// auto2 ('Toyota', 'Corolla', 100000, 0, 'Blanco', 14, 2019, 'JJK116', false)
