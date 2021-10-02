const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('ao receber uma url ele retornara os repositorios' , () => {
    it('ao receber esta url ele irar retornar os repositorios da turma 1' , () => {
        getRepos('https://api.github.com/orgs/tryber/repos').then((response) => {
            expect(response).toContain('sd-01-week4-5-project-todo-list');
            expect(response).toContain('sd-01-week4-5-project-meme-generator')
        })
    })
})