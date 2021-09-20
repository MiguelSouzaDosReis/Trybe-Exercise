// atividade 1

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  const DivisivelPor3 = (numbers) => numbers % 3 === 0 && numbers % 5 === 0
  const Divisor = numbers.find(DivisivelPor3)
  //console.log(Divisor)

}

findDivisibleBy3And5()

// atividade 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const Divitindo = (names) => names.length === 5
  const NomeDe5 = names.find(Divitindo)
  //console.log(NomeDe5)
}

findNameWithFiveLetters()

// atividade 3

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    const Id = (musicas) => {if (musicas.id === '31031685') console.log(musicas.title) }
    const Musicas = musicas.find(Id)
    return Musicas
  }
  
  findMusic('31031685')