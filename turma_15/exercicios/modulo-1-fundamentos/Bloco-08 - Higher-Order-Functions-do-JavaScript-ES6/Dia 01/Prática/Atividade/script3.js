const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answerSheet = (RespostasCorretas, RespostasDosEstudantes, check) => {
  return check(RespostasCorretas, RespostasDosEstudantes);
};
const CheckAsRespostas = (array1, array2) => {
  let pontos = 0;
  for (let index in array1) {
    if (array1[index] === array2[index]) {
      pontos += 1;
    }  else if (array2[index] === 'N.A' ) {
        pontos += 0
    } else if (array1[index] !== array2[index] && array2[index] !== 'N.A') {
      pontos -= 0.5;
    }
  }
  return pontos;
};

console.log(answerSheet(RIGHT_ANSWERS, STUDENT_ANSWERS, CheckAsRespostas));