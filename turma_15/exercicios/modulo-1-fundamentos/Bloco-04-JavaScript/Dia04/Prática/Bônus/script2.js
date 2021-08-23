//utilizei o gabarito para fazer a atividade mas eu entendi como funciona 

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
  let result = [];
  for (let index = 0; index < vector.length; index ++) {
    let numbers = vector[index];
    for (let indexSub = 0; indexSub < numbers.length; indexSub ++) {
      let current = numbers[indexSub];
      if ((current % 2) === 0) {
        result.push(current);
      } 
    }
  }
  return result;
}

console.log(arrayOfNumbers(vector));