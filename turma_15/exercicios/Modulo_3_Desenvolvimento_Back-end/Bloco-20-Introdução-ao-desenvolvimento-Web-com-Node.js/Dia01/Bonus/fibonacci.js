const readline = require('readline-sync');

function calculaElemento (quantity) {
  let a = 1;
  let b = 1;

  for (let n = quantity; n >= 0; n--) {
    if (b) console.log(b);
    const temp = a;
    a = a + b;
    b = temp;
  }

  console.log(b);
  return b;
}

  const n = readline.questionInt('Digite o valor de n: ');

  if (n <= 0) {
    console.log('Digite um número maior que 0!')
  } else {
    console.log(`n: ${n}`);
  
    calculaElemento(n - 2);
  }

