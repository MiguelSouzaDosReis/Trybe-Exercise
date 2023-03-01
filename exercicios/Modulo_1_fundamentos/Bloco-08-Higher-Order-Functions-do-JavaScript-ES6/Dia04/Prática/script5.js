const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
console.log(names.reduce((results, number) => `${results}${number}`).split('')
.filter((letras) => letras === 'a' || letras === 'A').length)

}
containsA();