const readline = require('readline-sync');

function realizaFatoracao(x) {
  return [1].includes(x) ? 1 : x * (x - 1);
}

  const x = readline.questionInt('Informe o valor de x: ');

  if (x <= 0) {
    console.log('Digite um número maior que 0!')
  } else {
    console.log(`x: ${x}`);
  
    const resultado = realizaFatoracao(x);
  
    console.log(`Resultado: ${resultado}`);
  }

