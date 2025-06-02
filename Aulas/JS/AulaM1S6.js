//Explicação
// Indices dos Arrays:
// const frutas = ['Maçã', 'Banana', 'Laranja'];
// ['Maçã', 'Banana', 'Laranja'];

//   Ultimo item do array:
//     console.log('O meu último primeiro elemento do array é:\n' + frutas[frutas.length - 1]);
//   Mudar elemento do array:
//     frutas[frutas.length - 1] = 'Pera';
//    console.log('O meu último primeiro elemento do array é:\n' + frutas[frutas.length - 1]);

//   Adicionar dentro do array
//   frutas.push('Manga');
// frutas.push('Morango');
//   Remove item dentro do array
//   console.log('O meu último primeiro elemento do array é:\n' + frutas[frutas.length - 1]);
// frutas.pop();

// const nomesConvidados = [];
// let opcao = "0";

// while (opcao != "3") {
//     console.log("Opções do Sistrma\n[1] Adicionar convidado\n[2] Listar convidados\n[3] Sair");
//     opcao = prompt("Escolha uma das opções: ");

//     switch (opcao) {
//         case "1":
//             adicionarConvidado();
//             break;
//         case "2":
//             console.log(nomesConvidados)
//             break;
//         case "3":
//             console.log("Saindo...")
//             break;
//         default:
//             console.log("Opção invalida!")
//     }
// }

// function adicionarConvidado() {
//     const nome = prompt("Nome completo do convidado: ");
//     nomesConvidados.push(nome);
//     console.log("Convidado Adicionado!")
// }
//---------------------------------------------------------------------------------
// Filtro de array
// const precos = [100, 340, 200, 201, 768];

// let precosBaixos = precos.filter(preco => preco <= 200);

// console.log(precos);
// console.log(precosBaixos);

// let compPrecosd = precosBaixos.reduce(precos);
// console.log(compPrecosd);
//-------------------------------------------------------------------------------------
//Exemplo de array dentro de array

// const produtos = [['Mouse', '123456567344357', 15 ,'NJP36854BV'], ['Teclado', '123532364571234', 20, 'NJP23566BV']]

// console.log(produtos);

// produtos.push(['Monitor', '12397344357', 780, 'NMOB757854BV']);

// console.log(produtos);

// produtos.shift();
// console.log(produtos);