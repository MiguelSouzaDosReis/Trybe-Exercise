const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
console.log(arrays.reduce((results, number) => results.concat(number)))
}
flatten()

/* [
  '1',  '2', '3',
  true, 4,   5,
  6
] */
