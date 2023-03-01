def shuffle(items):
    answer = []
    div_cards_by_two = len(items) // 2
    for offset in range(div_cards_by_two):
        answer.extend(items[offset::div_cards_by_two])
    print(answer)

array1 = [2, 6, 4, 5]

array2 = [1, 4, 4, 7, 6, 6]

shuffle(array2)

# Resposta da análise de complexidade: O algoritmo realiza um for, portanto possui Complexidade de Tempo O(n).
