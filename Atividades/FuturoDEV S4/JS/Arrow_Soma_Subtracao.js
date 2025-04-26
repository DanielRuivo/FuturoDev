const soma = (pNum1, pNum2) => pNum1 + pNum2;
const subtrcao = (pNum1, pNum2) => pNum1 - pNum2;

function somaSubtracao(){
    let continuar = true;

    while (continuar) {
        console.log("Escolha um das opções\n[1]Soma\n[2]Subtração\n[3]Sair");

        const escolha = prompt("Digite o número do opção desejada: ")

        if (escolha === "3") {
            console.log("Saindo das opções...")
            continuar = false;
            break;
        }

        let num1 = parseInt(prompt("Digite o primeiro numero: "));
        let num2 = parseInt(prompt("Digite o segundo numero: "));

        let resultado;

        switch (escolha) {
            case "1":
                resultado = soma(num1, num2);
                console.log(num1 + " + " + num2 + " = " +  resultado);
                break;
            case "2":
                resultado = subtrcao(num1, num2);
                console.log(num1 + " - " + num2 + " = " +  resultado);
                break;
            default:
                console.log("Opção inválida!!!");
                break;
        }
    }
}

somaSubtracao();