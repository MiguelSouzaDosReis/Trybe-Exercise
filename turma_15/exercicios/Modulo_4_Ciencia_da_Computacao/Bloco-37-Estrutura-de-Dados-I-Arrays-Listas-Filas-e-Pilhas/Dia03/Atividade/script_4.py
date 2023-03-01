def students_in_instant(arrivals, departures, time_instant):
    answer = 0
    size = len(arrivals)
    for index in range(size):
        if arrivals[index] < time_instant < departures[index]:
            answer += 1
    print(answer)

students_in_instant([1, 2, 3], [3, 2, 7], 4)

# Resposta da análise de complexidade: O algoritmo realiza um for, portanto possui Complexidade de Tempo O(n).
