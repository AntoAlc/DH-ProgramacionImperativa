// let cuenta = {
//     nroCuenta : 1234,
//     saldo : 0,
//     titular : "Kevin Sangregorio",

//     deposito : function(cantidadDinero) {
//         this.saldo += cantidadDinero;
//         console.log(`Depósito realizado con éxito, saldo actual: ${this.saldo}`);
//     },

//     extraccion : function(cantidadDinero) {
//         if (this.saldo < cantidadDinero) {
//            console.log('Fondos insuficientes'); 
//         } else {
//             this.saldo = this.saldo - cantidadDinero;
//             console.log(`Extracción realizada con éxito, tu saldo actual: ${this.saldo}`);
//         }
//     }
// }
// cuenta.deposito(100);
// cuenta.extraccion(180);

function Cuenta(nroCuenta, saldo, titular) {
    this.nroCuenta = nroCuenta;
    this.saldo = saldo;
    this.titular = titular;

    this.deposito = function(cantidadDinero) {
        this.saldo += cantidadDinero;
        console.log(`Depósito realizado con éxito, saldo actual: ${this.saldo}`);
    };

    this.extraccion = function(cantidadDinero) {
        if (this.saldo < cantidadDinero) {
           console.log('Fondos insuficientes'); 
        } else {
            this.saldo = this.saldo - cantidadDinero;
            console.log(`Extracción realizada con éxito, tu saldo actual: ${this.saldo}`);
        }
    };
}

let cuenta = new Cuenta(12312,0, 'Otro pobre como yo');
cuenta.deposito(5000);
cuenta.extraccion(4000);