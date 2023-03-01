def verify_max_time_ok(collected_values):
    max_time = 0
    current_time = 0
    for value in collected_values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time
    print(max_time)


array1 = [0, 1, 1, 1, 0, 0, 1, 1]

array2 = [1, 1, 1, 1, 0, 0, 1, 1]

verify_max_time_ok(array2)

# Resposta da análise de complexidade: O algoritmo realiza um for, portanto possui Complexidade de Tempo O(n).
