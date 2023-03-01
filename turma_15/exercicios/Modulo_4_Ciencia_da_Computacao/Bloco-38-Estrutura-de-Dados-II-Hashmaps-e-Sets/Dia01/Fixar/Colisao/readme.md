                                                        Fixar

3. Descubra qual técnica de tratamento de colisão é utilizada pelo Dict, de Python e o HashMap, do Java. Em inglês, o termo de busca é “collision resolution“.

                R: A classe Dict, de Python, utiliza a técnica de tratamento de colisão chamada Open Addressing já
                   A classe HashMap, de Java, utiliza a técnica de Separate Chaining

4. Como as diferentes implementações afetam a performance? Quais são os prós e contras da implementação de cada linguagem?

                R: O contra da solução do Python é determina que o próximo índice vai ser visitado de maneira relativamente randômica em que resulta em uma complexidade assintótica de tempo de O(1) e o favor é que para evitar que o vetor buckets fique rapidamente sem espaço, um Dict é inicializado com uma lista de tamanho 2**15 ints. Como em Python cada int ocupa 24 bytes, no mínimo, o uso de memória é considerável.

                R: O contra da solução de Java é o tamanho inicial é menor, uma vez que o que tende a crescer são as chains de cada bucket e não a lista de buckets. O a favor seria, trade-off com o custo de tempo. Para cada consulta, o tempo de busca é proporcional à quantidade de itens naquele bucket que, sendo uma árvore, chega a O(log n), sendo n a quantidade de itens naquele bucket.