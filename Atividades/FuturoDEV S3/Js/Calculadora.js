let opcao = 0;
console.log("Vamos calcular?")

do {
    console.log("1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão\n5-Sair")
    opcao = prompt("Escolha a opção que desejar: ")

    switch (opcao) {
        case "1":
            soma();
            break;
        case "2":
            subtracao();
            break;
        case "3":
            multiplicacao();
            break;
        case "4":
            divisao();
            break;
        case "5":
            console.log("Você Saiu!");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
            break;
    }
} while (opcao != "5");

function soma() {
    let a = parseFloat(prompt("Digite o primeiro número: "));
    let b = parseFloat(prompt("Digite o segundo número: "));
    console.log(a + " + " + b + " = " + (a + b));
}

function subtracao() {
    let a = parseFloat(prompt("Digite o primeiro número: "));
    let b = parseFloat(prompt("Digite o segundo número: "));
    console.log(a + " - " + b + " = " + (a - b));
}

function multiplicacao() {
    let a = parseFloat(prompt("Digite o primeiro número: "));
    let b = parseFloat(prompt("Digite o segundo número: "));
    console.log(a + " * " + b + " = " + (a * b));
}

function divisao() {
    let a = parseFloat(prompt("Digite o primeiro número: "));
    let b = 0;

    do {
        b = parseFloat(prompt("Digite o segundo número (diferente de 0): "));
        if (b == 0) {
            console.log("Impossível dividir por zero. Tente novamente.");
        }
    } while (b == 0);

    console.log(a + " / " + b + " = " + (a / b));
}
