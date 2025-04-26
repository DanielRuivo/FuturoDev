let numero = prompt("Digite o número para verificar se seus antecessores são pares: ");

let contador = 1;

while (contador <= numero) {
    let texto = "";
    if (contador % 2 > 0) {
        console.log("o número " + contador + " é Impar.");
    }
    else if(contador > numero){
        console.log("o número " + contador + " é Par.");
    }

    contador++;
}