function anterior (n){
    //return ( (n-=1));
    return(--n);  
    //n-- primero devuelve el valor y desp le resta 1
    //--n primero le resta y desp lo devuelvew
}

function triple (n){
    return (n*3);
}

function anteriorDelTriple(n){
    n=triple(n);

    return (n-=1);
}

console.log(anterior(4));
console.log(triple(4));
console.log(anteriorDelTriple(4));