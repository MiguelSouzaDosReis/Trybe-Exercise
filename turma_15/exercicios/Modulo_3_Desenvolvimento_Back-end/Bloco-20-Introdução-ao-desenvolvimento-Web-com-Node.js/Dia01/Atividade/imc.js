const readline = require('readline-sync')

const altura = readline.questionInt('Qual sua altura ? ');

const peso = readline.questionFloat('Qual seu peso? ');

const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

if (imc < 18.5) {
  console.log('Situação: Abaixo do peso (magreza)');
}

if (imc >= 18.5 && imc < 25) {
  console.log('Situação: Peso normal');
}

if (imc >= 25 && imc < 30) {
  console.log('Situação: Acima do peso (sobrepeso)');
}

if (imc >= 30 && imc < 35) {
  console.log('Situação: Obesidade grau I');
}

if (imc >= 35 && imc < 40) {
  console.log('Situação: Obesidade grau II');
}
if (imc > 40){
  console.log('Situação: Obesidade graus III e IV');
}