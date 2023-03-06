ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)
    if (rating % 3) == 0:
        print(f'{rating} é múltiplo de 3')