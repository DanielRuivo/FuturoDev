//Titulo
const titulo = document.querySelector('h1');
titulo.textContent = 'Pudim de Leite';

//Substituindo
let subtitulo = document.createElement('h2');
subtitulo.innerText = 'Uma receita fácil de fazer e muito boa!'
document.body.insertBefore(subtitulo, document.querySelector('div'))

//Imagem
const imagem = document.createElement('img');
imagem.src = '/Atividades/img/img S5/pudimdeleite.jpg';
imagem.style.width = '400px';
imagem.style.display = 'block';
imagem.style.marginTop = '10px';
imagem.style.marginBottom = '10px';
imagem.style.borderRadius = '10px';

const divConteudo = document.querySelector('h2');

divConteudo.insertAdjacentElement('afterbegin', imagem);


//Pudim
const h2Pudim = document.createElement('h3');
h2Pudim.id = 'pudim';
h2Pudim.textContent = 'Pudim de Leite Condensado';

const olPudim = document.querySelector('ul');
olPudim.insertAdjacentElement('afterbegin', h2Pudim);

//Receita
const receita = document.getElementById('ulitem1');
receita.textContent = '1 Lata de leite condensado';
const receita1 = document.getElementById('ulitem2');
receita1.textContent = '2 Latas de leite (medida do lata de leite condesado)';

const receita2 = document.createElement('li');
receita2.id = 'ulitem3';
receita2.textContent = '3 Ovos inteiros';

const ul = document.querySelector('ul');
ul.appendChild(receita2);

//Calda
const h2Calda = document.createElement('h3');
h2Calda.id = 'calda';
h2Calda.textContent = 'Calda de Caramelo';

const olConteudo = document.querySelector('ul');
olConteudo.appendChild(h2Calda);

//Ingredientes da calda
const ingCalda = document.createElement('li');
ingCalda.id = 'ulitem4';
ingCalda.textContent = '1 xicara de açúcar';

const ul1 = document.querySelector('ul');
ul1.appendChild(ingCalda);


//Modo de Preparo da Calda
const h2IngredientesCalda = document.createElement('h3');
h2IngredientesCalda.id = 'ingredientesCalda';
h2IngredientesCalda.textContent = 'Modo de Preparo da Calda';

const olConteudoCalda = document.querySelector('ol');
olConteudoCalda.insertAdjacentElement('afterbegin', h2IngredientesCalda);

//Passo a Passo
const receita3 = document.getElementById('olitem1');
receita3.textContent = 'Em uma panela de fundo largo, derreta o açúcar até ficar dourado.';
const receita4 = document.getElementById('olitem2');
receita4.textContent = 'Junte 1/2 xícara (chá) de água quente e mexa com uma colher.';

const ingredienteCalda = document.createElement('li');
ingredienteCalda.id = 'olitem3';
ingredienteCalda.textContent = 'Deixe ferver até dissolver os torrões de açúcar e a calda engrossar.';

const ol = document.querySelector('ol');
ol.appendChild(ingredienteCalda);

const ingredienteCalda1 = document.createElement('li');
ingredienteCalda1.id = 'olitem4';
ingredienteCalda1.textContent = 'Forre com a calda uma forma com furo central (19 cm de diâmetro) e reserve.';

const ol1 = document.querySelector('ol');
ol1.appendChild(ingredienteCalda1);

//Modo de Preparo do Pudim
const h2IngredientesPudim = document.createElement('h3');
h2IngredientesPudim.id = 'ingredientesPudim';
h2IngredientesPudim.textContent = 'Modo de Preparo do Pudim';

const olConteudoPudim = document.querySelector('ol');
olConteudoPudim.appendChild(h2IngredientesPudim);

//Passo a Passo
const ingredientePudim2 = document.createElement('li');
ingredientePudim2.id = 'olitem5';
ingredientePudim2.textContent = 'Bata todos os ingredientes do pudim no liquidificador e despeje na forma reservada.';

const ol2 = document.querySelector('ol');
ol2.appendChild(ingredientePudim2);

const ingredientePudim3 = document.createElement('li');
ingredientePudim3.id = 'olitem6';
ingredientePudim3.textContent = 'Asse em banho-maria, em forno médio (180º C), por cerca de 1 hora e 30 minutos.';

const ol3 = document.querySelector('ol');
ol3.appendChild(ingredientePudim3);

const ingrediente4 = document.createElement('li');
ingrediente4.id = 'olitem6';
ingrediente4.textContent = 'Depois de frio, leve para gelar por cerca de 6 horas.';

const ol4 = document.querySelector('ol');
ol4.appendChild(ingrediente4);

const ingrediente5 = document.createElement('li');
ingrediente5.id = 'olitem6';
ingrediente5.textContent = 'Desenforme e sirva a seguir.';

const ol5 = document.querySelector('ol');
ol5.appendChild(ingrediente5);