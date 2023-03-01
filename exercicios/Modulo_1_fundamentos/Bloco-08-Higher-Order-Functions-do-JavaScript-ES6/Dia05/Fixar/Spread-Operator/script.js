// Faça uma lista com as suas frutas favoritas
const specialFruit = ['melancia', 'mamao', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['maca', 'banana', 'jaca'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));