                                            Atividade

1. Crie uma aplicação que consuma a API de fotos aleatórias de cachorros

            Assim que a página for renderizada, uma primeira requisição deve acontecer, e a imagem deve ser mostrada na tela;

            Enquanto a requisição é feita, o texto 'Loading...' deve ser a única coisa presente na tela;

            Deve existir um botão que, para cada clique, busque mais um doguinho.

2. Adicione algumas ações após receber o retorno da requisição para API

            A cada tentativa de atualização do componente, verifique se o campo message tem a string terrier. Se sim, não atualize o componente;

            Guarde a url da última imagem gerada no localStorage após cada atualização;

            Após a atualização do componente, exiba um alert com a raça do doguinho.


3. Extra - Adicione outras funcionalidades à página

            A cada inicialização da aplicação, verifique se existem dados prévios guardados no localStorage. Caso haja, ignore a instrução “assim que a página for renderizada, uma primeira requisição deve acontecer e a imagem deve ser mostrada na tela” e exiba a última imagem guardada.
