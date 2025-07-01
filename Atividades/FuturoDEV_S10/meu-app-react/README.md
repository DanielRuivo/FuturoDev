# PlantaShop - E-commerce de Plantas

Um e-commerce de plantas de jardim desenvolvido com React e TypeScript, seguindo o padrão Atomic Design.

## Estrutura do Projeto

O projeto segue a metodologia Atomic Design, com a seguinte estrutura de pastas:

```
src/
├── components/
│   ├── atoms/        # Componentes básicos e indivisíveis
│   ├── molecules/    # Combinações de átomos
│   ├── organisms/    # Combinações de moléculas e átomos
│   └── templates/    # Estruturas de página
├── pages/            # Páginas da aplicação
├── contexts/         # Contextos React
├── types/            # Definições de tipos TypeScript
└── styles/           # Estilos globais
```

## Componentes Implementados

### Átomos

1. **Button**
   - Props: `variant: "primary" | "secondary"`
   - Estilizado com CSS Modules

2. **PriceTag**
   - Props: `value: number`
   - Formata o valor como moeda brasileira (R$ 12,30)

3. **PlantIcon**
   - Props: `size: "sm" | "md" | "lg"`
   - Utiliza o ícone `LocalFlorist` do Material UI

4. **ThemeToggle**
   - Botão para alternar entre os temas claro e escuro

### Moléculas

1. **PlantCard**
   - Props: `plant: Plant` (id, name, price, light)
   - Exibe informações da planta e botão para adicionar ao carrinho
   - Indica o tipo de luz necessária (sol/sombra)

### Organismos

1. **PlantGrid**
   - Props: `plants: Plant[]`
   - Exibe os cards de plantas em grid responsivo
   - Usa `useMediaQuery` para:
     - 1 coluna em mobile
     - 2 colunas em tablet
     - 3 colunas em desktop

### Templates

1. **StoreLayout**
   - Header com logo
   - Área de conteúdo
   - Footer

### Páginas

1. **PlantStore**
   - Usa o template StoreLayout
   - Exibe o grid com 6 produtos mockados

## Sistema de Temas

O projeto implementa um sistema de temas claro/escuro utilizando o Material UI:

- **Tema Claro**: Baseado em tons de marrom (#c2a39a, #e1d1c8)
- **Tema Escuro**: Baseado em tons de verde (#001600, #0a3007)

O tema é aplicado tanto no default quanto no paper, com o paper sendo utilizado em pontos chaves do projeto para melhorar o design.

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```
   pnpm install
   ```
3. Execute o servidor de desenvolvimento:
   ```
   pnpm run dev
   ```
4. Acesse a aplicação em `http://localhost:5173`

## Tecnologias Utilizadas

- React
- TypeScript
- Material UI
- CSS Modules
- Vite

