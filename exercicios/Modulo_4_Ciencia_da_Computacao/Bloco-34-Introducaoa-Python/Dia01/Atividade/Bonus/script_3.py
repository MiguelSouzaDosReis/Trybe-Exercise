def summation(limit):
    total = 0
    for number in range(1, limit + 1):
        total += number
    return total

print(summation(5))