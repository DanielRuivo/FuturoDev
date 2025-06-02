let ContarPrimos = 10;
ContP = contarPrimos(ContarPrimos);

console.log(ContP);

function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function contarPrimos(limite) {
    let contador = 0;
    for (let i = 2; i <= limite; i++) {
        if (ehPrimo(i)) contador++;
    }
    return contador;
}