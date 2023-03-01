import * as Ex from './exercises';

console.log("A ÁREA DE UM:");


// Atividade 1
console.log(`- Losango com diagonais iguais a 32cm e 18cm: ${Ex.getRhombusArea(32, 18)}cm²`);
console.log(`- Losango com diagonais iguais a 200cm e 50cm: ${Ex.getRhombusArea(200, 50)}cm²`);
console.log(`- Losango com diagonais iguais a 75cm e 25cm: ${Ex.getRhombusArea(75, 25)}cm²`);

// Atividade 2
console.log(`- Trapézio com base maior igual a 100cm, base menor igual a 70cm e altura igual a 50cm: ${Ex.getTrapezoidArea(100, 70, 50)}cm²`);
console.log(`- Trapézio com base maior igual a 75cm, base menor igual a 50cm e altura igual a 35cm: ${Ex.getTrapezoidArea(75, 50, 35)}cm²`);
console.log(`- Trapézio com base maior igual a 150cm, base menor igual a 120cm e altura igual a 80cm: ${Ex.getTrapezoidArea(150, 120, 80)}cm²`);

// Atividade 3
console.log(`- Círculo de raio 10cm: ${Ex.getCircleArea(10)}cm²`);
console.log(`- Círculo de raio 5cm: ${Ex.getCircleArea(5)}cm²`);
console.log(`- Círculo de raio 100cm: ${Ex.getCircleArea(100)}cm²`);