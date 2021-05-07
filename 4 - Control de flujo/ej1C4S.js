const altMin =120;
const altMax=200;


function puedeSubir(altura, acompañante){
    if(altura>altMax || altura<altMin){
        return false;
    
    }else if(altura>=140){
        return true;
    }else if (acompañante){
        return true;
    }else {
        return false;
    }
}




//a)
console.log(puedeSubir(145, false))//true
console.log(puedeSubir(145, true))//true
console.log(puedeSubir(210, false))//false
console.log(puedeSubir(210, true))//false

//b)
console.log(puedeSubir(145, false))//true
console.log(puedeSubir(145, false))//true
console.log(puedeSubir(145, false))//true
console.log(puedeSubir(145, false))//true
console.log(puedeSubir(145, false))//true
console.log(puedeSubir(145, false))//true


console.log("Segunda Opcion")
