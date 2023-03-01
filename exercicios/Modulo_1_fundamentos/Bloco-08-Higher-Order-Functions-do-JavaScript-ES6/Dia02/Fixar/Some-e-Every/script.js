// Atividade 1
// Não tinha entendido, olhei no gabarito e agora entendi

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, nome) => {
  
  return arr.some((ListaDeNome) => ListaDeNome === nome);
}

// console.log(hasName(names, 'Mateus'));

// Atividade 2
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
     return arr.every((Idade) => Idade.age >= minimumAge)
  }
  
  console.log(verifyAges(people, 18));