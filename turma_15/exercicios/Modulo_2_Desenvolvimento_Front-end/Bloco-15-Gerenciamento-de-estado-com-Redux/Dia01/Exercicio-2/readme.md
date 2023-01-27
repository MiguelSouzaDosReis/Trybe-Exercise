                           Exercicio 2

1. Crie um reducer com os estados iniciais.

2. Crie uma store com o reducer criado.

3. Adicione um case dentro do switch do reducer para alterar os estados theme e status. O case do estado theme deve alterná-lo entre ‘light’ e ‘dark’. O case do estado status deve alterná-lo entre ‘online’ e ‘offline’.

4. Faça o dispatch de cada uma das actions ao clicar nos respectivos botões.

5. Adicione um store.subscribe() para atualizar as seguintes informações na página:

            Se o tema for light, o body deverá possuir uma cor de fundo escura e uma letra clara.
            Se o tema for dark, deverá possuir uma cor de fundo clara e uma letra escura.
            Se o status for online, o #status deverá possuir o texto Online.
            Se o status for offline, o #status deverá possuir o texto Offline.
            Não se esqueça também de modificar o texto dos botões para refletirem exatamente o que eles fazem