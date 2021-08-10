
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i++) {
    for (let j= 0; j< i; j++) {
      if (numbers[i]===numbers.length-1) {
           let ultimo =+ numbers[i] * 2
   
           
      } else {
        let NaoUltimo =+ numbers[i] * numbers [j]
        
    }
    let resultado = NaoUltimo + ","+  ultimo  
    console.log(resultado)
}}