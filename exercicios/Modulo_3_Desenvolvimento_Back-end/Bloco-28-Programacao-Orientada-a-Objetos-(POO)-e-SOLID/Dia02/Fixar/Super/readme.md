                                        FIXAR

1. No construtor da Subclass , o atributo isSuper deve ser setado como false . Você vai precisar utilizar o super .

2. Dentro da função que recebe um objeto da Superclass como parâmetro, cheque o valor do atributo isSuper e imprima no console "Super!" se for true e "Sub!" se for false ;