let nome = "Daniel";
let totalHoras = 300;
let salHora = 10;
let setor = "CO";

let vSalario = 0;
let pHoraExtra = 0;

// Calculando o salário com horas extras
vSalario = salario(totalHoras, salHora);
pHoraExtra = HoraExtra(totalHoras);
let descricaoSetor = descSetor(setor);
ACrescimoSetorial = acrescimoSetorial(vSalario, setor);

console.log("O funcionário, do setor " + descricaoSetor + ", " + nome + " teve " + totalHoras + " horas trabalhadas e " + pHoraExtra + " horas extras. Seu salário mensal foi de: R$" + ACrescimoSetorial + ".");

function salario(pHoras, pValorHora, pSetor) {
    let horas = 0;
    let horasExtras = 0;

    if(pHoras > 220 && pSetor != "CO"){
        horas = 220 ;
        horasExtras = pHoras - 220;
    }
    else{
        horas = pHoras;
    }

    return (horas*pValorHora)+(horasExtras*(pValorHora*2))

}

function acrescimoSetorial(psalario, pSetor) {
    if (pSetor === "AD") {
        return psalario * 1;
    } else if (pSetor === "MO") {
        return psalario * 1.10;
    } else {
        return psalario * 1.25;
    }
}

function descSetor(pSetor) {
    if (pSetor === "AD") {
        return "Administrativo";
    } else if (pSetor === "MO") {
        return "Monitoramento";
    } else {
        return "Coordenadoria";
    }
}


function HoraExtra(pHoras){
    let extras;
    if(extras === 220){
        console.log(pHoras);
        return;
    }
    else{
        return pHoras - 220;
    }
}