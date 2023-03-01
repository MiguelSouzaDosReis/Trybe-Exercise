                                                    Fixar

5. Consulte a forma de se criar um dicionário chamado de dict comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro.

                                - 3 deve ser mapeado para 6;

                                - 10 deve ser mapeado para 20.

6. Dada uma string, construa um dicionário com a contagem de cada caractere da palavra. Utilize o pseudocódigo e o exemplo abaixo para se nortear.

                                Para cada char na string:
                                    - Se o char não estiver no dicionário, inclua com o valor 1;

                                    - Se estiver, incremente o valor.


                                # Exemplo:

                                str = "bbbbaaaacccaaaaaaddddddddccccccc"
                                # saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}

                                str = "coxinha"
                                # saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
                                # Explicação: Nenhuma letra repete em coxinha :)

7. Utilize o dicionário criado no exercício 5. Para as chaves ímpares, não queremos mais mapear para o seu dobro, mas sim para o seu triplo. Consulte o método keys() e atualize o seu dicionário para a nova regra.

