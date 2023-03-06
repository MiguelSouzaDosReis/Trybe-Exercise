

1. Crie uma migration chamada create-authors para criar uma tabela authors com as seguintes colunas:



                            Nome da coluna	                Descrição

                                id              deve ser do tipo integer, não pode ser nula e
                                                deve ser a chave primária da tabela com auto incremento

                                name	        deve ser do tipo string e não pode ser nulo



2. Crie uma migration chamada create-genres para criar uma tabela genres com as seguintes colunas:




                            Nome da coluna	                 Descrição

                                id	            deve ser do tipo integer, não pode ser nula e
                                                deve ser a chave primária da tabela com auto incremento

                                genre	        deve ser do tipo string e não pode ser nulo



3. Crie uma migration para criar uma tabela books com as seguintes colunas:



                            Nome da coluna	                        Descrição

                                id	            deve ser do tipo integer, não pode ser nula e deve ser a
                                                chave primária da tabela com auto incremento

                                title	        deve ser do tipo string e não pode ser nulo

                                author_id	    deve ser do tipo integer, não pode ser nula e deve ser
                                                chave estrangeira da tabela
                                                (seu relacionamento é feito com o campo id da tabela authors)

                                genre_id	    deve ser do tipo integer, não pode ser nula e deve ser chave estrangeira da tabela
                                                (seu relacionamento é feito com o campo id da tabela genres)




4. Crie o model Author com as configurações necessárias da tabela authors.

5. Crie o model Book com as configurações necessárias da tabela books.

6. Crie um arquivo src/index.ts que retorne um array de objetos com as seguintes chaves:

- author: deve possuir o valor correspondente ao nome do autor;
- totalBooks: deve possuir o valor correspondente ao total de livros daquele autor.