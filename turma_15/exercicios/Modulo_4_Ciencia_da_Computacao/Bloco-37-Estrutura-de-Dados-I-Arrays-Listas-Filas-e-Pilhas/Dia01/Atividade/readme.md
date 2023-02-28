                                                        Atividade

1. Crie um projeto que simulará a arquitetura que vimos em aula. Ele deverá ter um arquivo principal para a execução do programa que representará nosso Sistema Operacional e duas classes, que representarão a Memória Principal e a Secundária.

- Cada tipo de memória vai armazenar os dados na memória que ela representa, sendo a Principal aquela que armazena tudo em memória RAM e a secundária no disco. Através do Python estaremos fazendo chamadas ao Sistema Operacional para realizar essas tarefas para nós, pois ele melhor do que ninguém saberá utilizar as memórias. O objetivo do nosso script será realizar a soma de uma lista de números aleatórios utilizando as duas implementações de memória. Os dados serão sempre armazenados como strings!

    - Vamos lá:
        - 1. Crie um novo diretório na sua máquina para os exercícios (pode chamar ele de computador ou pc 😎).

        - 2. Vamos começar a nossa memória principal, ou memória RAM: para isso crie um arquivo main_memory.py e adicione o conteúdo abaixo nela. Implemente os métodos get e load
            - No load você adicionará (append) o elemento passado (value) à lista loaded_memory.
            - No get você retornará o valor presente na posição dada (index) na lista loaded_memory. Se o valor não existir ou não for numérico, retorne 0.
            - Perceba que estamos armazenando os valores na memória RAM através das variáveis que definimos!

        - 3. Crie um arquivo secondary_memory.py para ser a nossa memória secundária e adicione o conteúdo abaixo. Mais uma vez, você será responsável pela implementação dos métodos get e load porém agora você deverá utilizar a função open, para persistir esses dados em disco.
            - No load, utilizando o método open, escreva um código que crie um novo arquivo utilizando next_file_name como path e salve o value no conteúdo deste novo arquivo.
            - No get, também utilizando o método open, retorne o conteúdo do arquivo file_name. Não esqueça de converter o valor para numérico (float ou int).

        - 4. Vamos criar nosso arquivo principal para gerenciar as “memórias” que criamos. Para isso, crie um novo arquivo operating_system.py e coloque o seguinte conteúdo:

        - 5. Vamos testar nosso script! Execute o comando python operating_system.py e veja a saída no console. Deu certo?! Como foram os tempos de saída?!

        - 6. Para deixar nosso script ainda mais legal, vamos aumentar a quantidade de números para serem somados. Adicione uma grande quantidade de números no array de números aleatórios. Para isso, basta adicionar * 200 ao final da linha que declara a lista RANDOM_NUMBERS, para multiplicar a quantidade de elementos na lista. Rode o script novamente. Como foi o tempo de resposta agora? Deu diferença, né? Qual foi mais rápido?!

                    R: o de 200 foi bem mais rapido

        - 7. Agora, vamos reforçar mais um conteúdo aprendido:

        - 8. Comente os trechos de código que fazem a operação de limpeza (clean) da memória.

        - 9.Execute o comando novamente

        - 10. Comente os trechos de código que fazem a operação de carregamento (load) da memória e execute novamente.

        - 11. Compare os resultados das somas. O que aconteceu?

                    R: a soma da memoria principal foi zerada, já a secundaria manteve o mesmo


2. Agora vamos explorar o sistema que estamos utilizando. Crie um script chamado my_platform.py e utilize-o para exibir no console as informações solicitadas abaixo. Para isso, utilize o módulo platform do Python 😎.

    - 1. A plataforma que está sendo utilizada (linux, win32, darwin, etc);

    - 2. A versão (release);

    - 3. A arquitetura (x32 ou x64);


3. Agora vamos tanto explorar o hardware que estamos utilizando quanto aprender algo interessante: enviar programaticamente comandos para o shell. Crie um script chamado resources.py e utilize-o para exibir no console as informações solicitadas abaixo. Para isso, utilize o método check_output do módulo subprocess do Python 😎.

    - 1. Informações sobre a sua CPU (no Linux você pode usar comando lscpu, e no OSX você pode usar o comando sysctl - n machdep.cpu.brand_string):

    - 2. O modelo;

    - 3. A quantidade de cores;

    - 4. A velocidade em Megahertz - MHz;

    - 5. A quantidade de cache (L1, L2, L3).

    - 6. Informações sobre a memória RAM (no Linux você pode usar comando free, e no OSX você pode usar o comando top -l 1 | head -n 10 | grep PhysMem):

    - 7. A quantidade total de memória RAM disponível em sua máquina em megabytes - MB (faça a conversão também 😉).

    - 8. A quantidade total de memória RAM que está sendo utilizada em megabytes - MB.

4. Faça um script que, a cada intervalo de segundo, mostre no console a memória utilizada do sistema operacional vs a memória total (ambos em megabytes - MB). Lembre-se que você pode se basear no script do exercício anterior.

5. Faça um script que exibe o seu respectivo process id utilizando o módulo os do Python e então fique em execução por um determinado tempo. Agora utilizando os comandos de monitoramento visto no conteúdo, exiba os processos em execução e então identifique o seu processo.








