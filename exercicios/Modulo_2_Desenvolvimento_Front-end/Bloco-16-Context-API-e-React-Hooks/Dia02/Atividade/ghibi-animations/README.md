                                              Atividade


Você trabalha como pessoa desenvolvedora Front-end no Studio Ghibli, um dos maiores estúdios de animação do Japão. A sua tarefa será criar uma aplicação que lista todos os filmes de animação produzidos pelo estúdio. A pessoa usuária poderá favoritar os filmes que desejar, que poderão ser acessados em uma outra página.

O layout proposto está nesse [figma](https://www.figma.com/file/cqw5AHCVTEEsIGI7eNsAQY/%5BFRONT%5D-Exercise-Ghibli-Animations?node-id=0%3A1&t=0KTsRD18wbnb0tbl-1)


## Exercício 1 - Montando a estrutura

- Crie o `Context` dentro do arquivo `/src/context/FilmContext.js`;
- No componente `App`, utilize o Hook `useEffect` para fazer a chamada à API utilizando o endpoint `https://api-trybe-frontend.vercel.app/api/ghibli-animations`;
- Ainda no componente `App`, crie um estado que será o responsável por armazenar os dados retornados pela API.
- Com o Context criado, adicione o `FilmContext.Provider` no arquivo App.js, envolvendo todas as rotas.
- Adicione como valor do `Provider` o estado criado contendo os dados da API.

## Exercício 2 - Exibindo a lista de filmes na página Home

- No arquivo `/src/pages/Home`, liste os filmes recebidos pela API:
  - Liste o título, a imagem e a descrição de todos os filmes;
  - Adicione um botão, em cada filme, para salvar a animação na página de favoritos.
  - Você **deve** armazenar os itens favoritos no `Context`.

⚠️ Atenção: O mesmo filme não pode ser listado mais de uma vez na página de favoritos.

💡 Dica: Utilize o Hook `useContext` para recuperar os valores armazenados no `Provider`.

## Exercício 3 - Exibindo a lista de filmes favoritados na página Favorites

- No arquivo `src/pages/Favorites.js`, liste todos os filmes favoritados na página Home;
- Na página de filmes favoritados, cada filme deve possuir um botão que, ao ser clicado, remove o filme da lista de filmes favoritos.

## Exercício 4 (Bônus) - Estilizando a página

- Faça o CSS de acordo com o [figma do projeto](https://www.figma.com/file/cqw5AHCVTEEsIGI7eNsAQY/%5BFRONT%5D-Exercise-Ghibli-Animations?node-id=0%3A1&t=0KTsRD18wbnb0tbl-1)