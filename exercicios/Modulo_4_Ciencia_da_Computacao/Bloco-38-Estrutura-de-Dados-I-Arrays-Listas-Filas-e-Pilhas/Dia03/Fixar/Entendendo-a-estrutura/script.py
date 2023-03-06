import sys

class ListaArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        return len(self.data)

    def __str__(self):
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def remove(self, index):
        return self.data.pop(index)

    def update(self, index, value):
        self.data.insert(index, value)

array = ListaArray()

array_memory_size = sys.getsizeof(array.data)

array.set(0, "Marcos")
array.set(1, "Patrícia")


array.update(1, "Otavio")
print(array)