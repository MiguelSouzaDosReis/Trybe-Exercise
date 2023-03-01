def sum(n):
    if n == 0:
        print(0)
    else:
        print(n + sum(n - 1))


if __name__ == "__main__":
    sum(4)
