                                                Atividade

1. Você receberá uma lista de palavras e uma string. Escreva uma função que decida quais palavras podem ser formadas com os caracteres da string (cada caractere só pode ser utilizado uma vez). Retorne a soma do comprimento das palavras escolhidas.

    - Exemplo 1:

                words = ["cat", "bt", "hat", "tree"], chars = "atach"
                # saída: 6
                """Explicação: As palavras que podem ser formadas com os caracteres da string
                            são "cat" (tamanho 3) e "hat" (tamanho 3)."""


    - Exemplo 2:

                words = ["hello", "world", "students"], chars = "welldonehoneyr"
                # saída: 10
                """Explicação: As palavras que podem ser formadas com os caracteres da string
                            são "hello" (tamanho 5) e "world" (tamanho 5)."""

⚠️ Faça a análise de complexidade da sua solução.

2. Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a uma única outra pessoa. Cada pessoa tem um score que é o total de pessoas que estão abaixo dela, incluindo subordinados de seus subordinados, além dela própria. Isso significa que uma pessoa que não tem nenhuma equipe tem score 1. Uma pessoa com apenas um subordinado e esse subordinado não tem equipe, tem score 2. Escreva um método que calcule o score de uma determinada pessoa.

    - Exemplo de subordinados:

                                - 1 => 2, 3

                                - 2 => 4

                                - 3 => sem subordinados

                                - 4 => 5, 6

                                - 5 => 7

                                - 6 => sem subordinados

                                - 7 => sem subordinados


    - Neste exemplo, o score de cada pessoa é:


                                - 1 => 5 (score 2) + 1 (score 3) + 1 (score dele próprio) = 7

                                - 2 => 4 (score 4) + 1 (score dele próprio) = 5

                                - 3 => 1 (score dele próprio)

                                - 4 => 2 (score 5) + 1 (score 6) + 1 (score dele próprio) = 4

                                - 5 => 1 (score 7) + 1 (score dele próprio) = 2

                                - 6 => 1 (score dele próprio)

                                - 7 => 1 (score dele próprio)


⚠️ Faça a análise de complexidade da sua solução.









