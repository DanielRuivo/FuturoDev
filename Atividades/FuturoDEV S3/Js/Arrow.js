let num1 = 0;

const soma = (pNum1, pNum2) => pNum1 + pNum2;
const subtrcao = (pNum1, pNum2) => pNum1 - pNum2;
const multiplicacao = (pNum1, pNum2) => pNum1 * pNum2;
const divisao = (pNum1, pNum2) => (pNum2 !== 0 ? pNum1 / pNum2 : "Divisão impossivel. Tente novamente");

function calculadora() {
    let continuar = true;

    while (continuar) {
        console.log("Escolha um das opções\n[1]Soma\n[2]Subtração\n[3]Multiplacação\n[4]Divisão\n[5]Sair");

        const escolha = prompt("Digite o número do opção desejada: ")

        if (escolha === "5") {
            console.log("Saindo da cauculadora...")
            continuar = false;
            break;
        }

        let num1 = parseInt(prompt("Digite o primeiro numero: "));
        let num2 = parseInt(prompt("Digite o segundo numero: "));

        let resultado;

        switch (escolha) {
            case "1":
                resultado = soma(num1, num2);
                console.log("O resultado da soma:" + resultado);
                break;
            case "2":
                resultado = subtrcao(num1, num2);
                console.log("O resultado da subtração:" + resultado);
                break;
            case "3":
                resultado = multiplicacao(num1, num2);
                console.log("O resultado da  multiplicação:" + resultado);
                break;
            case "4":
                resultado = divisao(num1, num2);
                console.log("O resultado da  divisão:" + resultado);
                break;
            default:
                console.log("Opção inválida!!!");
                break;
        }
    }
}

calculadora();