                                             Atividade

1. Utilize o arquivo src/test/exercise-one.test.js para adicionar os testes pedidos no exercício. Implemente os testes para verificar os seguintes comportamentos da aplicação:

            Verifique que um botão com o texto "Adicionar" está sendo renderizado
            Verifique que existe um elemento com o texto "Adicionar".
            Verifique que o elemento é do tipo button.
            Verifique o comportamento de adicionar uma tarefa
            Verifique que existe um input com a label "Tarefa:".
            Verifique que existe um botão com o texto "Adicionar".
            Verifique que é possível digitar no input.
            Verifique que o texto digitado só é adicionado à lista de tarefas após clicar no botão.
            Verifique que, ao clicar no botão "Adicionar", o texto que está digitado no input é adicionado à lista de tarefas renderizada e que o valor do input é limpo.

2. Utilize o arquivo src/test/exercise-two.test.js para adicionar os testes pedidos no exercício. Verifique o comportamento de adicionar várias tarefas

            Dentro do arquivo src/test/exercise-two.test.js já existe um array com diversos itens. Faça com que cada elemento desse array seja um item da lista de tarefas.

            Após adicionar todos os itens, verifique que todos eles estão sendo renderizados na tela.

            Teste apenas o componente Item

            Renderize apenas o componente <Item /> no teste.

            Passe uma string como prop para o componente <Item /> e verifique que esse texto está sendo renderizado na tela.



3. Diferente dos exercícios anteriores, os testes para esse exercício já estão criados no arquivo src/test/exercise-three.test.js. Note que alguns testes não estão passando - você deverá criar a funcionalidade para que os testes passem. A proposta desse exercício é que você leia os testes e entenda o que precisa ser desenvolvido, por isso, aqui no README você encontrará apenas uma descrição simples de cada funcionalidade.

            Adicione as seguintes funcionalidades

            O botão "Adicionar" deve estar habilitado apenas quando há algum texto digitado no input.
            Cada item da lista deve ter um botão com o texto "Remover" ao seu lado. Ao clicar nesse botão, a respectiva tarefa deve ser apagada da lista.