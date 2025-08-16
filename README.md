# WeFit - E-commerce de Filmes

## 📖 Sobre o Projeto

WeFit é uma aplicação web de e-commerce especializada na venda de filmes, desenvolvida com foco em performance e experiência do usuário. O projeto demonstra práticas modernas de desenvolvimento React, incluindo otimizações para evitar re-renderizações desnecessárias e uma arquitetura bem estruturada.

## 🚀 Funcionalidades

- **Catálogo de Filmes**: Listagem de filmes com informações detalhadas
- **Carrinho de Compras**: Sistema completo de gerenciamento de itens
- **Gestão de Estado**: Redux Toolkit para estado global da aplicação
- **Roteamento**: Navegação entre páginas com React Router
- **Animações**: Transições suaves com Framer Motion
- **Responsividade**: Design adaptável para diferentes dispositivos
- **Performance**: Otimizações para evitar re-renderizações desnecessárias

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React** - Biblioteca principal para interface do usuário
- **TypeScript** - Tipagem estática para maior segurança do código
- **Vite** - Build tool rápido e moderno
- **Styled Components** - CSS-in-JS para estilização

### Gerenciamento de Estado

- **Redux Toolkit** - Gerenciamento de estado global

### Dados e API

- **React Query (TanStack Query)** - Gerenciamento de estado do servidor
- **Axio** - Cliente HTTP para requisições

### Roteamento e Animações

- **React Router DOM** - Roteamento da aplicação
- **Framer Motion** - Biblioteca de animações

## 🏗️ Arquitetura do Projeto

```
src/
├── api/           # Camada de API e React Query
├── components/    # Componentes reutilizáveis
├── pages/        # Páginas da aplicação
├── store/        # Redux store e slices
├── types/        # Definições de tipos TypeScript
├── utils/        # Utilitários e helpers
└── config/       # Configurações da aplicação
```

## ⚡ Soluções para Re-renderização

### 1. Separação de Lógica com Custom Hooks

O projeto implementa uma arquitetura que separa a lógica de negócio da apresentação, reduzindo re-renderizações desnecessárias:

**Exemplo: `useHome` Hook**

```typescript
// src/pages/Home/useHome.ts
const useHome = () => {
  const { movies, isLoading, isSuccess, error } = useGetMovies();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isMovieInCart = (movieId: number) => {
    return cartItems.some((item) => item.id === movieId && item.quantity > 0);
  };

  const getMovieQuantity = (movieId: number) => {
    return cartItems.find((item) => item.id === movieId)?.quantity || 0;
  };

  return {
    moviesData: movies?.products,
    isLoading,
    error,
    isMovieInCart,
    getMovieQuantity,
  };
};
```

**Benefícios:**

- Por utilizar ReactQuery, não precisamos atribuir um state/effect, pois a lib já lida com isso.
- Lógica de negócio isolada em hooks customizados
- Componentes focados apenas na apresentação
- Redução de complexidade nos componentes
- Facilita testes e manutenção

### 2. Estrutura de Componentes Otimizada

**Componente `Home` com Lógica Separada:**

```typescript
// src/pages/Home/Home.tsx
const Home = () => {
  const { moviesData, isLoading, error, isMovieInCart, getMovieQuantity } =
    useHome();

  return (
    <MoviesGrid>
      {moviesData?.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isInCart={isMovieInCart(movie.id)}
          quantity={getMovieQuantity(movie.id)}
        />
      ))}
    </MoviesGrid>
  );
};
```

**Benefícios:**

- Componente limpo e focado na renderização
- Lógica de negócio encapsulada no hook
- Fácil de entender e manter

## 🚀 Como Executar

### Pré-requisitos

- É necessario adicionar url na .env

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd wefit

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

## 📱 Estrutura de Páginas

- **Home**: Catálogo de filmes com funcionalidade de carrinho
- **Cart**: Gerenciamento do carrinho de compras
- **Success**: Confirmação de compra

## 🎯 Práticas de Performance

1. **Separação de Responsabilidades**: Lógica de negócio separada da apresentação
2. **Hooks Customizados**: Reutilização de lógica sem duplicação
3. **Gerenciamento de Estado Eficiente**: Redux Toolkit com atualizações otimizadas
4. **Componentes Focados**: Cada componente tem uma responsabilidade específica