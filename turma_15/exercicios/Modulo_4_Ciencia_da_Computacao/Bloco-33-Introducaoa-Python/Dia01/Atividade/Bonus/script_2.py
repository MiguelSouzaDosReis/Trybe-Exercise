def get_right_triangle(base_length):
    triangle = []
    for count in range(base_length):
        triangle.append("*" * (count + 1))
    return "\n".join(triangle)

print(get_right_triangle(5))