let opcao = 0;

console.log('APLICAÇÃO BASICA FUTURODEV')


do{
    
console.log("[1]Qual o nosso curso?\n[2]Quem modulo estamos?\n[3]Quem é o nosso mentor?\n[4]Quem é o monitor?\n[5]Sair");

opcao = prompt("Escolha uma das opções: ")

switch(opcao){
    case "1":
        console.log("FuturoDEV Joinville (Joinville + tech)");
        break;
    case "2":
        console.log("Módulo 1: (Front-End Html/CSS/JS e React)");
        break;
    case "3":
        console.log("O mentor do nosso módulo atualmente é o Otto!");
        break;
    case "4":
        console.log("O nome do Monitor é o Vanderlei!");
        break;
    case "5":
        console.log("Opção Invalida!");
        break;
    }
}while(opcao != 5);