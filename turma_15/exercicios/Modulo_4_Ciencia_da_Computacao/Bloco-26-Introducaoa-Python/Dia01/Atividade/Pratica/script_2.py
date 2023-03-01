def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)

print(mean([1,2,3,4]))