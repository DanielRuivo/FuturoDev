let horasTrabalhadas = 220;
let salarioPorHora = 10;
let setor = "GE";

let vSalario = salario(horasTrabalhadas, salarioPorHora, setor);

console.log(acrescimoSetorial(vSalario, setor));

function salario(pHoras, pValorHora, pSetor) {
    let horas = pHoras > 220 && pSetor !== "GE" ? 220 : pHoras;
    let horasExtras = pHoras > 220 && pSetor !== "GE" ? pHoras - 220 : 0;

    return (horas * pValorHora) + (horasExtras * (pValorHora * 2));
}

function acrescimoSetorial(pSalario, pSetor) {
    if (pSetor === "OP") {
        return pSalario * 1;
    } else if (pSetor === "AD") {
        return pSalario * 1.10;
    } else {
        return pSalario * 1.25;
    }
}