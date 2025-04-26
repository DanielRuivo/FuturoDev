// const botao = document.querySelector('botao');
// const h1 = document.querySelector('h1');
// const h2 = document.querySelector('h2');
// function clickDebotao(){
//     console.log('Botâo acionado!');
// }

// botao.addEventListener('click', clickDebotao());

// botao.addEventListener('click', function () {
//     console.log('Botão acionado!');
// });

// function clickDeOnClick () {
//     console.log('Botão clicado pelo Onclick!');
// }

// h1.addEventListener('mousedown', function () {
//     console.log('H1 pressionado!');
// });

// h2.addEventListener('mouseup', function () {
//     console.log('H2 pressionado!');
// });

// document.addEventListener('keydown', function (event) {
//    console.log('Tecla:' + event.key + 'Código:' + event.code); 
// });

//Modo escuro e claro

const botaoModo = document.getElementById('modoEscuro');
let modoEscuro = false; 

botaoModo.addEventListener('click', mudarModo);

botaoModo.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === 'd' || e.key === 'D')) {
        mudarModo();
    }
});

function mudarModo() {
    modoEscuro = !modoEscuro;
    if (modoEscuro) {
        document.body.style.background = '#222'
        console.log(`Modo escuro: ${'ON'}`);
        botaoModo.textContent = 'Modo Claro';
        botaoModo.style.backgroundColor = '#fff';
        botaoModo.style.color = '#222';

    } 
    else {
        document.body.style.background = '#fff'
        console.log(`Modo escuro: ${'OFF'}`);
        botaoModo.textContent = 'Modo Escuro';
        botaoModo.style.backgroundColor = '#222';
        botaoModo.style.color = '#fff';

    }
}
