let numbers = [2, 4, 6, 7, 10, 0, -3]
let maior = 0

for (let index = 0; index < numbers.length; index++) {
     if (numbers[maior] < numbers[index]) {
         } else {
             maior = index
         }
    
}
             console.log(maior)