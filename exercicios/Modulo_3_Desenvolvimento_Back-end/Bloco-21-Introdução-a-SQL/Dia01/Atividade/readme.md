                                             Atividade

1. Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench.

                                          R: Select Rows- Limit 200

2. Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.

                                          R: Basta clicar em create table

3. Feito isso, crie uma tabela com as seguintes restrições:
                  
                  Nome da tabela: Filme
                  Colunas:
                  FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
                  Descricao - não permite nulos, tipo texto (varchar(100));
                  AnoLancamento - não permite nulos, tipo int;
                  Nota - permite nulos, tipo int;

4. Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.

                                       R: Ela faz referência à tabela country.

5. Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country ?

                                           R: Muitos para 1

6. Qual tipo de relacionamento a tabela country faz com a tabela city ?

                                            R: 1 para Muitos

7. Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

                                              R: store -> staff
                                                 language -> film
                                                 film -> language