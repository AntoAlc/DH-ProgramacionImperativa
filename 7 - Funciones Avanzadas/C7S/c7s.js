

const a = [23, 45, 32];
const b = [12, 67, 75];
const encontrarGanador = function (a, b) {
    let primerParticipante = 0;
    let segundoParticipante = 0;
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            primerParticipante++;
        } else if (a[i] < b[i]) {
            segundoParticipante++;
        }
    }
    if (primerParticipante > segundoParticipante) {
        return "primer";
    } else {
        return "segundo";
    }
}
// primera etapa
console.log("El g