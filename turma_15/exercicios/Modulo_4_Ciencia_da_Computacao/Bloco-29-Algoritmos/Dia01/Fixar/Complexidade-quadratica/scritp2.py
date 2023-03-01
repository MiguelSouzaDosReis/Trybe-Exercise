def multiply_arrays(array1, array2):
    result = []
    for number1 in array1:
        for number2 in array2:
            result.append(number1 + number2)

    print(result)


meu_array = [1, 2]

multiply_arrays(meu_array, meu_array)
