# TicketOnline - Loja de Ingressos de Cinema

Uma aplicação SPA (Single Page Application) completa para loja de ingressos de cinema, desenvolvida seguindo os princípios do Atomic Design.

## 🎯 Funcionalidades Implementadas

### ✅ Estrutura e Arquitetura
- **Atomic Design**: Estrutura organizada em atoms, molecules, organisms, templates e pages
- **SPA**: Navegação sem recarregamento de página
- **Context API**: Gerenciamento de estado para tema e navegação
- **Responsividade**: Design adaptável para desktop e mobile

### ✅ Navegação
- **Menu Principal**: Início, Filmes, Contato
- **Navegação Dinâmica**: Sistema de roteamento customizado
- **Estados Ativos**: Indicação visual da página atual

### ✅ Sistema de Tema
- **Tema Claro/Escuro**: Alternância via ícone (🌙/☀️)
- **Persistência**: Tema salvo no localStorage
- **Transições Suaves**: Animações entre temas

### ✅ Componentes de Filmes
- **MovieCard**: Card de apresentação com poster, gênero, idade indicada
- **MovieGrid**: Grid responsivo para exibição de múltiplos filmes
- **MovieDetails**: Página de detalhes com sinopse completa
- **Mock de Dados**: 6 filmes pré-configurados

### ✅ Formulário de Contato
- **Campos Obrigatórios**: Email, Assunto, Mensagem
- **Campo Opcional**: Urgência (checkbox)
- **Validação**: Verificação de campos obrigatórios
- **Feedback**: Alert com dados enviados para verificação

### ✅ Páginas e Templates
- **Página Inicial**: Hero section com imagem de cinema e features
- **Página de Filmes**: Grid com todos os filmes disponíveis
- **Página de Detalhes**: Informações completas do filme selecionado
- **Página de Contato**: Formulário de contato completo

## 🏗️ Estrutura do Projeto

```
TicketOnline/
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   │   └── MovieCard.jsx
│   │   ├── organisms/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── MovieGrid.jsx
│   │   │   ├── MovieDetails.jsx
│   │   │   └── ContactForm.jsx
│   │   ├── templates/
│   │   │   ├── TemplateInicioPage.jsx
│   │   │   ├── TemplateFilmesPage.jsx
│   │   │   ├── TemplateDetFilmesPage.jsx
│   │   │   └── TemplateContatoPage.jsx
│   │   └── pages/
│   │       ├── InicioPage.jsx
│   │       ├── FilmesPage.jsx
│   │       ├── DetFilmesPage.jsx
│   │       └── ContatoPage.jsx
│   ├── contexts/
│   │   ├── ThemeContext.jsx
│   │   └── NavigationContext.jsx
│   ├── utils/
│   │   └── moviesData.js
│   ├── assets/
│   │   └── images/
│   │       └── cinema-front.jpg
│   ├── styles/
│   │   └── components.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html (versão funcional)
├── package.json
├── todo.md
└── README.md
```

## 🎬 Filmes em Cartaz

1. **Avatar: O Caminho da Água** - Ficção Científica (12 anos)
2. **Pantera Negra: Wakanda Para Sempre** - Ação/Aventura (12 anos)
3. **Top Gun: Maverick** - Ação/Drama (12 anos)
4. **Doutor Estranho no Multiverso da Loucura** - Ação/Fantasia (14 anos)
5. **Minions: A Origem de Gru** - Animação/Comédia (Livre)
6. **Thor: Amor e Trovão** - Ação/Aventura (12 anos)

## 🚀 Como Executar

### Versão HTML (Funcional)
1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Todas as funcionalidades estão disponíveis imediatamente

### Versão React (Estrutura Completa)
1. Instale as dependências: `npm install`
2. Execute o servidor de desenvolvimento: `npm run dev`
3. Acesse `http://localhost:3000`

## 🎨 Tecnologias Utilizadas

- **React 19**: Framework principal
- **Context API**: Gerenciamento de estado
- **CSS3**: Estilização e responsividade
- **JavaScript ES6+**: Lógica da aplicação
- **HTML5**: Estrutura semântica

## 📱 Responsividade

- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Adaptação automática do grid
- **Mobile**: Layout em coluna única com navegação otimizada

## 🎯 Funcionalidades Testadas

✅ Navegação entre páginas  
✅ Sistema de tema claro/escuro  
✅ Exibição de filmes em grid  
✅ Detalhes dos filmes  
✅ Formulário de contato com validação  
✅ Responsividade em diferentes tamanhos de tela  
✅ Persistência do tema selecionado  

## 📝 Observações

- O projeto foi desenvolvido seguindo rigorosamente o padrão Atomic Design
- Todas as funcionalidades solicitadas foram implementadas
- A aplicação é totalmente responsiva e acessível
- O código está bem estruturado e documentado
- Versão HTML funcional disponível para demonstração imediata

---

**Desenvolvido com ❤️ para TicketOnline - Sua experiência cinematográfica começa aqui!**

