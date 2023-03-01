const readline = require('readline-sync');

  const distancia = readline.questionInt('Distância percorrida? ');
  const tempo = readline.questionInt('Tempo gasto? ');

  const velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média: ${velocidadeMedia} m/s`);
