def good_pairs(numbers):
    answer = 0
    i = 0
    size = len(numbers)
    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                answer += 1
    print(answer)

array1 =  [1, 3, 1, 1, 2, 3]

array2 = [1, 1, 2, 3]

good_pairs(array2)

# Resposta da análise de complexidade: O algoritmo realiza um for dentro de outro, portanto possui Complexidade de Tempo O(n²).