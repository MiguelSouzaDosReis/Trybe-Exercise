def multiply_arrays(array1, array2, array3):
    result = []
    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 + number2 + number3)

    print(result)


meu_array = [1, 2, 3]

multiply_arrays(meu_array, meu_array, meu_array)
