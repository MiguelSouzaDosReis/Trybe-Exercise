const oddsAndEvens = [13, 3, 4, 10, 7, 2] 
let a  = oddsAndEvens.sort() 
for (let index = 1; index < a.length; index += 1) {
      for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (a[index] < a[secondIndex]) {
          let position = a[index];
          a[index] = a[secondIndex];
          a[secondIndex] = position;
        }
      }
    }

console.log(a);