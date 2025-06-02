# Componente de Massas em Cards - Documentação

Este projeto implementa um componente em React para exibição de opções de massas em formato de cards, seguindo o modelo Gnocchi, com a regra de exibir 3 massas por linha. Cada card mostra o nome da massa, ilustração, valor e os molhos permitidos.

## Estrutura do Projeto

O projeto foi desenvolvido utilizando Vite e React, com a seguinte estrutura de arquivos:

```
pasta-cards/
├── src/
│   ├── components/
│   │   ├── MassaCard.jsx       # Componente de card individual para cada massa
│   │   ├── MassaCard.css       # Estilos do card de massa
│   │   ├── MassasGrid.jsx      # Componente de grade para exibir 3 cards por linha
│   │   ├── MassasGrid.css      # Estilos da grade de cards
│   │   ├── MolhoComponent.jsx  # Componente para exibição de cada molho
│   │   └── MolhoComponent.css  # Estilos do componente de molho
│   ├── data/
│   │   └── massasMolhos.js     # Dados das massas e molhos permitidos
│   ├── App.jsx                 # Componente principal da aplicação
│   ├── App.css                 # Estilos globais da aplicação
│   ├── main.jsx                # Ponto de entrada da aplicação
│   └── index.css               # Estilos base
```

## Funcionalidades Implementadas

1. **Exibição em Cards**: Cada massa é exibida em um card com nome, ilustração, valor e molhos permitidos.
2. **Layout Responsivo**: A grade exibe 3 cards por linha em telas grandes, adaptando-se para 2 ou 1 card em telas menores.
3. **Componente de Molhos Integrado**: Cada molho permitido é exibido usando um componente dedicado.
4. **Interatividade**: Os molhos podem ser selecionados/desselecionados ao clicar.
5. **Estilização Moderna**: Design com efeitos de hover, sombras e transições suaves.

## Como Executar o Projeto

1. Navegue até a pasta do projeto:
   ```
   cd pasta-cards
   ```

2. Instale as dependências (já realizado):
   ```
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```
   npm run dev
   ```

4. Acesse a aplicação no navegador através da URL fornecida no terminal (geralmente http://localhost:5173).

## Personalização

- **Dados**: Os dados das massas e molhos podem ser modificados no arquivo `src/data/massasMolhos.js`.
- **Estilos**: Os estilos podem ser ajustados nos respectivos arquivos CSS.
- **Imagens**: As imagens são referenciadas por caminhos relativos e devem ser colocadas na pasta `public/images/`.

## Regras de Negócio Implementadas

- Exibição obrigatória de 3 massas por linha
- Cada massa exibe apenas os molhos permitidos conforme a especificação:
  - Espaguete: Alla Puttanesca, Al Pesto di Basilico, Cacio e Pepe, Alla Matriciana
  - Tagliatelle: Alla Puttanesca, Alla Matriciana
  - Fettuccine: Alla Puttanesca, Al Pesto di Basilico, Cacio e Pepe
  - Penne: Alla Puttanesca, Cacio e Pepe
  - Rigatoni: Alla Matriciana
  - Pappardelle: Alla Puttanesca, Alla Matriciana
