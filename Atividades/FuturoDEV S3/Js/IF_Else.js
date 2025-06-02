let Salario = 2200;
let HorasTrabalhadas = 230;
let ValorPorHora = Salario / 220;
let HoraExtra = ValorPorHora * 2;
let ValorHoraExtra = ((HorasTrabalhadas - 220) * HoraExtra);
let SalarioTotal = ValorHoraExtra + Salario;

if (HorasTrabalhadas > 220) {
    console.log("O seu Salário é: " + SalarioTotal);
}
else {
    console.log("O seu Salário é: " + Salario + "R$");
}