let salarioIncial = 2200;
let horasTrabalhadas = 220;


function alterarSalario(salarioIncial, ajuste) {
    let novoSalario = salarioIncial + ajuste;
    return novoSalario;

}
salarioIncial = alterarSalario(salarioIncial, 1100);
console.log("Seu atual salário após o aumento é:", salarioIncial);

function calculovalorHora(salarioIncial, horasTrabalhadas) {
    if(horasTrabalhadas === 0){
        return "ERRO: Número de de horas não pode ser 0.";
    }
    return salarioIncial/horasTrabalhadas;
}
let valorpHora = calculovalorHora(salarioIncial, horasTrabalhadas);
console.log("O valor da sua hora de trabalho após o ajuste é: ",valorpHora);

